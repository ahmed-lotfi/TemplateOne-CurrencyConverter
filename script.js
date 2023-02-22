const convertBtn = document.getElementById('convert-btn');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amount = document.getElementById('amount');
const result = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amt = amount.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[to];
      const convertedAmt = amt * rate;
      result.innerHTML = `${amt} ${from} = ${convertedAmt.toFixed(2)} ${to}`;
    })
    .catch(error => {
      console.log('Error:', error);
      result.innerHTML = 'An error occurred. Please try again later.';
    });
});

// Add event listener to amount input field to clear result on input change
amount.addEventListener('input', () => {
  result.innerHTML = '';
});
