// form submit reloading the page

// step 1: set event handler    
document.getElementById('btn-login').addEventListener('click', function(event){
    // Step 2: prevent default behavior (Prevent reloading browser)
    event.preventDefault() // login to not reload
    console.log('log in btn clicked');

    // step 3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})