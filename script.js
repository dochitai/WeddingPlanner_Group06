function checkEmpty(value) {
    if (value.trim() == "") {
        return true;
    }
    return false;
}
function send(){   
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var pass = document.getElementById("pass");
    var repass = document.getElementById("repass");
    if (checkEmpty(firstName.value)) {
        alert("Please input your First Name");
        firstName.focus();
        return false;
    } else if (checkEmpty(lastName.value)) {
        alert("Please input your Last Name");
        lastName.focus();
        return false;
    } else if (checkEmpty(email.value)) {
        alert("Please input your Email");
        email.focus();
        return false;
    } else if (checkEmpty(phone.value)) {
        alert("Please input your Phone");
        phone.focus();
        return false;
    } else if (checkEmpty(pass.value)) {
        alert("Please input your Password");
        pass.focus();
        return false;
    } else if (checkEmpty(repass.value)) {
        alert("Please input your Confirm Password");
        repass.focus();
        return false;
    }

    var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!reEmail.test(email.value)){
        alert("Email is not matched fomat");
        document.getElementById("email").focus();
        return false;
    }

    if(isNaN(phone.value)){
        alert("Phone must be a number");
        document.getElementById("phone").focus();
        return false;
    }

    var rePhone = /^[0-9]{8,12}/;
    if(!rePhone.test(phone.value)){
        alert("Phone need greater than 8 or less than 12 characters");
        document.getElementById("phone").focus();
        return false;
    }

    var sPass = document.getElementById("pass").value;
    var rePass = /^\w{6,12}$/;
    if(!rePass.test(sPass)){
        alert("Password length in the range 6 - 12 characters");
        document.getElementById("pass").focus();
        return false;
    }

    var sRePass = document.getElementById("repass").value;
    if(sRePass != sPass){
        alert("Confirmed password and Password are not the same")
        document.getElementById("repass").focus();
        return false;
    }

alert("Congratulation\nYour Information has been sent successfully!");         
}