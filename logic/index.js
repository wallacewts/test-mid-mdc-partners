import readlineSync from "readline-sync";
import { calculateFactorial } from "./factorial/index.js";
import { checkPalindrome } from "./palindrome/index.js";
import { calculateFibonnaci } from "./fibonnaci/index.js";
import { bankOptions } from "./bank/index.js";
import { stackOptions } from "./stack/index.js";
import { wordCountMenuOption } from "./word-count/index.js";

const showMenuOptions = () => {
  const menuOptions = {
    fa: "Calculate Factorial",
    fi: "Calculate Fibonnaci",
    p: "Checks Palindrome",
    s: "Stack",
    b: "Bank",
    w: "Word Count",
    e: "Exit",
  };

  console.log("------------------------------------------------------");
  console.log("Type an index option to perform relationated action");
  console.table(menuOptions);
};

const initialOptions = () =>
  readlineSync.promptCLLoop({
    fa: () => calculateFactorial(showMenuOptions),
    fi: () => calculateFibonnaci(showMenuOptions),
    p: () => checkPalindrome(showMenuOptions),
    s: () => stackOptions(showMenuOptions),
    b: () => bankOptions(showMenuOptions),
    w: () => wordCountMenuOption(showMenuOptions, initialOptions),
    e: () => true,
  });

showMenuOptions();
initialOptions();
