// Repaso

var array1 = [
   'Manzana',
   'Pera',
   'Sandia',
   'Fresa'
];

// for (let index = 0; index < array1.length; index++) {
//    // const element = array[index];
//    console.log(array1[1]);
// }

array1.forEach( function ( x,i){
   console.log( x + ' pertenece al indice ' + i);
})

// array1.forEach( x => {
//    console.log(x);
// });