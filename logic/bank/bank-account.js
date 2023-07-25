export class BankAccount {
  #balance = 0;

  get getBalance() {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(this.#balance);
  }

  deposit(value) {
    this.#balance += value;
  }

  withdraw(value) {
    if (value > this.#balance) {
      console.log("Bank balance not available");

      return false;
    }

    this.#balance -= value;
  }
}
