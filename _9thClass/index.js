"use strict";
// Hoisting in JavaScript using TypeScript
// console.log(a); // undefined
// var a ;
Object.defineProperty(exports, "__esModule", { value: true });
// // And with Let
// console.log(b); // let is fined but you cannot access before initialization
// let b;
// 1) Hoisting with var is with default initialization of UNDEFINED
// 2) let and const hoisting without default initialization which makes them inaccessible (Temporal Dead Zone) 
// Global Scope because they are available globally not in specific block
// var name1 : string = "Ilyas";
// let name2 : string = "Hadya";
// const name3 : string = "Rafay";
// Block Scope because variable available globally but update in block
// let name; // Rafay
// function Handler()
// {
//     name = "Rafay";
// }
// Handler();
// console.log(name);
// Block Scope 2
// if (true) {
//     var UserName : string = "Faiza";
// }
// console.log(UserName);
// Return Type in Function
// function type(num1:number,num2:number): number // This is called return Type of an Function
// {
//     return num1 + num2;
// }
//Object0
let UserObj = {
    name: "Kamran Khan Tessori",
    Designation: "Governor Sindh",
    Residence: "Governor House"
};
console.log(UserObj);
console.log(UserObj.name, UserObj.Designation, UserObj.Residence);
// Object1
// [
//     {
//         name: "Ilyas",
//         age: 22,
//         city: "Karachi"
//     },
//     {
//         name: "Rafay",
//         age: 22,
//         city: "Karachi"
//     }
// ]
