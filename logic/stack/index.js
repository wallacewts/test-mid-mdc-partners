import readlineSync from "readline-sync";
import { StackElement } from "./stack.js";
import { showStackMenuOptions } from "../menu-options/index.js";

export const addStackElement = (stack) => {
  const id = readlineSync.questionInt(
    "Type an integer number to use as ID for the stack element:\n"
  );
  const stackElement = new StackElement({ id });

  stack.push(stackElement);

  showStackMenuOptions();
};

export const removeStackElement = (stack) => {
  stack.pop();
  showStackMenuOptions();
};

export const showStackElement = (stack) => {
  stack.showElements();
  showStackMenuOptions();
};

export const checkIfIsEmpty = (stack) => {
  console.log(stack.isEmpty);
  showStackMenuOptions();
};
