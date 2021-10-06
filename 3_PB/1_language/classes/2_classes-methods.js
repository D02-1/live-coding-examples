/**
 * @class User
 */
class User
{
    // properties mit einem # davor sind ausserhalb der klasse nicht zugänglich. (In C = private/public)
    #firstName;
    #lastName;
    fullName;

    constructor(firstName, lastName)
    {
        this.#firstName = firstName;
        this.#lastName = lastName;

        this.fullName = this.#createFullName();
    }

    // Um auf unsere werte zuzugreifen, können wir in javascript zwar einfach die werte wie bei objekten herausholen. Aber sauberer sind methoden fürs editieren, und anzeigen von werten. JavaScript besitzt auch sogenannte "Getter/Setter".

    // Vorname ausgeben (getter)
    get firstName()
    {
        return this.#firstName;
    }

    // Vorname ausgeben (methode)
    getFirstName()
    {
        return this.#firstName;
    }

    // Vorname ändern (setter)
    set firstName(input)
    {
        this.#firstName = input;
    }

    // Vorname ändern (methode)
    setFirstName(input)
    {
        this.#firstName = input;
    }

    // Private methode
    #createFullName()
    {
        return this.#firstName + " " + this.#lastName;
    }

    getFullname()
    {
        return this.fullName;
    }
}

const testUser = new User("Max", "Mustermann");
console.log(testUser);

// aufrufen des getters:
console.log(testUser.firstName);

// aufrufen der methode:
console.log(testUser.getFirstName());

// aufrufen des setters
testUser.firstName = "Katrin";

// aufrufen des getters
console.log(testUser.firstName);

// aufrufen der methode zur änderung
testUser.setFirstName("Herbert");

// aufrufen der methode zur ausgabe
console.log(testUser.getFirstName());

console.log(testUser.getFullname());

console.log("=".repeat(50));

/**
 * @class Fruit
 * @description Basisklasse für Früchte
 * @example
 * const Apple = new Fruit("Apple", "Red", "Sweet");
 */
class Fruit
{
    /**
     * @constructor
     * @param { string } name 
     * @param { string } color 
     * @param { string } taste 
     */
    constructor(name, color, taste)
    {
        this.name = name;
        this.color = color;
        this.taste = taste;
    }

    /**
     * @method getName();
     * @description Gibt den namen der frucht zurück
     * @returns { string }
     */
    getName()
    {
        return this.name;
    }

    /**
     * @method setName();
     * @description Legt den namen der frucht fest
     * @param { string } input 
     */
    setName(input)
    {
        this.name = input;
    }

    getColor()
    {
        return this.name;
    }

    setColor(input)
    {
        this.color = input;
    }

    getTaste()
    {
        return this.taste;
    }

    setTaste(input)
    {
        this.taste = input;
    }

    /**
     * @method eat();
     * @description Frisst die frucht
     * @returns { string }
     */
    eat()
    {
        return `This ${ this.color } ${ this.name } is very ${ this.taste }`;
    }
}

const apple = new Fruit("Apple", "Red", "Sweet");
console.log(apple.eat());

apple.setColor("Green");

console.log(apple.eat());

const lemon = new Fruit("Lemon", "Yellow", "Sour");
console.log(lemon.eat());

lemon.setName("Citrus");
console.log(lemon.eat());
