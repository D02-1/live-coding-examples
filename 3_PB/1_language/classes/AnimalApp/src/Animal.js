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

    eat(meal = "Cheesecake")
    {
        console.log(`${ this.name } is a ${ this.species } and is eating a ${ meal }`);
    }

    sleep()
    {
        console.log(`${ this.name } is sleeping`);
    }
}

// Wir exportieren die klasse Animal mit dem befehl module.exports:
module.exports = Animal;
