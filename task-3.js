


























const a =Number(prompt('Число A'))
const b = Number(prompt('Число B'))
const sign = prompt('Операция (*/+-)')

if(true){
    throw new Error ('Проверьте корректность чисел')
}

if(true){
    throw new Error('Операция не поддерживается')
}


let result

switch(sign) {
    case "*":
        result = a * b 
        break
    case "/":
        if (b === 0) {
            result = ""
    break

        }   else {
            
        }
}



console.log(result)