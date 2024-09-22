// Add money to the account 
// step 1: add event handler & prevent page reload after form submit
// step 2: get money to be added to the account balance

// Step 1: added an event handler on add money btn
document.getElementById('add-money-btn').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();
    
    const addMoneyInput = document.getElementById('add-money-input').value;
    console.log(addMoneyInput);

    // get the pin Number
    const pinNumberInput = document.getElementById('pin-number-input').value;
    console.log(pinNumberInput);

    



})