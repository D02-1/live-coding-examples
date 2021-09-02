
// Ein Array ist eine sammlung von Daten, zum beispiel mehreren Strings, nummern, oder anderen werten.

const stringArray = [ "ersterWert", "zweiterWert", "dritterWert", "vierterWert" ];
const numberArray = [ 15, 25, 18, 7, 5, 5.25, 3.0 ];
const boolArray   = [ true, false, false, false, true, false, true, true ];
const mixedArray  = [ true, "test", 5, 5.25 ];
const emptyArray  = [];

// Mit dem "new" befehl, können wir eine leere array, mit einer spezifischen länge anlegen.
const newArray    = new Array(6);

console.log("String Array:", stringArray);
console.log("Number Array:", numberArray);
console.log("Bool Array:", boolArray);
console.log("Mixed Array:", mixedArray);
console.log("Leere Array:", emptyArray);
console.log("Neue Array:", newArray);

console.log("=".repeat(50));

// Wenn wir einen wert an einer spezifischen position in unserer array abrufen wollen, schreiben wir dessen Position direkt hinter die array, in eckigen klammern.
// console.log("Hallo"[1]);
console.log(stringArray[1]);
console.log(numberArray[3]);

const wertAusArray = mixedArray[1];

console.log(wertAusArray);

console.log("=".repeat(50));

// Mit der befehl .length; können wir die anzahl von elementen in der Array herausfinden

//            position:  0     1       2  3
//            anzahl:    1     2       3  4
// const mixedArray  = [ true, "test", 5, 5.25 ];

console.log("Anzahl von elementen in array:", mixedArray.length);

console.log("=".repeat(50));

console.log("erster Eintrag:", mixedArray[0]);
console.log("zweiter eintrag:", mixedArray[1]);

// Mit der abfrage der länge minus 1 bekommen wir den letzten eintrag in der Array zurück.
console.log("letzer eintrag:", mixedArray[mixedArray.length -1]);