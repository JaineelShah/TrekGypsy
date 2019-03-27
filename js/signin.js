function start() {
    var a = document.getElementById("first_name").value;
    namecheck(a, "alertn")
    var b = document.getElementById("last_name").value;
    lastnam (b, "alertn")
    var c = document.getElementById("email1").value;
    mail(c, "alerte")
    var e = document.getElementById("password1").value;
    password()
    repassword();

    if (( namecheck(a, "alertn")==true)&&((lastnam(b, "alertn")==true))&&(password()==true)&&(repassword()==true))
    {
        document.getElementById("yes_finally").disabled = false;
    }
    
}

function namecheck(a, id) {

    var spe = 0;
    for (i = 0; i < a.length; i++) {
        let charcode = a.charCodeAt(i);
        if (!((charcode >= 65) && (charcode <= 90) || (charcode >= 97) && (charcode <= 122))) {
            spe++;
        }
    }
    if (spe !== 0) {
        document.getElementById(id).innerHTML = "Your Name should not contain any special character";
    } else if ((a.length < 3) || (a.length > 250)) {
        document.getElementById(id).innerHTML = "The maximum length is 250 and the minimum is 3";
    } else {
        document.getElementById(id).innerHTML = "";
        return true;
    }
}

function lastnam(a,id){
    var spe = 0;
    for (i = 0; i < a.length; i++) {
        let charcode = a.charCodeAt(i);
        if (!((charcode >= 65) && (charcode <= 90) || (charcode >= 97) && (charcode <= 122))) {
            spe++;
        }
    }
    if (spe !== 0) {
        document.getElementById(id).innerHTML = "Your Name should not contain any special character";
    } else {
        document.getElementById(id).innerHTML = "";
        return true;
    }
}

function password() {
    var p = document.getElementById("password1").value;
    console.log("chins"+p);
    var id = 'alertf';
    errors = [];
        console.log(p);
    if (p.length < 8) {
        errors.push("Your password must be at least 8 characters"); 
        document.getElementById(id).innerHTML = "Password must contain mimimum 8 characters";

    }
    else if (p.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one letter.");
        document.getElementById(id).innerHTML = "Password must include letter";

    }
    else if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit."); 
        document.getElementById(id).innerHTML = "Password must contain numbers";
    }
    if (errors.length > 0) {
        // alert(errors.join("\n"));
        return false;
    }
    else{
        document.getElementById('alertf').innerHTML = "";
        return true;
    }
}

function repassword() {
    var ps = document.getElementById("password1").value;
    var reps = document.getElementById("password-confirm").value;
    console.log(" " + ps + "  "  + reps);
    if (ps == reps) {
        document.getElementById("alertf").innerHTML = "";
        return true;
    } else if ((ps != reps) || (reps.length < 1)) {
        document.getElementById("alertf").innerHTML = "Password didnot match"
    }
}


function mail(a, id) {
    if (!a.includes('@')) {
        document.getElementById(id).innerHTML = "Enter valid Email";
    } else if ((a[a.length - 1] == ".") || (a[0] == ".") == true) {
        document.getElementById(id).innerHTML = "Your mail id shouldnot start or end with '.' ";
    } else {
        document.getElementById(id).innerHTML = "";
        return true;
    }
}