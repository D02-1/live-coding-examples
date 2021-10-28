class Calculator
{
    constructor()
    {
        this.solution = 0;
    }

    add(num1, num2)
    {
       this.solution = num1 + num2;
    }

    divide(num1, num2)
    {
        this.solution = num1 / num2;
    }

    clearSolution()
    {
        const solution = this.solution;
        this.solution = 0;

        return solution;
    }

    getSolution()
    {
        return this.clearSolution();
    }
}

const calc = new Calculator();
calc.add(2, 5);

console.log(calc.getSolution());

calc.divide(6, 3);

console.log(calc.solution);

calc.add(calc.solution, 8);

calc.divide(calc.solution, 2);

console.log(calc.getSolution());
