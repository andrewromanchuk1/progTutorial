let bitcoinPrice = +prompt('What is Bitcoin price today?', 0);
let amount = +prompt('How much $ do you have?', 0)
let bitcoinAmount = 0;

function burCrypto() {
   bitcoinAmount = amount / bitcoinPrice;
   alert(`You can buy ${bitcoinAmount.toFixed(7)} BTC`)
}

burCrypto();