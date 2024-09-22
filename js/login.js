// form submit reloading the page

// step 1: set event handler    
document.getElementById('btn-login').addEventListener('click', function(event){
    // Step 2: prevent default behavior (Prevent reloading browser)
    event.preventDefault() // login to not reload

    // step 3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber);
    // console.log(pinNumber);

    // step 4: validate phone and pin
    // this is temporary & we should not do like this
    if(phoneNumber === '5' && pinNumber === '1234'){
        // console.log('You are logged in');
        // step 5: allow user to use the website
        window.location.href='/home.html';
    }
    else{
        alert('wrong phone number or pin');
    }
})