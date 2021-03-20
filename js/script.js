// Full name validation on submit
function validateName() {
    var noInput = document.querySelector("#fname").value;
    if (noInput === "") {
        alert("Don't forget to enter your full name!");
        return false;
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
