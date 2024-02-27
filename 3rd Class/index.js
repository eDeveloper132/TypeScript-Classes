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
var module_1 = require("./module");
var Node4 = module_1.default[0];
var Node5 = module_1.default[1];
var Node6 = module_1.default[2];
console.log(Node4);
console.log(Node5);
console.log(Node6);
console.log(module_1.default);
