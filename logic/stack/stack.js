export class StackElement {
  next = null;

  constructor(data) {
    this.data = data;
  }
}

export class Stack {
  top = null;

  get isEmpty() {
    return !this.top;
  }

  push(stackElement) {
    stackElement.next = this.top;
    this.top = stackElement;
  }

  pop() {
    if (!this.top) {
      return false;
    }

    this.top = this.top.next;
  }

  showElements() {
    let final = this.top;

    console.log("Stack: \n");

    while (final !== null) {
      console.log(final, "\n");
      final = final.next;
    }

    console.log("----------");
  }
}
