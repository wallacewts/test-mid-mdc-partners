import readlineSync from "readline-sync";

export const checkPalindrome = (showMenuOptions) => {
  const text = readlineSync.question("Type a word or phrase:\n").toLowerCase();
  const replacedText = text.trim().replace(/[\s\-\´\'\’\"\,\.\;\:\!\?]/g, "");
  const reverse = replacedText.split("").reverse().join("");
  const isPalindrome = replacedText === reverse;

  if (isPalindrome) {
    console.log("The inputed text is a palindrome");
  } else {
    console.log("The inputed text isn't a palindrome");
  }

  showMenuOptions();
};
