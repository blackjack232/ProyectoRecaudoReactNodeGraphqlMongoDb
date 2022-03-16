

const Recaudos = require('./models/Recaudos.Model')

const resolvers = {
    Query: {
        hello: () => {
            return 'Hola mundito con anguito';
        },

        getAllRecaudos: async () => {
            try {
                return await Recaudos.find()
            } catch (error) {
                console.log(error)
            }


        },

    },

    Mutation: {
        crearRecaudo: async (parent, args, context, info,error) => {

            try {
            const {


                id,
                recaudos: [{

                    nombreCliente,
                    codigoMaquina,
                    direccion,
                    tipoMaquina,
                    fecha,
                    contadorInicial,
                    contadorFinal,
                    diferencia,
                    porcentajeCliente

                }] } = args.recaudo;
                console.log("estos son los argumentos" ,JSON.parse ( JSON.stringify ( args.recaudo ) ))


            const recaudo = new Recaudos({
                id,
                recaudos: [{

                    nombreCliente,
                    codigoMaquina,
                    direccion,
                    tipoMaquina,
                    fecha,
                    contadorInicial,
                    contadorFinal,
                    diferencia,
                    porcentajeCliente

                }]

            });

            await recaudo.save();

         
                
            } catch (error) {
                console.log("Este es el error de la mutacion crear recaudo",error)
                
            }
            return recaudo;
        }
    },

    // Mutation:{
    //     crearRecaudo: async (parent,args,context,info)=>{
    //         const { 

    //             nombreCliente,
    //             codigoMaquina,
    //             direccion,
    //             tipoMaquina,
    //             fecha,
    //             contadorInicial,
    //             contadorFinal,
    //             diferencia,
    //             porcentajeCliente} = args.recaudo;


    //             const recaudo = new Recaudos({
    //                 nombreCliente,
    //                 codigoMaquina,
    //                 direccion,
    //                 tipoMaquina,
    //                 fecha,
    //                 contadorInicial,
    //                 contadorFinal,
    //                 diferencia,
    //                 porcentajeCliente});

    //             await recaudo.save();
    //             return recaudo;
    //     }
    //    },



};

module.exports = resolvers;