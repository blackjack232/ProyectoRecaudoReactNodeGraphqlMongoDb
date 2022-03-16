const {gql} = require('apollo-server-express')

const typeDefs = gql`




type ObjetRecaudos{

    nombreCliente:String
    codigoMaquina:String
    direccion:String
    tipoMaquina:String
    fecha: String
    contadorInicial:String
    contadorFinal:String
    diferencia:String
    porcentajeCliente:String
}

input ObjetRecaudos2{

    nombreCliente:String
    codigoMaquina:String
    direccion:String
    tipoMaquina:String
    fecha: String
    contadorInicial:String
    contadorFinal:String
    diferencia:String
    porcentajeCliente:String
}
type Recaudos {
    id: String
    recaudos:[ObjetRecaudos]
   
}

input Recaudos2 {
    id: String
    recaudos:[ObjetRecaudos2]
   
}

type Query {
    hello: String
    getAllRecaudos: [Recaudos]
}



input RecaudosInput{
    nombreCliente:String,
    codigoMaquina:String,
    direccion:String,
    tipoMaquina:String,
    fecha: String,
    contadorInicial:String,
    contadorFinal:String,
    diferencia:String,
    porcentajeCliente:String
}



type Mutation{
    crearRecaudo( recaudo: Recaudos2 ): Recaudos
}
`
module.exports = typeDefs;