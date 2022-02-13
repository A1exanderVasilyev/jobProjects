let demoForm = document.getElementById('formDemo');

let inputName = document.getElementById('userName');
let inputNameLabel = document.getElementById('userNameLabel');

let inputOrganisation = document.getElementById('userOrganisation');
let organisationLabel = document.getElementById('organisationLabel');

let inputEmail = document.getElementById('userEmail');
let inputEmailLabel = document.getElementById('emailLabel');

let inputPhone = document.getElementById('userPhone');
let inputPhoneLabel = document.getElementById('phoneLabel');

let inputCheckbox = document.getElementById('agreementCheckbox');
let errorBlocks = document.getElementsByClassName('error-text');

let demoFormButton = document.getElementById('formDemoButton');

let nameRegular = /^[A-ZА-ЯЁ]+$/i;
let organisationRegular = /^[0-9A-ZА-ЯЁ]+$/i;
let emailRegular = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
let spacesRegular = /^[ \s]+|[ \s]+$/g;

var maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
}

inputPhone.onfocus = function() {
    var mask = new IMask(inputPhone, maskOptions);
}

//remove error onkeydown
inputName.onkeydown = function() {
    inputName.classList.remove('input__error');
    inputNameLabel.classList.remove('active');
}
inputOrganisation.onkeydown = function() {
    inputOrganisation.classList.remove('input__error');
    organisationLabel.classList.remove('active');
}
inputPhone.onkeydown = function() {
    inputPhone.classList.remove('input__error');
    inputPhoneLabel.classList.remove('active');
}
inputEmail.onkeydown = function() {
    inputEmail.classList.remove('input__error');
    inputEmailLabel.classList.remove('active');
}
inputCheckbox.onfocus = function() {
    inputCheckbox.classList.remove('checkbox__error');
}

demoFormButton.addEventListener("click", function(event){
    event.preventDefault();
    let phoneValue = inputPhone.value.replace(/[^0-9]/g, '');

    let flag = true;
    function checkFields() {
        //check user name
        if (!nameRegular.test(inputName.value)) { 
            inputName.classList.add('input__error');
            inputNameLabel.classList.add('active');
            flag = false;
        } else {
            inputName.classList.remove('input__error');
        }

        //check organsiation name
        if (!organisationRegular.test(inputOrganisation.value)) { 
            inputOrganisation.classList.add('input__error');
            organisationLabel.classList.add('active');
            flag = false;
        } else {
            inputOrganisation.classList.remove('input__error');
        }

        //check phone value
        if (phoneValue.length != 11) {
            inputPhone.classList.add('input__error');
            inputPhoneLabel.classList.add('active');
            flag = false;
        } else {
            inputPhone.classList.remove('input__error');
        }

        //check email
        if (!emailRegular.test(inputEmail.value)) {
            inputEmail.classList.add('input__error');
            inputEmailLabel.classList.add('active');
            flag = false;
        } else {
            inputEmail.classList.remove('input__error');
        }

        //check checkbox value
        if (!inputCheckbox.checked) {
            inputCheckbox.classList.add('checkbox__error');
            flag = false;
        } else {
            inputCheckbox.classList.remove('checkbox__error');
        }

        if (flag == false) {
            return false;
        } else return true;
    }
    
    console.log(checkFields())

    if (checkFields()) {
        formDemo.submit();
    }
});


