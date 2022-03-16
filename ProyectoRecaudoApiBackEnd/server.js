const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const typeDefs = require('./Recaudo/typesDefs')
const resolvers = require('./Recaudo/resolvers')
const mongoose = require('mongoose')

async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer(
        {
            typeDefs,
            resolvers,
        }
    );

    await apolloServer.start()

    apolloServer.applyMiddleware({ app: app })

    app.use((req, res) => {
        res.send('Servidor corriendo desde apollo')
    })
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.yokbt.mongodb.net/ProyectoMaquinas?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch (error) {
        console.log('Hoola este es el error :   ',error)

    }


    console.log('mongoose conectado...')
    app.listen(4000, () => console.log('El servidor esta corriendo en el puerto 4000 :  https://studio.apollographql.com/sandbox/explorer?'))
}

startServer();


