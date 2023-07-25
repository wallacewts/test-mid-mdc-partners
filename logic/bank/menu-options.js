import readlineSync from "readline-sync";
import { BankAccount } from "./bank-account.js";
import { SavingAccount } from "./saving-account.js";
import { CheckingAccount } from "./checking-account.js";

export const showBankMenuOptions = () => {
  const menuOptions = {
    a: "Bank Account",
    s: "Saving Account",
    c: "Checking Account",
    e: "Exit",
  };

  console.log("------------------------------------------------------");
  console.log("Type an index option to perform relationated action");
  console.table(menuOptions);
};

export const showAccountOptions = () => {
  const menuOptions = {
    d: "Deposit",
    w: "Withdraw",
    s: "Show Balance",
    e: "Exit",
  };

  console.log("------------------------------------------------------");
  console.log("Type an index option to perform relationated action");
  console.table(menuOptions);
};

export const accountOptions = (account) => {
  showAccountOptions();
  readlineSync.promptCLLoop({
    d: () => {
      const value = readlineSync.questionFloat("Type an number to deposit:\n");

      account.deposit(value);
      showAccountOptions();
    },
    w: () => {
      const value = readlineSync.questionInt("Type an number to withdraw:\n");

      account.withdraw(value);
      showAccountOptions();
    },
    s: () => {
      console.log(account.constructor.name + ": " + account.getBalance);
      showAccountOptions();
    },
    e: () => {
      showBankMenuOptions();

      return true;
    },
  });
};

export const bankOptions = (showMenuOptions) => {
  const bankAccount = new BankAccount();
  const savingAccount = new SavingAccount();
  const checkingAccount = new CheckingAccount();

  showBankMenuOptions();

  return readlineSync.promptCLLoop({
    a: () => accountOptions(bankAccount),
    s: () => accountOptions(savingAccount),
    c: () => accountOptions(checkingAccount),
    e: () => {
      showMenuOptions();

      return true;
    },
  });
};
