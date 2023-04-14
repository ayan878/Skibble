"use strict"

const username = document.querySelector('.Username');
const email = document.querySelector(".Email");
const password = document.querySelector(".Password");
const confirmpassword = document.querySelector(".confirmPassword");

const btnSignup =document.querySelector('.btnSignup');
const btnlogin =document.querySelector('.btnlogin');


const submit = function () {

    if (username.value === "") {
      document.querySelector(".errorUsername").innerHTML =
        "**Please fill the name field";
    } else if (email.value === "") {
      document.querySelector(".errorEmail").innerHTML =
        "**Please fill the email field";
    } else if (password.value === "") {
      document.querySelector(".errorPassword").innerHTML =
        "**Please fill the contact field";
    } else if (confirmpassword.value === "") {
      document.querySelector(".errorConfirmPassword").innerHTML =
        "**Please fill the username field";
    }
    else if(password.value!==confirmpassword.value) {
        alert('.Password not match');
        // document.querySelector('.errorPassword').innerHTML="Password not match";
    }
    else {
      alert("Submited");
    }
};
btnSignup.addEventListener("click", submit);

const login =function(){
window.location.href =
  "https://learn.skibble.tech/s/courses/642eae3be4b04cea7b3462c2/take";
}
btnlogin.addEventListener('click',login);