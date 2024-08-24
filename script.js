const fromAmountElement = document.querySelector(".amount");
const convertedAmountElement = document.querySelector(".convertedAmount");
const fromCurrencyElement = document.querySelector(".fromCurrency");
const toCurrencyElement = document.querySelector(".toCurrency");
const resultElement = document.querySelector(".result");


const countries = [ 
{code:"INR", name:"Indian Rupee"},
{code:"USD", name:"United States Dollar"},
{code:"MXN", name:"Mexican Peso"},
{code:"MYR", name:"Malaysian Ringgit"},
{code:"NOK", name:"Norwegian Krone"},
{code:"NZD", name:"New Zealand Dollar"},
{code:"PEN", name:"Peruvian Sol"},
{code:"PHP", name:"Philippine Peso"},
{code:"RON", name:"Romanian Leu"},
{code:'SGD', name:"Singapore Dollar"},
{code:"THB", name:"Thai Baht"},
{code:"TRY", name:"Turkish Lira"},
{code:"TWD", name:"Taiwan New Dollar"},
{code:"UAH", name:"Ukrainian Hryvnia"},
{code:"VND", name:"Vietnamese Dong"},
{code:"ZAR", name:"South African Rand"} 
];

countries.forEach(country=>{
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');

    option1.value = option2.value = country.code;
    option1.textContent = option2.textContent = `${country.code} (${country.name})`;

    fromCurrencyElement.appendChild(option1);
    toCurrencyElement.appendChild(option2);

    fromCurrencyElement.value = "USD";
    toCurrencyElement.value = "INR";
})

const getExchangeRate = async () => {
    const amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();

    const conversionRate = data.rates[toCurrency];
    const convertedAmount = (amount * conversionRate);

    convertedAmountElement.value = convertedAmount;

    resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}

fromAmountElement.addEventListener('input', getExchangeRate);