//complete this code
class Animal {
	constructor(species){
        this.species = species;
    }

    makeSound(){
        console.log('bark');
    }

}

class Dog extends Animal {
    bark(){
        console.log("The Golden Retriever makes a sound");
    }
}

class Cat extends Animal {
    purr(){
        console.log("The Siamese makes a sound");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
