const fs = require("fs"); // core module
const cetakNama = require("./coba"); // local module
const moment = require("moment"); // third party module

console.log("ini adalah index.js");
console.log(cetakNama("Sandhika"));
console.log(moment().format("YYYY-MM-DD"));
