import chalk from "chalk";
import inquirer from "inquirer";
export let { pin, menu } = await inquirer.prompt([{
        type: 'number',
        name: 'pin',
        message: chalk.gray('Put you card in, Enter your Pin'),
    },
    { type: 'rawlist',
        name: 'menu',
        message: 'This is the main menu, Choose one!',
        choices: ['Withdraw', 'Deposit', 'Balance inquirey', 'Personal Information']
    },
]);
