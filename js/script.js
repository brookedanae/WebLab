// Full name validation on submit
function validateName() {
    var noInput = document.querySelector("#fname").value;
    if (noInput === "") {
        alert("Don't forget to enter your full name!");
        return false;
    }
}

// Password validation
document.getElementById("password").onchange = function() {passwordValidation()}

function passwordValidation() {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const password = document.getElementById("password").value;
    if (regex.test(password) === false) {
        document.querySelector("#passwordError").innerHTML = "Password should contain at least 8 digits, with at least one upper and lower case character."
    } else {
        document.querySelector("#passwordError").innerHTML = "";
    }
}

// Age validation
document.querySelector("#age").oninput = (e) => {
    const age = document.getElementById("age").value;
    if (age < 18) {
        document.querySelector("#ageError").innerHTML = "You must be at least 18 years old to join MySpace!";
    }
    else {
        document.querySelector("#ageError").innerHTML = "";
    }
}

// Zipcode validation
document.getElementById("zipcode").onchange = function() {isZipCode()}

function isZipCode() {
    const regex = /^\d{5}$/;
    const userInput = document.getElementById("zipcode").value;
    if (regex.test(userInput) === false) {
        document.querySelector("#zipcodeError").innerHTML = "Zip code must be 5 digits!";
    } else {
        document.querySelector("#zipcodeError").innerHTML = "";
    }
}

// Robot Check Validation on submit
document.getElementById("checkbox").onclick = function() {isRobot()}

function isRobot() {
    const check = document.getElementById("checkbox").checked;
    if(!check)
    {
        document.querySelector("#robotcheckError").innerHTML = "Robots can't join MySpace. Must click the checkmark.";
        return false;
    }
    else
    {
        document.querySelector("#robotcheckError").innerHTML = "";
        return true;
    }
}
