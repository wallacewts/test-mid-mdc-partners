import { BankAccount } from "./bank-account.js";

export class SavingAccount extends BankAccount {
  static MIN_DEPOSIT_VALUE = 50000;

  constructor() {
    super();
  }

  deposit(value) {
    if (value < SavingAccount.MIN_DEPOSIT_VALUE) {
      console.log(
        "The minimum amount to be deposited into a Saving Account is " +
          SavingAccount.MIN_DEPOSIT_VALUE
      );
      return false;
    }

    super.deposit(value);
  }
}
