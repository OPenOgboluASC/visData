const prof = document.getElementById("pic");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("number");
const confirm = document.getElementById("confirm");
var numId = 30;

function onClick() {
    const ids = parseInt(document.getElementById("idNum").value);
    const output = document.getElementById("output");
    numId = ids;
    output.innerHTML = numId;
}

confirm.addEventListener('click', onClick);

var intervalID = window.setInterval(setRandom,3000);

function setRandom() {
    var person = (Math.floor(Math.random() * numId));

    var firstInit = data.results[person].name.first.substring(0,1).toUpperCase();
    var lastInit = data.results[person].name.last.substring(0,1).toUpperCase();

    var prsnPic = data.results[person].picture.large;
    var prsnName = firstInit + data.results[person].name.first.substring(1) + " " + lastInit + data.results[person].name.last.substring(1);
    var prsnEmail = data.results[person].email;
    var prsnPhone = data.results[person].phone;

    prof.src = prsnPic;
    name.innerHTML = prsnName;
    email.innerHTML = prsnEmail;
    phone.innerHTML = prsnPhone;
}
