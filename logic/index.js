import readlineSync from "readline-sync";
import { calculateFactorial } from "./factorial/index.js";
import { checkPalindrome } from "./palindrome/index.js";
import { showMenuOptions, showStackMenuOptions } from "./menu-options/index.js";
import { calculateFibonnaci } from "./fibonnaci/index.js";
import { Stack } from "./stack/stack.js";
import {
  addStackElement,
  checkIfIsEmpty,
  showStackElement,
} from "./stack/index.js";

showMenuOptions();

readlineSync.promptCLLoop({
  fa: calculateFactorial,
  fi: calculateFibonnaci,
  p: checkPalindrome,
  s: () => {
    const stack = new Stack();

    showStackMenuOptions();

    return readlineSync.promptCLLoop({
      a: () => addStackElement(stack),
      r: () => removeStackElement(stack),
      s: () => showStackElement(stack),
      c: () => checkIfIsEmpty(stack),
      e: () => {
        showMenuOptions();

        return true;
      },
    });
  },
  e: () => true,
});
