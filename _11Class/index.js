"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Array Literals
let arr = [1, 'ali', true, { name: 'Rafay' }];
console.log(arr[3]); // {}
//Array should be call by indexing // means // 0 index is equals to array storage 1
// 1 index is equals to array storage 2
// 2 index is equals to array storage 3
arr[1] = "Rafay";
console.log(arr);
// Its change the value of 1 index means ali replaced with rafay
// Array Of Objects Method
let students = [
    {
        name: 'Rafay',
        age: 24,
        Developer: true
    },
    {
        name: 'Ilyas',
        age: 22,
        Developer: false
    },
    {
        name: 'Bilal',
        age: 30,
        Developer: true
    }
];
console.log(students);
// Because it wrap it in a Array it calls by Array Indexing and than an object it calls by key value
// How to add an object in Array
let object = {
    name: "Danyal",
    age: 24,
    Developer: false
};
students.push(object);
console.log(students);
// Its added this object to my previus students Array Of Objects in the last index
// How to remove end Item in Array
students.pop();
console.log(students);
// Its removed the last object than we added last code in my Array Of Objects in the last index
// How to check value that wants to delete in future
const DropItem = students.pop();
console.log(DropItem);
// It deleted that item and show us what item is deleted
// How to add object in first index of Array Of Objects
students.unshift(object);
console.log(students);
// Its added this object to my previus students Array Of Objects in the first index
// How to remove first index of the Array of Object
students.shift();
console.log(students);
// Its removed the first object than we added last code in my Array Of Objects in the first index
// How to check value that wants to delete in future in first index
const DropItem2 = students.shift();
console.log(DropItem2);
// It deleted that item and show us what item is deleted in first index
// How to get some values that we need
let SliceItems = students.slice(0, 2);
// 0 is index , 2 is actual length // means 1,2,3 and in indexing means 0,1,2
console.log(SliceItems);
// It craetes a new Array
// It filtered out and give me values that I need IF you not mentioned length than it shows index and all value before index
// How to delete custom values in Array of object 
// splice method is used to delete custom values in Array of object
let deleteIndex = 1;
students.splice(deleteIndex, 1);
console.log(students);
// Means that it deleted by 1 index and length is 1 means 1 item should be deleted if 2 is length than 1 index and deleted by 2
//If you dont mentioned lenght than it does'nt delete any item
// How to update custom values in Array
students.splice(0, 1, object);
let Information = ["Ali", 22, true];
Information.push("Ali");
console.log(Information);
let Informatioo = ["Ali", 22, true];
console.log(Informatioo);
// It does not allow you to push it
