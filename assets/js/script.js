var formsignin = document.forms["signin"];

var signinemail = document.getElementById("logemail");

var signinpassword = document.getElementById("logpassword");

var valid = document.querySelector(".valid");

var showhide = document.getElementById("showhide");

var usernamelength = 6;
var passwordlength = 6;
function formvalid() {
    if (signinemail.value == "") {
        signinemail.nextElementSibling.innerHTML = "This field cannot be blank";
        signinemail.style.border = "1px solid red";
        return false;
    }
    if(signinemail.value.length < 6){
        signinemail.nextElementSibling.innerHTML = "Username must be at least" + " " +  usernamelength + " " + "characters";
        signinemail.style.border = "1px solid red";
        return false;
    }else{
        signinemail.nextElementSibling.innerHTML = "";
        signinemail.style.border = "1px solid green";
    }
    if (signinpassword.value == "") {
        signinpassword.nextElementSibling.innerHTML = "This field cannot be blank";
        signinpassword.style.border = "1px solid red";
        return false;
    }
    if(signinpassword.value.length < 6){
        signinpassword.nextElementSibling.innerHTML = "Username must be at least" + " " +  passwordlength + " " + "characters";
        signinpassword.style.border = "1px solid red";
        return false;
    }else{
        signinpassword.nextElementSibling.innerHTML = "";
        signinpassword.style.border = "1px solid green";
    }
}

show = false;
showhide.addEventListener("click", function(e){
    if(!show){
        console.log("to text");
        signinpassword.setAttribute("type", "text");
        showhide.textContent = "Hide";
        show = true;
    }
    else if(show = true){
        console.log("to password");
        signinpassword.setAttribute("type", "password");
        showhide.textContent = "Show";
        show = false;
    }
    e.preventDefault();
})