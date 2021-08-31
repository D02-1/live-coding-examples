
// Equal to operator: == (Equality)
    // TRUE: The first value is equal to the second value and type
    9 == 9;

    // FALSE: The first value is not equal to the second value
    4 == 8;

    // TRUE: The first value is equal to the second only by value
    4 == "4";

    // FALSE: The first value is not equal to the second one by value and type
    3 == "5";

// Equal by type and value type: === (Identity)
    // TRUE: The first value is the same type and value as the second one
    6 === 6;

    // FALSE: The first value is a different type but the same value as the second one
    6 === "6";

    // FALSE: The first value is not equal to the second one by value
    6 === 5;

// Not equal operator: !==
    // TRUE: the first value is not equal to the second one
    1 !== 2;

    // FALSE: the first value is equal to the second one
    5 !== 5;

// Not equal by type and value operator: !===
    // TRUE: the first type is not equal to the second type
    5 !== "5";

// Greater then operator: >
    // TRUE: value a is greater than value b
    5 > 4;

    // TRUE: value A is greater than value B
    11 > 9;

    // FALSE: Value A is not greater than value B
    2 > 5;

    // FALSE: Value A is not greater than value B
    4 > 48;

// Lesser than operator: <
    // TRUE: Value A is less than value b
    3 < 6;

    // FALSE: Value a is not less than value b
    3 < 2.5;

// Greater than or equal to operator: >=
    // TRUE: Value a is greater than value B
    4 >= 3;

    // TRUE: Value a is equal to value b
    32.5 >= 32.5;

    // FALSE: value a is not equal nor greater than value B 
    20 >= 45;

// Lesser than or equal to operator: <=
    // TRUE: Value A is less to value B
    7 <= 8

    // TRUE: Value A is equal to value B
    5 <= 5;

    // FALSE: Value A is not equal or lesser to value B
    5 <= 4;

// inversion
    const testValue = true;
    !testValue
    // returns false;