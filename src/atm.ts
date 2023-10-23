#!/usr/bin/env node

import inquirer from "inquirer";
import { pin , menu} from "./input.js";

import { Balance, Deposit, Withdraw, Incorrect, Greeting } from "./function.js";
import { user1, user2, user3 } from "./data.js";
import chalk from "chalk";
// --------------------------------------------------------------

Greeting();
console.log(chalk.magentaBright("\nSelected language is english"));
//console.log("Your PIN is",pin)


// ---------------------- Balance Inquiry ----------------------------------------

if (menu === "Balance inquirey") {
    if (pin === 1234) {
        console.log(chalk.bgBlackBright("\nWelcome Abdul"));
        Balance(),console.log("\t",user1.balance);
    }
    else if (pin === 1224) {
        console.log(chalk.bgBlackBright("Welcome Ahmad"));
        Balance(),console.log("\t",user2.balance);        
    }
    else if (pin === 1222) {
        console.log(chalk.bgBlackBright("Welcome Ahsan"));
        Balance(),console.log("\t",user3.balance);        
    }

}


// ---------------------- Deposit Money ----------------------------------------


else if (menu === "Deposit") {
    const amount = await inquirer.prompt([{
        type :'number',
        name :'data',
        message: 'Enter the amount you want to deposit',
    }]);
    if (pin === 1234) {
        console.log(chalk.bgBlackBright("Welcome Abdul"));
        console.log("Current Balance : ",user1.balance)
        Deposit(amount.data,user1.balance)
    }
    else if (pin === 1224) {
        console.log(chalk.bgBlackBright("Welcome Ahmad"));
        console.log("Current Balance : ",user2.balance)
        Deposit(amount.data,user2.balance)
        
    }
    else if (pin === 1222) {
        console.log(chalk.bgBlackBright("Welcome Ahsan"));
        console.log("Current Balance : ",user3.balance);
        Deposit(amount.data,user3.balance)

    }

}

// ---------------------- Withdraw Money ----------------------------------------


else if (menu === "withdraw") {
    const amount = await inquirer.prompt([{
        type :'number',
        name :'data',
        message: 'Enter the amount you want to withdraw',
    }]);
    if (pin === 1234) {
        console.log(chalk.bgBlackBright("Welcome Abdul"));
        console.log("Current Balance : ",user1.balance)
        Withdraw(amount.data,user1.balance)
    }
    else if (pin === 1224) {
        console.log(chalk.bgBlackBright("Welcome Ahmad"));
        console.log("Current Balance : ",user2.balance)
        Withdraw(amount.data,user2.balance)
        
    }
    else if (pin === 1222) {
        console.log(chalk.bgBlackBright("Welcome Ahsan"));
        console.log("Current Balance : ",user3.balance);
        Withdraw(amount.data,user3.balance)

    }

}

// ----------------------  Personal Information  ----------------------------------------


else if (menu === "Personal Information") {

    if (pin === 1234) {
        console.log(chalk.bgBlackBright("Welcome Abdul"));
        console.log(user1);
    }
    else if (pin === 1224) {
        console.log(chalk.bgBlackBright("Welcome Ahmad"));
        console.log(user2)  
    }
    else if (pin === 1222) {
        console.log(chalk.bgBlackBright("Welcome Ahsan"));
        console.log(user3);
    }

}


// ----------------------  Unuthorised User ----------------------------------------


else{
    Incorrect();
}
console.log(chalk.italic("\nThank you!, You can receive your card"));

