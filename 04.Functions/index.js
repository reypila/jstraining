function esPar(n) {
   return ( n % 2 === 0);
}

function saludar(nombre) {
   console.log('Hola' + nombre);
}

function calcularNumeroPares(numeros) {
   var respuesta = [];

   numeros.forEach(element => {
      if (esPar(element)) {
         respuesta.push( x + ' es par');
      } else {
         respuesta.push( x + ' es impar');
      }
   });

   return respuesta;
}


function darFormato(monto,moneda) {
   moneda = moneda || false;

   if(moneda) {
      return 'USD' + monto.toFixed(2);
   }else{
      return monto.toFixed(2);
   }
}

var Calculos = {
   iva: 0.18,
   calcularIva: function(monto){
      return monto * Calculos.iva;
   },

   calcularMontosSinIva: function (monto) {
      return monto * (1 - Calculos.iva);
   }
}

var Matematicas = {
   Aritmetica : {},
   Financiera: {}
}

Matematicas.Aritmetica.suma = function (a,b){
   return a + b;
}

Matematicas.Aritmetica.resta = function (a,b){
   return a-b;
}

Matematicas.Financiera.calcularTea = function (capital,interes,periodo) {
   return capital * Math.pow( 1 + interes,periodo);
}