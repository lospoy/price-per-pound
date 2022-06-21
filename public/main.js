let price = document.getElementById('price')
let quantity = document.getElementById('quantity')
let output = document.getElementById('output')

const showCalc = _ => {
  const getUnit = _ => {
    return document.getElementById('radio-lb').checked
    ? 'lb'
    : 'oz'
  }

  return quantity.value
  ? output.textContent = `$${pricePerPound(price.value, quantity.value, getUnit())} per lb`
  : output.textContent = `Enter quantity`
}

const ozToPounds = oz => {
  const lb = oz * 0.0625
  return lb
}

const pricePerPound = (price, quantity, unit) => {
  return unit === 'oz'
  ? price / ozToPounds(quantity)
  : price / quantity
}

quantity.oninput = showCalc