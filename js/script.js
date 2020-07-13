let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateUSD = 3.33;
let rateEUR = 4.44;
let rateGBP = 5.55;


console.log(currencyElement);

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

let result;
let amount = +amountElement.value;
let currency = currencyElement.value;

switch(currency)
{
    case "USD":
        result = amount / rateUSD;
    break;
    case "EUR":
        result = amount / rateEUR;
    break;
    case "GBP":
        result = amount / rateGBP;
    break;

}

resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;

})


