// // For Loop Example
// for (let  i = 1; i <= 10; i++) {
//     console.log(`2 X ${i} = ${2 * i}`);
// }
// // For Line Breaking
// console.log("************************************************************");
// // Array in loop
// let Fruits : string[] = ["Mango","Orange","Pineapple","Banana","Apple"];
// for (let i = 0; i < Fruits.length; i++) {
//     console.log(i+1 + ":" + Fruits[i]);
// }

// // For Line Breaking
// console.log("************************************************************");
// // Enum
// enum Fruit {
//     Orange,
//     Mango,
//     Pineapple,
//     Banana,
//     Apple
// }
// for (let i = 0; i < Fruits.length; i++) {
//     console.log(Fruit[i]+":"+Fruits[i]);
// }
// console.log("************************************************************");

// enum MENU {
//     ROLL = "roll",
//     PIZZA = "pizza",
//     BURGER = "burger",
//     SANDWICH = "sandwich"
// }
// enum REVIEW {
//     BAD,
//     GOOD,
//     EXCELLENT
// }
// type Order = {
//     order:MENU,
//     payment:number,
//     review:REVIEW
// }
// let orders:Order={
//     order:MENU.ROLL,
//     payment:100,
//     review:REVIEW.EXCELLENT
// }

// const Orders = [];
    

// Orders.push(orders.order,orders.payment,orders.review);
// console.log(Orders);

// Narrowing
// let a : unknown;
// if (typeof a === "number") {
//     console.log(a.toFixed());
//      toFixed ka function decimal mein number convert kerta hy jaisy price.00
// }
// if (a === "string") {
//     console.log(a.toUpperCase);
// }
// console.log((a as string).toUpperCase)