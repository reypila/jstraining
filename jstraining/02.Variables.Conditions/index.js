var variable1 = 10,
   variable2 = 50,
   variable3 = " Im a string ",
   variable4 = true,
   operacion = variable1 * variable2;

// Concatenando cadenas 
// console.log(variable3 + '' + 'concatenada');

// Incremento de variables
// variable1++;
// console.log(variable1);

// Decremento de variables
//variable1--;
//console.log(variable1)

// typeof nos sirve para conocer el tipo de variable
// console.log(typeof(variable1));
// console.log(typeof(variable2));
// console.log(typeof(variable3));
// console.log(typeof(variable4));

// condiciones
// if( variable1 === '10'){
//    console.log('Si es igual a 10');
// }else {
//    console.log('No cumple la condicion');
// } 


switch (variable1) {
   case 10:
      console.log('Vale 10');
      break;
   case 11:
      console.log('Vale 11');
      break;
   case 12:
      console.log('Vale 12');
      break
   default:
      console.log('Variable 1 no cumple ninguna condicion');
      break;
}