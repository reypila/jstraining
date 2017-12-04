var i = 0 ; 

while (i < 10) {
   console.log('Iterando el #' + i);
   i++;
}

var i = 10;
do {
   console.log('Iterando el #'+ i);
   i++;
} while (i < 10);

for (let index = 0; index < 10; index++) {
   console.log('Iterando el #' + index);

   if (i === 4) {
      console.log('I vale 4, rompemos la condicion');
      break;
   }
}