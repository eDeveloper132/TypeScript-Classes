import inquirer from "inquirer";
import chalk from "chalk";
let Answers = [];
let Questions = await inquirer.prompt([
    { name: "age", type: "number", message: "Enter Your Age:" }
]);
console.log(chalk.blue("Insha Allah , in " + (60 - Questions.age) + " years you will be 60 years old"));
Answers.push(Questions);
console.log(Answers);
