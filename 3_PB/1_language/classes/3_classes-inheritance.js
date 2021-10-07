
class Animal
{
    constructor(name, species)
    {
        this.name = name;
        this.species = species;
    }

    get animalName()
    {
        return this.name;
    }

    eat(meal = 'Cheesecake')
    {
        console.log(`${ this.name } is a ${ this.species } and is eating a ${ meal }`);
    }

    sleep()
    {
        console.log(`${ this.name } is sleeping`);
    }
}


const testAnimal = new Animal('Happy', 'Fish');
testAnimal.sleep();
testAnimal.eat('Pizza');
console.log(testAnimal);

console.log('='.repeat(50));

// Die klasse Bird erweitert sich durch die klasse Animal
class Bird extends Animal
{
    constructor(name, species, canFly)
    {
        // Wir benötigen das keyword super um die schlüssel aus der elternklasse zu bearbeiten
        super(name, species);

        this.canFly = canFly;
    }

    fly()
    {
        console.log(`${ this.name } ${ this.canFly ? 'can fly' : 'can\'t fly' }`);
    }

    sleep()
    {
        // mit super greifen wir auf die methoden und werte der elternklasse zu. wir können methoden und werte aber auch einfach überschreiben.
        // super.sleep();
        console.log(`${ this.name } is dreaming...`);
    }
}

const rudy = new Bird('Rudy', 'Parrot', true);
console.log(rudy);
rudy.fly();
rudy.eat('Donut');
rudy.sleep();

console.log('='.repeat(50));

class Dog extends Animal
{
    constructor(name, species)
    {
        super(name, species)
    }

    bark()
    {
        console.log(`${ this.name } won't stop barking`);
    }
}

const chico = new Dog('Chico', 'Dalmatiner');
console.log(chico);
chico.bark();

console.log('='.repeat(50));

const ingrid = new Bird('Ingrid', 'Ostrich', false);
console.log(ingrid);
ingrid.fly();
ingrid.eat('Broccoli');

const party = (animal1, animal2) =>
{
    console.log(animal1.animalName + ' and ' + animal2.animalName + ' are having a party');
}

party(chico, ingrid);

console.log('='.repeat(50));

class Vehicle
{
    constructor(name, color)
    {
        this.wheels = 2;
        this.name = name;
        this.color = color;
    }

    setWheels(wheels)
    {
        this.wheels = wheels;
    }

    drive()
    {
        return `our ${ this.color } ${ this.name } is driving`;
    }

    brake()
    {
        return `our ${ this.color } ${ this.name } is braking on its ${ this.wheels } wheels`;
    }
}

const testVehicle = new Vehicle('Bicycle', 'Red');
console.log(testVehicle);
console.log(testVehicle.drive());
console.log(testVehicle.brake());

class Car extends Vehicle
{
    constructor(name, color, horsePower, doors, hasTurbo = false)
    {
        super(name, color);
        this.horsePower = horsePower;
        this.doors = doors;
        this.hasTurbo = hasTurbo;

        super.setWheels(4);
    }

    open()
    {
        return `our ${ this.color } ${ this.name } is opening its ${ this.doors } doors`;
    }

    drive()
    {
        return `our ${ this.color } ${ this.name } is driving ${ this.hasTurbo ? 'and its turbo is kicking in' : 'very slow' }`;
    }
}

const mustang = new Car('Mustang', 'TomatoRed', 280, 2, false);
console.log(mustang);

mustang.setWheels(6);

console.log(mustang.drive());
console.log(mustang.brake());
console.log(mustang.open());

console.log('='.repeat(50));

class Bicycle extends Vehicle
{
    constructor(name, color, isElectric)
    {
        super(name, color);
        this.isElectric = isElectric;
    }
    
    drive()
    {
        return `the ${ this. color } ${ this.name } is driving ${ this.isElectric ? 'using an electic motor' : '' }`
    }
}

const saeedsBike = new Bicycle('Bike', 'Lime', true);
console.log(saeedsBike);
console.log(saeedsBike.drive());
console.log(saeedsBike.brake());

const mustaphasBike = new Bicycle('Mountainbike', 'Red', false);
console.log(mustaphasBike);
console.log(mustaphasBike.drive());

const farihasBike = new Bicycle('Unicycle', 'Black', true);
farihasBike.setWheels(1);
console.log(farihasBike);
