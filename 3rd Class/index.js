"use strict";
//What is Module?
//Module is piece of work
// About tsconfig.json file:
//   target: es2016
//   module: commonjs
//   strict: true
//   esModuleInterop: true
//   skipLibCheck: true
//   forceConsistentCasingInFileNames: true
Object.defineProperty(exports, "__esModule", { value: true });
// es means echmascript version 2016,
// module means a piece of work two type of module by default commonJs which is created by another company and second is NextJs which is created by
// Echma And you also create your own Module file with FileName.ts and value like : let a = 123 and then export it like: export default a;
// and import like: import a from "./FileName" also compile both files not one
// import nodes from "./module"
// const Node4 = nodes[0];
// const Node5 = nodes[1];
// const Node6 = nodes[2];
// console.log(Node4)
// console.log(Node5)
// console.log(Node6)
// console.log(nodes);
//for import multiple variables
var module_1 = require("./module");
console.log(module_1.Node1);
console.log(module_1.Node2);
console.log(module_1.Node3);
