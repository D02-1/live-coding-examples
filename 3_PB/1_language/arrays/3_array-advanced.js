function divider(methodName)
{
    console.log("\n" + "=".repeat(25) + " ." + methodName + "(); " + "=".repeat(25));
}

divider("concat");

/**
 * @method .concat();
 * @description
 * Mit .concat(); können wir, genau wie bei strings mehrere werte zusammenfügen und in einer neuen array speichern.
 * @example
 * [ firstArray ].concat([ secondArray ]);
 * @example
 * [ firstArray ].concat([ secondArray ], [ thirdArray ]);
 * @returns { array }
 */

const firstArray = [ "A", "B", "C" ];
const secondArray = [ 1, 2, 3 ];
const thirdArray = [ true, true, false ];

const completeArray = firstArray.concat(secondArray, thirdArray);
// const completeArray = [ "A", "B", "C", 1, 2, 3, true, true, false ];

console.log("firstArray[], secondArray[] und thirdArray[] zusammengefügt:")
console.log("Neue Array:", completeArray);
console.log("unverändert:", firstArray);
console.log("unverändert:", secondArray);
console.log("unverändert:", thirdArray);

divider("indexOf");

/**
 * @method .indexOf();
 * @description
 * Die Methode .indexOf(); gibt den ersten index zurück, der auf eine prüfung positiv reagiert. Ein rückgabewert von -1 bedeutet das die prüfung negativ verlief.
 * @example
 * [ array ].indexOf(wert);
 * @example
 * [ array ].indexOf(wert, startIndex);
 * @returns { number }
 */

const colorArray = [ "red", "green", "orange", "blue", "yellow", "pink" ];

const indexColor1 = colorArray.indexOf("green");
console.log("Die position von green:", indexColor1);

const indexColor2 = colorArray.indexOf("purple");
console.log("Die position von purple:", indexColor2);

const indexColor3 = colorArray.indexOf("blue", 2);
console.log("Die position von blue:", indexColor3);

divider("includes");

/**
 * @method .includes();
 * @description
 * Die methode .includes(); sucht einen wert in der array und gibt einen boolean zurück, der aussagt ob dieser wert gefunden wurde, oder nicht.
 * @example
 * [ array ].includes(wert);
 * @example
 * [ array ].includes(wert, startIndex);
 * @returns { boolean }
 */

const includesColor1 = colorArray.includes("green");
console.log("green gefunden:", includesColor1);

const includesColor2 = colorArray.includes("purple");
console.log("purple gefunden:", includesColor2);

// console.log(colorArray.includes("red"));

const includesColor3 = colorArray.includes("blue", 4);
console.log("blue gefunden:", includesColor3);

console.log("=".repeat(50));

// Einen string per array methode umdrehen.
const testString = "Hallo Welt";
console.log(testString);

// mit der methode .split(); können wir einen string zu einer array machen, wenn wir nur "" als parameter eingeben, teilen wir den string bei jedem zeichen.
const stringArray = testString.split("");
console.log(stringArray);

// mit der methode .reverse(); drehen wir die array um.
const umgedrehteArray = stringArray.reverse();
console.log(umgedrehteArray);

// mit der methode .join(); fügen wir eine array zu einem string zusammen, wenn wir nur "" als parameter angeben, setzen wir alle buchstaben zusammen.
const stringAusArray = umgedrehteArray.join("");
console.log(stringAusArray);

console.log("ABC".split("").reverse().join(""));
//                   |          |           |
//           [ "A", "B", "C" ]  |           |
//                              |           |
//                      [ "C", "B", "A" ]   |
//                                          |
//                                        "CBA"

const testStringFariha = "Hallo Welt";

const ersterBuchstabe = testStringFariha[0];
const letzterBuchstabe = testStringFariha[testStringFariha.length - 1];

const neueArray = testStringFariha.split("");

neueArray.shift();
neueArray.pop();
neueArray[3] = "V";
neueArray.push("X");

const textVonArray = neueArray.join("");
console.log(letzterBuchstabe + textVonArray + ersterBuchstabe);
