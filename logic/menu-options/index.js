export const showMenuOptions = () => {
  const menuOptions = {
    fa: "Calculate Factorial",
    fi: "Calculate Fibonnaci",
    p: "Checks Palindrome",
    e: "Exit",
  };

  console.log("------------------------------------------------------");
  console.log("Type an index option to perform relationated action");
  console.table(menuOptions);
};
