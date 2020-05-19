function sum(a,b) {
    const c = a + b;
    return c;
};
const result = sum(6,6);
console.log(result);
function multiplication(a,b) {
    const f = a * b;
    return f;
};
const result1 = multiplication(6,6);
console.log(result1);
function division(a,b) {
    const g = a / b;
    return g;
};
const result2 = division(6,6);
console.log(result2);
function square(a) {
    const h = a * a;
    return h;
};
const result3 = square(5);
console.log(result3);
const str1 = 'бабочки';
function string(str) {
    let b = '';
    for(let i = 0; i < str.length; i++) {
        if(i % 2 === 0) {
            b = b + str[i]
        }
    }
    return b;
}
console.log(string(str1));
console.log(string('абрикоса'));
const a = 'aabbbcccc'
const countLetters = (input) =>  {
    const c = {}
    for(let i = 0; i < input.length; i++) {
        const h = input[i];
        с[h] = c[h] ? c[h] + 1 : 1
    }
    return c;
}
const result1 = countLetters(a);   
console.log = (result1);