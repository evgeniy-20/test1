const y = 5;
if(y === 4 || y === 5) {
    console.log('ура')
} else {
    console.log('не ура')
}
// ecли x равно 4 или 5 вывести в консоль "ура", иначе вывести "не ура"
const x = 4;
if(x % 2 == 0) {
    console.log('четное')
} else {
    console.log('нечетное')
}

// вывести "четное" если x четное и "нечетное" если x нечетное\
const str1 = 'бабочки';
function string(str) {
    let b = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] === [2,5]) {
            b = b + str[i]
        }
    }
    return b;
}
console.log(string(str1));