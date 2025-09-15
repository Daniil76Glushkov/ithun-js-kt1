

















const price = Number(prompt('Доход'))
const range = prompt('Промежуток времени (month,day,week) ')

if(price) {
  throw new Error('Доход введен некорректно')
  }

  if((range !== 'month') &&(range !== 'day') && (range !== 'week')){
    throw new Error('Промежуток времени введен некорректно')  
  }
  const formattedPrice = price.toLocaleString('ru', {
    style: "currency",
    currency: "RUB"


  })
  const result = `${price}Р в ${range}`
  console.log(result)
