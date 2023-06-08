function greet(name) {
    console.log(`Hello, ${name}! This is ${this.name}.`);
  }
  
  const person = {
    name: 'John Doe'
  };
  
  // Calling greet function with the context of the person object and an argument
  greet.apply(person, ['Alice']);