
console.log("=".repeat(80));

// Wir können die inhalte von arrays auch verändern.
const carBrands = [ "BMW", "Ford", "Volvo", "Toyota", "Trabant" ];

console.log(carBrands);

// // Indem wir die position ansprechen, dessen wert wir verändern wollen, greifen wir direkt auf den wert an dieser position in der array zu
carBrands[0] = "Volkswagen";

console.log(carBrands);

console.log("=".repeat(50));

// mit der .push(); methode, können wir einen wert an das ende der array anfügen.
carBrands.push("Jaguar");
carBrands.push("Tesla");

console.log(carBrands);

console.log("=".repeat(50));

// mit der .pop(); methode, löschen wir das letzte element in einem array.
carBrands.pop();

console.log(carBrands);

// mit der .shift(); methode, löschen wir das erste element eines array.
carBrands.shift();

console.log(carBrands);

// mit der .unshift(); methode fügen wir ein neues element an den anfang an.
carBrands.unshift("Opel");

console.log(carBrands);

// mit .reverse(); können wir die array umdrehen.
carBrands.reverse();

console.log(carBrands);

// mit .splice(); können wir an einer bestimmten stelle des arrays eine spezifische anzahl von elementen löschen.
//               start, anzahl
carBrands.splice(2,     1);

console.log(carBrands);

carBrands.splice(1, 3);
console.log(carBrands);

// Ein spezifisches element in der array "leeren"
delete carBrands[0];

console.log(carBrands);

carBrands[0] = "Mercedes";

console.log(carBrands);