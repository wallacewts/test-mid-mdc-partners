import readlineSync from "readline-sync";
import { calculateFactorial } from "./factorial/index.js";
import { checkPalindrome } from "./palindrome/index.js";
import { showMenuOptions } from "./menu-options/index.js";
import { calculateFibonnaci } from "./fibonnaci/index.js";

showMenuOptions();

readlineSync.promptCLLoop({
  fa: calculateFactorial,
  fi: calculateFibonnaci,
  p: checkPalindrome,
  e: () => true,
});
