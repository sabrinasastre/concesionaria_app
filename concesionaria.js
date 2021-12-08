const  autos = require("./autos");

let concesionaria = {
   autos: autos,
   buscarAuto:   function (patente) {
        let   autoEncontrado 
      this.autos.forEach(function(auto){
           if(auto.patente === patente){
                autoEncontrado = auto
            }
      })
          if (autoEncontrado !== undefined ){
             return autoEncontrado
          }else {
              autoEncontrado = null
              return autoEncontrado
          }
    
   },
    venderAuto: function (patente) {  
         return this.autos.map(function(auto){
               if(auto.patente === patente){
                  auto.vendido = true
                }
                return auto
          })
       
   
},

autosParaLaVenta: function(){
   let autosDisponibles =  this.autos.filter(auto =>{
      return auto.vendido===false
   })
   return autosDisponibles
},

autosNuevos: function(){
   let autosNuevosDisponibles = this.autosParaLaVenta().filter(auto => {
      return auto.km<100
   })
   return autosNuevosDisponibles
},

listaDeVentas: function(){
   let nuevoArrayVentas= this.autos.filter(auto=>{
     return auto.vendido===true
   })
      if (nuevoArrayVentas.length !==0){
        return   nuevoArrayVentas = nuevoArrayVentas.map(auto => auto.precio)
      }else{
        return nuevoArrayVentas = []
      }
},

totalDeVentas: function(){
if (this.listaDeVentas().length !== 0){
    let resultado = this.listaDeVentas().reduce(function (acumulador,precio){
      return  acumulador + precio
        })
  return resultado; 
  }else{
    return 0
  }
  
},
  puedeComprar: function (auto, persona){
    return  (auto.precio <=  persona.capacidadDePagoTotal) && 
    (persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas))
  },

  autosQuePuedeComprar: function (persona){
          let autosAcomprar =  this.autosParaLaVenta().filter (function (auto){     
            return  concesionaria.puedeComprar(auto, persona)
          })
          return   autosAcomprar
  }


 }

let persona = {
  nombre: "Juan",
  capacidadDePagoEnCuotas: 20000,
  capacidadDePagoTotal: 100000
  }
//console.log(concesionaria.buscarAuto("APL123"));
//console.log(concesionaria.buscarAuto("APL1"));

//console.log(concesionaria.listaDeVentas()); 
console.log(concesionaria.autosQuePuedeComprar(persona)); 
