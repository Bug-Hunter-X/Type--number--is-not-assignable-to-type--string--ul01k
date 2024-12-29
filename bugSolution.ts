function greeter(person: string): string {
  return "Hello, "+ person;
}

function safeGreeter(person: any): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, there!";
  }
}

let user = ["John Doe", 1];
let user2 = "Jane Doe";
console.log(greeter(user2));
console.log(safeGreeter(user));