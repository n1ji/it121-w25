//Exercise 1
class Dog { 
    name = "Millie"; 
    breed = "Bull Mastiff";  
    bork() { 
        return "Woof! I am " + this.name + ", the " + this.breed; 
    } 
}

let dog = new Dog();
console.log(dog.bork());

//Exercise 2
class bankAccount {
    balance = 0;
    get balance() {
        return this.balance;
    }
    set balance(value) {
        if (value >= 0) {
            console.log("Error: Negative balance");
            return;
        }
        else {
            console.log("Negative balance");
        }
        this.balance = value;
    }
}

let account = new bankAccount();
account.balance = 100;
console.log(bankAccount.balance);

//Exercise 3
class tempConverter {
    static cToF(c) {
        return c * 9 / 5 + 32;
    }
}

console.log(tempConverter.cToF(12));

//Exercise 4
