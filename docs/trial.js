function aVal() {
    let valA = prompt('What is the a value of your equation');
    return valA;
}
function bVal() {
    let valB = prompt('What is the b value of your equation');
    return valB;
}
function cVal() {
    let valC = prompt('What is the c value of your equation');
    return valC;
}
const a = aVal();
const b = bVal();
const c = cVal();

function equation(a, b, c) {
    const discr = (b ** 2) - 4 * a * c;
    const solution1 = (-b + Math.sqrt(discr))/(2 * a);
    const solution2 = (-b - Math.sqrt(discr))/(2 * a);
    
    console.log('Solution 1: ' + solution1);
    console.log('Solution 2: ' + solution2);
}
equation(a, b, c);


