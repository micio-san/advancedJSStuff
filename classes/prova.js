class Rectangle {
  constructor(_height, _width, _bgcolor) {
    this.height = _height;
    this.width = _width;
    this.bgcolor = _bgcolor;
  }
  calcArea() {
    return this._height * this._width;
  }
}

const Rectangle1 = new Rectangle(3, 4, "blue");

//getters und setters

class Square {
  constructor(_width) {
    this.height = _width;
    this.width = _width;
    this.num = 0;
  }
  get Area() {
    this.num++;
    return this.height * this.width;
  }
  set Area(area) {
    this.width = Math.sqrt(area);
    this.height = Math.sqrt(area);
  }
}

const Square1 = new Square(2);

//static meth

class Circle {
  constructor(_radius, _bg = "blue") {
    this.radius = _radius;
    this.background = _bg;
  }
  get Diam() {
    return this.radius * 2;
  }
  static compare(fir, sec) {
    fir.Diam > sec.Diam ? console.log("bigger") : console.log("shmaller");
  }
}

const Circle1 = new Circle(1, "red");
const Circle2 = new Circle(3, "red");

//Circle.compare(Circle1, Circle2);

//inheritance

class Person {
  constructor(_name, _age, _profession) {
    this.name = _name;
    this.age = _age;
    this.profession = _profession;
  }
  sayHi() {
    return (
      "Hi my name is " +
      this.name +
      " and I am " +
      this.age +
      " years old." +
      "I work as a " +
      this.profession
    );
  }
}

const Person1 = new Person("mike", 45, "plumber");

class Teacher extends Person {
  constructor(_name, _age, _profession, _subject) {
    super(_name, _age, _profession);
    this.subject = _subject;
  }
  sayHiTeacher() {
    return this.sayHi().concat(" and I teach " + this.subject + ".");
  }
}

class Student extends Person {
  constructor(_name, _age, _profession, _subjectFav) {
    super(_name, _age, _profession);
    this.subjectFav = _subjectFav;
  }
  sayHiStudent() {
    return this.sayHi().concat(
      " and my favorite subject is " + this.subjectFav
    );
  }
}

const Teacher1 = new Teacher("Anna", 55, "Teacher", "History");
const Student1 = new Student("Mary", 15, "Student", "Math");

//polymorphism

class Animal {
  constructor(_species, _name) {
    this.species = _species;
    this.name = _name;
  }
  makeSound() {
    console.log("sound");
  }
}

class Cat extends Animal {
  constructor(_species, _name, _sound) {
    super(_species, _name);
    this.sound = _sound;
  }
  makeSound() {
    super.makeSound();
    console.log(this.sound);
  }
}

const cat = new Cat("cat", "trippa", "meow");
const Dog = new Animal("Dog", "Mr.Dog");

//binding

const input = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ul");

btn.addEventListener("click", submitting);

class Item {
  constructor(_value) {
    this.value = _value;
  }
}

function submitting(e) {
  const thing = input.value;
  const Item1 = new Item(thing);
  const item = document.createElement("li");
  item.innerHTML = Item1.value;
  list.appendChild(item);
}
