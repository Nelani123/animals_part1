class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    sounds() {
        return `${this.sound}`;
    }
    eat() {
        return `${this.name} eats`;
    }
  }
  class Dog extends Animal {
    sounds() {
        return `Dog ${this.sound}`;
    }
  }
  class Cat extends Animal {
    sounds() {
        return `Cat ${this.sound}`;
    }
  }
  class Home {
    constructor() {
        this.list = []
        this.sound = []
    }
    adoptPet(animal) {
        if(this.list.indexOf(animal)!==-1){
          console.info("not approved")
        }else{
          this.list.push(animal)
          console.info("approved")
        }
    }
    makeAllSounds() {
        for (let i = 0; i < this.list.length; i++) {
            this.sound.push(this.list[i].sounds())
        }
        return this.sound.join("\n")
    }
  }
  var dog = new Dog("Rax", "Barks");
  var cat = new Cat("Stormy", "meows");
  console.log(dog.eat());
  console.log(dog.sounds());
  console.log(" ");
  console.log(cat.eat());
  console.log(cat.sounds());
  let home = new Home()
  var dog1 = new Dog("Dog", "barks");
  var dog2 = new Dog("Dog", "barks");
  var cat = new Cat("Cat","meows");
  home.adoptPet(dog1)
  home.adoptPet(dog1)
  home.adoptPet(dog2)
  home.adoptPet(cat)
  console.log(home.makeAllSounds())
  
  
  
  
  
  