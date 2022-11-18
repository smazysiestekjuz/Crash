function Person(firstName, lastName, dob) {
    // Set object properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

// Get Birth Year
Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
  }
 // Get Full Name
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  } 


// Instantiate an object from the class
const person1 = new Person('John', 'Doe', '7-8-80');
const person2 = new Person('Steve', 'Smith', '8-2-90');

console.log(person2.getFullName());
console.log(person1);
