
// VALIDATE FORM CODE
const validateForm = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let male = document.getElementById("male");
    let female = document.getElementById("female");

    if(name.length < 8){
        alert("Name has to be more than 8 characters");
        return;
    }

    if(!email.endsWith(".com")){
        alert("Email must end with '.com'");
        return;
    }

    if(!isAlphanumeric(password)){
        alert("Password must be alphanumeric (contain characters and numbers)")
        return;
    }

    if(age < 17){
        alert("You must be at least 17 years old to register an account")
        return;
    }

    if(!male.checked && !female.checked){
        alert("You must pick a gender");
        return;
    }

    window.location.href = "index.html";
}

const isAlphanumeric = (password) => {
    let hasAlphabet = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            hasAlphabet = true;
        }

        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    return hasAlphabet && hasNumber;
};

// ALERT CODE
document.getElementById('sos-btn').addEventListener('click', function() {
    alert("You have dialed the SOS number. Help is on your way!");
});

// SYMPTOM LOGGER
let symptomList = [];

function addSymptom(name, rate) {
    let symptom = {
        symptomName: name,
        symptomRate: rate,
    };
    symptomList.push(symptom);
}

document.getElementById('body-img').onclick = function(){
    let x = prompt("How many symptoms do you want to log? (enter a number greater than 0)");
        if (x <= 0) {
            alert("Please enter a number greater than 0.");
            return;
        }

        for (let y = 1; y <= x; y++) {
            let symptomName = prompt("Please enter symptom #" + y + ":");
            let symptomRate = prompt("Please enter the rate for symptom #" + y + ":");
            addSymptom(symptomName, symptomRate);
        }
    console.log("Logged Symptoms:");
    symptomList.forEach(symptom => symptom.show());
}

// IMAGE SLIDER CODE
const path = [
    "../NADI_Rachel Chen/Photos/img1.jpg",
    "../NADI_Rachel Chen/Photos/img2.jpg",
    "../NADI_Rachel Chen/Photos/img3.jpg",
    "../NADI_Rachel Chen/Photos/img4.jpg",
    "../NADI_Rachel Chen/Photos/img5.jpg"
]

let currImage = 0;

$('#next').click(function(){
    currImage++
    if(currImage >= path.length){
        currImage = 0;
    }
    $('#img-slider').attr("src", path[currImage])
})

$('#prev').click(function(){
    currImage--
    if(currImage < 0){
        currImage = path.length-1;
    }
    $('#img-slider').attr("src", path[currImage])
})
