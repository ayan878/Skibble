const btnCancel =document.querySelector('.btnCancel');
const btnSend =document.querySelector('.btnSend');

const name =document.querySelector('.Name');
const email = document.querySelector(".Email");
const contact = document.querySelector(".Contact");
const message = document.querySelector(".Message");


const cancel = function () {
  name.value="";
  email.value="";
  contact.value="";
  message.value="";
};
btnCancel.addEventListener("click", cancel);

const send = function(){
  var name = document.querySelector(".Name").value;
  var email= document.querySelector('.Email').value;
  var contact=document.querySelector('.Contact').value;
  var message=document.querySelector(".Message").value;
  if (name === "") {
    document.querySelector(".errorName").innerHTML =
      "**Please fill the name field";

   }
  else if (email === "") {
    document.querySelector(".errorEmail").innerHTML =
     "**Please fill the email field";
   } 
  else if ( contact === "") {
    document.querySelector(".errorContact").innerHTML =
      "**Please fill the contact field";
 }
 else if (message === "") {
    document.querySelector(".errorMessage").innerHTML =
      "**Please fill the username field";
  } 
  else {
    alert("Sended");
  }   
};
btnSend.addEventListener('click',send);


