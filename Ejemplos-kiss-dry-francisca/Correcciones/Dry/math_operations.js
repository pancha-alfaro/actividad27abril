// validating type of data
function validate(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error ("Ambos parámetros deben ser números");
    }
}

// add a and b 
function add (a, b) {
    validate(a, b);
    return a + b;
}

//substract a and b
function substract (a, b) {
    validate(a, b);
    return a - b; 
}