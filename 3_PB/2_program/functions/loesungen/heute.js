const satz = "Heute ist ein schöner tag";

// 11
const firstWord = (anyString) => anyString.split(" ")[0];

console.log(firstWord(satz));

console.log('='.repeat(50));

// 12 HARD Write an arrow function that takes in one string. The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. Examples:

const satz2 = "Heute ist Donnerstag";

const getFirstWord = (input) => 
{
    let result = [];

    const words = input.split(" ");

    for(let i = 0; i < words.length; i++)
    {
        const word = words[i];

        for (let j = 0; j < words.length; j++)
        {
            result.push(word);
        }
    }

    return result.join(" ");
}

console.log(getFirstWord(satz2));