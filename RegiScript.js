// function validateForm(){

//     var name = document.getElementById("nameTxt").value;
//     var email = document.getElementById("emailTxt").value;
//     var gender = document.getElementById("cityList").value;
//     var address = document.getElementById("addressTxt").value;

//     if(name.length > 5){
//         console.log(name);
//         return false;
//     }
//     else if(email == ""){
//         return false;
//     }
//     else{
//         return true;
//     }
// }

function validate() {
    if (validateName()) {
        return;
    }
    else if(validateEmail()){
        return;
    }
    else if (validateGender()) {
        return;
    }
    else if (validateAddress()) {
        return;
    }
    else if (validateCity()) {
        return;
    }
    else if (validateAgreement()) {
        return;
    }
    return true;
}



function checkAlpha(name) {
    for (var i = 0; i < name.length; i++) {
        if (name.charAt(i) < 'a' || name.charAt(i) > 'z') {
            if (name.charAt(i) < 'A' || name.charAt(i) > 'Z') {
                if (name.charAt(i) != ' ') {
                    return true;
                }
            }
        }
    }
    return true;
}

function validateName() {
    var name = document.getElementById("nameTxt").value;
    if (name.length == "" || name.length == null) {
        window.alert("Name must be filled");
        return true;
    }
    return false;
}

function validateEmail(){
    var email = document.getElementById("emailTxt").value;
    if(email.length == "" || name.length == null){
        window.alert("Email must be filled");
        return true;
    }
    return false;
}

function validateGender() {
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;

    if (!male & !female) {
        window.alert("You must choose your gender");
        return true;
    }
    return false;
}

function validateAddress() {
    var address = document.getElementById("addressTxt").value;

    if(address.length == "" || address,length == null){
        window.alert("Address must be filled");
        return true;
    }
    return false;
}

function validateCity() {
    var type = document.getElementById("cityList").value;
    
    if (type == "Select City") {
        window.alert("City must be selected");
        return true;
    }
    return false;

}

function validateAgreement() {
    var agree = document.getElementById("agreeChk").checked;

    if (!agree) {
        window.alert("You must agree to the terms and conditions");
        return true;
    }
    return false;
}

