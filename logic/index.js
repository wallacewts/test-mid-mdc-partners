import readlineSync from "readline-sync";
import { calculateFactorial } from "./factorial/index.js";
import { checkPalindrome } from "./palindrome/index.js";
import { calculateFibonnaci } from "./fibonnaci/index.js";
import { bankOptions } from "./bank/index.js";
import { stackOptions } from "./stack/index.js";

const showMenuOptions = () => {
  const menuOptions = {
    fa: "Calculate Factorial",
    fi: "Calculate Fibonnaci",
    p: "Checks Palindrome",
    s: "Stack",
    b: "Bank",
    e: "Exit",
  };

  console.log("------------------------------------------------------");
  console.log("Type an index option to perform relationated action");
  console.table(menuOptions);
};

showMenuOptions();

readlineSync.promptCLLoop({
  fa: () => calculateFactorial(showMenuOptions),
  fi: () => calculateFibonnaci(showMenuOptions),
  p: () => checkPalindrome(showMenuOptions),
  s: () => stackOptions(showMenuOptions),
  b: () => bankOptions(showMenuOptions),
  e: () => true,
});
