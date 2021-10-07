const Animal = require('./Animal');

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

module.exports = Bird;
