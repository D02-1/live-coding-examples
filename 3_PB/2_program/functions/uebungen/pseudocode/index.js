const testArr = [ 4, 2, 5, 3, 9, 7, 1, 8, 2, 6 ];

const sortNumbers = (inputArr) =>
{
    let firstValue = 0;
    let secondValue = 0;

    for (firstValue = 0; firstValue < inputArr.length; firstValue++)
    {
        const target = inputArr[firstValue];

        for (secondValue = firstValue - 1; secondValue >= 0 && (inputArr[secondValue] > target); secondValue--)
        {
            inputArr[secondValue + 1] = inputArr[secondValue];
        }

        inputArr[secondValue + 1] = target
    }

    return inputArr;
};

console.log(sortNumbers(testArr));
