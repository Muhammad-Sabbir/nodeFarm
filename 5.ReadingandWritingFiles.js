const fs = require("fs");
const textIn = fs.readFileSync("./txt/input.txt","utf-8");
console.log(textIn);
const textOut = `Hey there I am Sabbir learning NODE JS!! ${textIn}.\n Created on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt",textOut);

const textIn2 = fs.readFileSync("./txt/output.txt","utf-8");
console.log(textIn2);
