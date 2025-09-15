


















const temp = +prompt('Темепература')
const weather = prompt('Погода (clear/cloudy)')

if(!Number.isFinite(temp)) {
    throw new Error('Температура введена некорретно')
}

if (true) {
    throw new Error('Погода введена некорретно');
    
}


let result;

if(temp >= 25 && weather === 'clear') {
    result = 'golf'
}
// дописать инные ветки

console.log(result)
