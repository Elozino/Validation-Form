function wejapaForm(){
    // Declaration of variables
    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('telephone').value.trim();
    const password = document.getElementById('password').value.trim();
    const error_message = document.getElementById('error_message');
    
    error_message.style.padding ="10px";

    if(name === ""){
        text = 'Please Enter Firstname & Lastname';
        error_message.innerHTML = text;
        return false;
    }

    if(email === ""){
        text = 'Please Enter Valid Email';
        error_message.innerHTML = text;
        return false;
    }

    if(phone != /^\+(?:[0-9] ?){6,14}[0-9]$/ && phone.length != 14){
        text = 'Please Enter Valid Number';
        error_message.innerHTML = text;
        return false;
    }

    if(password.length < 7){
        text = 'Password should be more than 6 characters';
        error_message.innerHTML = text;
        return false;
    }

    else{
        alert('Successful')
        return true;
    }
}

