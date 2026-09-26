// 2.1 EXECUTION CONTEXT< HOISTING & SCOPE

// console.log(nama);
// var nama = "ZACK";

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// Hoisting
// window = global object
// this = window

// execution phase

// console.log(sayHello());
// var nama = "Zack";
// var umur = 25;
// function sayHello() {
//   return "Halo, nama saya " + nama + ", saya berumur " + umur + " tahun";
// }

// function membuat local execution context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = "Zack";
// var username = "@zakiafuadi";

// function cetakURL(username) {
//   var instagramUrl = "http://instagram.com/";
//   return instagramUrl + username;
// }
// console.log(cetakURL(username));

// function a() {
//   return "ini a";
//   function b() {
//     return "ini b";
//     function c() {
//       return "ini c";
//     }
//   }
// }
// console.log(c());

// function a() {
//   console.log("ini a");
//   function b() {
//     console.log("ini b");
//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();
