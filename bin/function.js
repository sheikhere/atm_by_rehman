import chalk, { chalkStderr } from "chalk";
import chalkAnimation from 'chalk-animation';
//-------------------------------
export function Balance() {
    console.log(chalkAnimation.neon("\nYou Selected 'balance inquery' from the main menu"));
    console.log(chalk.red("/tYour Account Balance is "));
}
//---------------------------------
export function Deposit(a, b) {
    console.log(chalk.gray("\nYou Selected 'Deposit Money' from the main menu"));
    let c = a + b;
    console.log(chalk.blueBright("\nPut the money inside the machine"));
    console.log("\t", chalk.dim("Transaction Successful"));
    console.log(chalkStderr.greenBright("\nYour new updated account balance is ", "\t", [c]));
    return a + b;
}
//---------------------------------
export function Withdraw(a, b) {
    console.log(chalk.gray("\nYou Selected 'Withdraw Money' from the main menu"));
    let c = a - b;
    console.log("\t", chalk.dim("Transaction Successful"));
    console.log(chalk.blueBright("\nPut the money inside the machine"));
    console.log(chalkStderr.yellowBright("\nYour new updated account balance is ", "\t", [c]));
    return a - b;
}
//---------------------------------
export function Incorrect() {
    console.log(chalk.bgRed("\nIncorrect pin\n"));
    console.log(chalk.red.bold("\tYou are not authorised to use ATM"));
}
//---------------------------------
export function Greeting() {
    console.log(chalk.bgBlueBright.bold("\tHy welcome to American Standard Bank ATM"));
}
//---------------------------------
