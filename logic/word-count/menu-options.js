import readlineSync from "readline-sync";
import { wordCount } from "./word-count.js";

export const wordCountMenuOption = async (showMenuOptions, initialOptions) => {
  const filePath = readlineSync.question("Copy and paste the file path: ");

  console.log("\n");
  await wordCount(filePath);
  showMenuOptions();
  initialOptions();
};
