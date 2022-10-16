const distance = document.querySelector('#distance')
const fuelUsage = document.querySelector('#fuelusage')
const fuelCost = document.querySelector('#fuelcost')
const yourCost = document.querySelector('#result')

const error = document.querySelector('.error')

const btnResult = document.querySelector('.box__btn-result')
const btnClean = document.querySelector('.box__btn-clean')

let cost = 'zł'

const results = () => {
	yourCost.value = ((distance.value / 100) * fuelUsage.value * fuelCost.value).toFixed(2)
}

const clean = () => {
	distance.value = ''
	fuelUsage.value = ''
	fuelCost.value = ''
	yourCost.value = 'zł'
	error.classList.remove('action')
}

const errors = () => {
	results()
	if (distance.value !== '' && fuelUsage.value !== '' && fuelCost.value !== '') {
		error.classList.remove('action')
	} else {
		error.classList.add('action')
	}
}

btnResult.addEventListener('click', errors)
btnClean.addEventListener('click', clean)
