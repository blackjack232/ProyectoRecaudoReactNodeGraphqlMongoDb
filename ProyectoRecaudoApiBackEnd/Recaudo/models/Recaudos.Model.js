const mongoose = require ('mongoose')
const RecaudoSchema = new mongoose.Schema({
    
    

    id:{
        type :String,
        requerid :false
    },
    recaudos:[{
                nombreCliente:{
                    type :String, 
                    required :false
                },
                codigoMaquina:{
                    type : String,
                    required :false
                },
                direccion:{
                    type :String,
                    required :false
                },
                tipoMaquina:{
                    type :String,
                    required :false
                },
                fecha:{
                    type :String,
                    required :false
                },
                contadorInicial:{
                    type :String,
                    required :false
                    
                },
                contadorFinal:{
                    type :String,
                    required :false
                    
                },
                diferencia:{
                    type :String,
                    required :false
                    
                },
                porcentajeCliente:{
                    type :String,
                    required :false
                    
                },

    }]
    // nombreCliente:{
    //     type :String, 
    //     required :true
    // },
    // codigoMaquina:{
    //     type : String,
    //     required :true
    // },
    // direccion:{
    //     type :String,
    //     required :true
    // },
    // tipoMaquina:{
    //     type :String,
    //     required :true
    // },
    // fecha:{
    //     type :String,
    //     required :true
    // },
    // contadorInicial:{
    //     type :String,
    //     required :true
        
    // },
    // contadorFinal:{
    //     type :String,
    //     required :true
        
    // },
    // diferencia:{
    //     type :String,
    //     required :true
        
    // },
    // porcentajeCliente:{
    //     type :String,
    //     required :true
        
    // },
});
const Recaudo = mongoose.model ('recaudo',RecaudoSchema);

module.exports = Recaudo;

// nuevo amanecer 

// direccion manzana 57 numero 1

// Jhon  Fredy MOlina




