import readlineSync from "readline-sync";

export const calculateFibonnaci = (showMenuOptions) => {
  const number = readlineSync.questionInt("Type an integer number:\n");
  let j = 1;
  let i = 0;

  for (let index = 2; index <= number; index++) {
    const aux = i + j;
    i = j;
    j = aux;
  }

  console.log(`The ${number}º number of fibonnaci is ${j}`);
  showMenuOptions();
};
