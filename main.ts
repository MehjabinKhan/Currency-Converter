#! /usr/bin/env node 
import inqurier from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\t Welcome To Currency Converter \t"));

const currency: any = {
    USD: 1, // Base currency
    EUR: 0.93,
    GBP: 0.79,
    AUD: 1.53,
    INR: 83.40,
    PKR: 279.09,
};

let user_answer = await inqurier.prompt(
    [
        {
          name: "from",
          message: chalk.green("Select Your Currency From :"),
          type: "list",
          choices: ['USD','EUR','GBP','AUD','INR','PKR'],
        },
        {
            name: "to",
            message: chalk.green("Select Your Currency To :"),
            type: "list",
            choices: ['USD','EUR','GBP','AUD','INR','PKR'],
        },
        {
           name: "amount",
           message: chalk.green("Enter your amount :"),
           type: "number",
        }
    ]
);

// Perform currency conversion by formula
let fromAmount = currency[user_answer.from] // exchange rate
  
let toAmount = currency[user_answer.to]  // exchange rate

let yourAmount = user_answer.amount

// Conversion Formula
let baseAmount = yourAmount / fromAmount  // USD base currency
let convertedAmount = baseAmount * toAmount

// Result
console.log(chalk.magentaBright(`Converted Amount : ${convertedAmount.toFixed(2)}`));


