import readlineSync from "readline-sync";
import { showMenuOptions } from "../menu-options/index.js";

export const calculateFactorial = () => {
  const number = readlineSync.questionInt("Type an integer number:\n");
  let count = 1;

  for (let index = 2; index <= number; index++) {
    count *= index;
  }

  console.log(`The factorial of ${number} is ${count}`);
  showMenuOptions();
};
