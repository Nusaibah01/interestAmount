// Interest Amount 
function calculateInterest(amount = document.getElementById('display').value, percentage = "15%"){


// Removing the numeric value from the percentage string I made
let numericPercentage = Number(percentage.replace('%', ""));
// Calculating intrest Amount
let interestAmount = amount * (numericPercentage  / 100)
}
document.getElementById('output').innerText = +"R" +interestAmount