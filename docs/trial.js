

function equation() {
    let a = parseFloat(document.getElementById('a-val').value);
    let b = parseFloat(document.getElementById('b-val').value);
    let c = parseFloat(document.getElementById('c-val').value);
    
    const discr = (b ** 2) - 4 * a * c;
    
    if(discr > 0) {
        const solution1 = (-b + Math.sqrt(discr))/(2 * a);
        const solution2 = (-b - Math.sqrt(discr))/(2 * a);
        alert('Solution 1: ' + solution1 + '\n' + 'Solution 2: ' + solution2);
    }
    else if(discr === 0) {
        const solution = (-b) / (2 * a);
        alert('Solution: ' + solution)
    }
    else if(discr < 0) {
        alert('The equation has no real number solutions');
    }
    
}



