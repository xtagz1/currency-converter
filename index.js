let api = ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

// Create currency from the currencies array
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropDown.add(option);
});

//  Repeat 

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});

fromDropDown.value = "USD";
toDropDown.value = "INR";

let convertCurrency = () =>{
  const amount = document.querySelector("#amount").value;
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;



// If amount input fiels is not empty

if (amount.length !=0){
 fetch(api)
 .then((res) => res.json())
 .then((data) =>{
    console.log(data);
    let fromExchangeRate = data.conversion_rates
    [fromCurrency];
    let toExchangeRate = data.conversion_rates[toCurrency];
    const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
    document.querySelector("#result").innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
 });
}
else{
  alert("Please fill the in the amount");
}
}
;


document.querySelector("#convert-btn")
.addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);

