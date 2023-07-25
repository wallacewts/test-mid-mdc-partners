import { BankAccount } from "./bank-account.js";

export class CheckingAccount extends BankAccount {
  static MAX_WITHDRAW_VALUE = 1000;

  constructor() {
    super();
  }

  withdraw(value) {
    if (value > CheckingAccount.MAX_WITHDRAW_VALUE) {
      console.log(
        "The maximum amount that can be withdrawn from the Checking Account is " +
          CheckingAccount.MAX_WITHDRAW_VALUE
      );
      return false;
    }
    super.withdraw(value);
  }
}
