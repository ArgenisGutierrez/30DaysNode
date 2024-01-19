const err = new Error('Mensaje de error.');
console.error(err.message);
// console.error(err.code);
console.error(err.stack);


// import { readFile } from "node:js";

// function nSCallback(error, data) {
//   if (error) {
//     console.error('Error : ', error);
//     return;
//   }
//   console.log(data);
// }
// readFile('file_that_exists.txt', nSCallback);
// readFile('file_does_not_exists', nSCallback);
