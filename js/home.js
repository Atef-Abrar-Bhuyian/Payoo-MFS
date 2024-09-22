// Add money to the account 
// step 1: add event handler & prevent page reload after form submit
// step 2: get money to be added to the account balance and get the pin number
// Step 3: verify the pin number 
// Step 4: get the current balance

// for cash in
// Step 1: added an event handler on add money btn
document.getElementById('add-money-btn').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();
    
    const addMoneyInput = document.getElementById('add-money-input').value;
    console.log(addMoneyInput);

    // get the pin Number
    const pinNumberInput = document.getElementById('pin-number-input').value;
    console.log(pinNumberInput);


    // step 3: verify pin number
    // wrong way to validate pin number 
    if(pinNumberInput === '1234'){
        // Step 4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        
        // step 5: add addMoneyInput with balance
        const addMoneyNumber = parseInt(addMoneyInput);
        const balanceNumber = parseInt(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);


        // step 6: Update the Balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert("Failed To Add Money, Please Try Again");
    }
})


// for Cash out 

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('cash-out-input').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinCashOut = document.getElementById('cash-out-pin-input').value;
    
    // wrong way to verify
    if(pinCashOut === '1234'){
        const cashOutBalance =  document.getElementById('account-balance').innerText;
        const cashOutBalanceNumber = parseFloat(cashOutBalance);

        // reduce the balance
        const newBalanceCashOut = cashOutBalanceNumber - cashOutNumber;

        // update the balance 
        document.getElementById('account-balance').innerText = newBalanceCashOut;

    }
    else{
        alert('Failed to Cash Out. Please Try Again Later');
    }
})