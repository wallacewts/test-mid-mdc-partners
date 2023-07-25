export const showMenuOptions = () => {
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
