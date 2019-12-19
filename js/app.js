function ageComparisson() {
    var dob = document.getElementById("dateinfo").value;
    var birthdate = new Date(dob);
    var currentdate = new Date();
    const agerestriction = Math.floor(currentdate - birthdate); // used to convert into actual age
    let output = document.getElementById("output");

    if(agerestriction > 568025136000) {
        output.innerText = `You are ${Math.floor(agerestriction/31536000000)}, years old, you may pass`;
    } else {
        output.innerText = `You may not enter, you are ${Math.floor(agerestriction/31536000000)}, years old and are too young.`;
    }
}