// Undefined is a type and null is an object
// https://codeburst.io/javascript-null-vs-undefined-20f955215a2
// Undefined means a variable is declared but no value has been assigned.
// Null is an assignable value, you can assign it to a variable.

// Type:
    let demo;

    demo;
    // returns undefined

    typeof demo;
    // reuturns undefined

// Object:
    const demo = null;
    demo;
    // returns null

    typeof demo;
    // returns object

    null == undefined;
    // returns true

    null === undefined;
    // returns false
