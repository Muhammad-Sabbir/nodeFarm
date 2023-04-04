// Blocking Synchronous way
// // Example-01:
// const fs = require('fs');
// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//   console.log('Hello Boss!!!!!!!!!!!!!!!! I am Here');
// });
// console.log('This is the last line');

// // Example-02:
// const fs = require('fs');
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//       console.log(data3);
//       fs.writeFile(
//         `./txt/final.txt`,
//         `${data2}\n${data3}`,
//         'utf-8',
//         (err, data3) => {
//           console.log('Your file has been written');
//         }
//       );
//     });
//   });
// });
// console.log('This is the last line');

// // Example-03:
// const fs = require('fs');
// fs.readFile('./txt/startttttttttttt.txt', 'utf-8', (err1, data1) => {
//   console.log(err1);
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err2, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, 'utf-8', (err3, data3) => {
//       console.log(data3);
//       fs.writeFile(
//         `./txt/final.txt`,
//         `${data2}\n${data3}`,
//         'utf-8',
//         (err, data3) => {
//           console.log('Your file has been written');
//         }
//       );
//     });
//   });
// });
// console.log('This is the last line');
