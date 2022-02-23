let openFormButton = document.querySelector('.buy-button')
let closeFormButton = document.querySelector('.close-button')
let buyTicketsForm = document.querySelector('.buy-tickets-form')
let dateInput = document.querySelector('#date')
let timeInput = document.querySelector('#time')
let overviewDate = document.querySelector('.overview-date')
let overviewTime = document.querySelector('.overview-time');
let amountButtons = document.querySelectorAll('.amount-button')
let amountButtonBasic = document.querySelector('#amount-button-basic')
let amountButtonSenior = document.querySelector('#amount-button-senior')
let overviewBasicTotal = document.querySelector('.overview-basic-total')
let overviewSeniorTotal = document.querySelector('.overview-senior-total')
let overviewTotal = document.querySelector('.total-price')
let basicCount = document.querySelector('#basic-count')
let seniorCount = document.querySelector('#senior-count')
let now = new Date()
let currentMonth = now.getMonth()
let currentYear = now.getFullYear()
let currentDate = now.getDate()
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ['January', 'February', 'March', 'April', 'May', "June", 'July', 'August', 'September', 'October', 'November', 'December']


function openForm() {
    buyTicketsForm.className += ' active'
}

function closeForm() {
    buyTicketsForm.className = 'buy-tickets-form'
}

openFormButton.addEventListener('click', openForm)
closeFormButton.addEventListener('click', closeForm)


dateInput.setAttribute('min', `${currentYear}-${currentMonth + 1}-${currentDate}`)
dateInput.addEventListener('change', function(event) {
    let date = event.target.value.split('-')
    let newDate = new Date(date[0], date[1] - 1, date[2])
    console.log(newDate)
    overviewDate.innerHTML = `${days[newDate.getDay()]}, ${months[date[1]]} ${date[2]}`
})


timeInput.addEventListener('change', function(event) {
    overviewTime.innerHTML = event.target.value
})

for (let button of amountButtons) {
    button.addEventListener('click', function(e) {
        overviewBasicTotal.innerHTML = amountButtonBasic.value * 20 + '€'
        overviewSeniorTotal.innerHTML = amountButtonSenior.value * 10 + '€'
        overviewTotal.innerHTML = Number(overviewBasicTotal.innerHTML.slice(0, -1)) + Number(overviewSeniorTotal.innerHTML.slice(0, -1)) + '€'
        basicCount.innerHTML = amountButtonBasic.value
        seniorCount.innerHTML = amountButtonSenior.value
    })
}