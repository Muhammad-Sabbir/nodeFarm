//---------------------------------- Example-1:--------------------------------------
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//   const pathName = req.url;
//   if (pathName === '/' || pathName === '/overview') {
//     res.end('This is the OVERVIEW');
//   } else if (pathName === '/product') {
//     res.end('This is the PRODUCT');
//   } else if (pathName === '/api') {
//     fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
//       const productData = JSON.parse(data);
//       console.log(productData);
//     });
//     res.end('API');
//   } else {
//     res.writeHead(404, {
//       'Content-type': 'text/html',
//       'my-own-header': 'hello-world',
//     });
//     res.end('<h1>Page not found</h1>');
//   }
// });
// server.listen(8000, '127.0.0.1', () => {
//   console.log('Listening to requests on port 8000');
// });

// //---------------------------------
////Example-2:--------------------------------------------
//Its not really 100% efficient.That is because each time there someone hit this slash api route. The file will have to read and then send back. Instead we can do the file read once in the begining, and then each time someone hits this route, simply send back the data without having to read it each time that a user requested.
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//   const pathName = req.url;
//   if (pathName === '/' || pathName === '/overview') {
//     res.end('This is the OVERVIEW');
//   } else if (pathName === '/product') {
//     res.end('This is the PRODUCT');
//   } else if (pathName === '/api') {
//     fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
//       const productData = JSON.parse(data);
//       res.writeHead(200, { 'Content-type': 'application/json' });
//       res.end(data);
//     });
//   } else {
//     res.writeHead(404, {
//       'Content-type': 'text/html',
//       'my-own-header': 'hello-world',
//     });
//     res.end('<h1>Page not found</h1>');
//   }
// });
// server.listen(8000, '127.0.0.1', () => {
//   console.log('Listening to requests on port 8000');
// });

// // //---------------------------------
////Example-3:--------------------------------------------
// const http = require('http');
// const fs = require('fs');
// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
// const dataObj = JSON.parse(data);

// const server = http.createServer((req,res)=>{
//     const pathName= req.url;
//     if(pathName ==='/' || pathName ==='/overview'){
//         res.end("This is the OVERVIEW");
//     }else if (pathName==='/product'){
//         res.end('This is the PRODUCT');
//     }else if(pathName==='/api'){
//         res.writeHead(200,{'Content-type':'application/json'});
//         res.end(data);
//     }else{
//         res.writeHead(404,{
//             'Content-type':'text/html',
//             'my-own-header': 'hello-world'
//         });
//         res.end('<h1>Page not found</h1>');
//     }

// });

// server.listen(8000,'127.0.0.1',()=>{
//     console.log('Listening to requests on port 8000');
// });
