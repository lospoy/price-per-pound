let price = document.getElementById('price')
let quantity = document.getElementById('quantity')
let output = document.getElementById('output')

const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

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
  ? formatter.format(price / ozToPounds(quantity))
  : formatter.format(price / quantity)
}

quantity.oninput = showCalc
document.getElementById('radio-lb').addEventListener('click', showCalc)
document.getElementById('radio-oz').addEventListener('click', showCalc)