import inquirer from "inquirer";
let Answers = []

    let Questions = await inquirer.prompt([
        {name: "UserName",
        age: "age",
        gender: "gender"}
    
    ])

Answers.push(Questions);
console.log(Answers);




