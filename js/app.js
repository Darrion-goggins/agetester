function ageComparisson() {
    var dob = document.getElementById("dateinfo").value;
    var birthdate = new Date(dob);
    var currentdate = new Date();
    var agerestriction = Math.floor(currentdate - birthdate); // used to convert into actual age

    if(agerestriction > 568025136000) {
        console.log("You are ", Math.floor(agerestriction/31536000000), "years old, you may pass");
    } else {
        console.log("You may not enter, you are", Math.floor(agerestriction/31536000000), "years old and are too young.");
    }
}