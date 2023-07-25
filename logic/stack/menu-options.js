import readlineSync from "readline-sync";
import { Stack, StackElement } from "./stack.js";

export const showStackMenuOptions = () => {
  const menuOptions = {
    a: "Add Element",
    r: "Remove Element",
    s: "Show Elements",
    c: "Is the stack empty?",
    e: "Exit",
  };

  console.log("------------------------------------------------------");
  console.log("Type an index option to perform relationated action");
  console.table(menuOptions);
};

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

export const stackOptions = (showMenuOptions) => {
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
};
