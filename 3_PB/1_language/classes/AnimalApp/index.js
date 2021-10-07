// require(); importiert ein javascript modul, also eine datei um sie hier zu verwenden.
const Bird = require('./src/Bird');
const Dog = require('./src/Dog');

// Dann können wir die klasse verwendet und eine neue instanz erstellen.
const tier = new Bird('Max', 'Parrot', true);
const doggyDogDog = new Dog('Herbert', 'Bulldog');

console.log(tier);
tier.eat();

console.log(doggyDogDog);
doggyDogDog.bark();
