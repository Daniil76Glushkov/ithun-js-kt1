

















const price = 10_000
const range = prompt('Промежуто времени (month,day,week) ')
const formattedPrice = price.toLocaleString( ' ru', { 
  style: "currency" ,
  currency: "RUB"
} ) 
// TODO добавить проверки валидности 
const result = `${price} Р в ${range}`
console.log(result)
