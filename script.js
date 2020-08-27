var emailElem=document.getElementById('email');
var nameElem=document.getElementById('name');
var submitElem=document.getElementById('submitbtn');
submitElem.addEventListener('click',function(){

})
var nameValue=document.getElementById('name-Text');
var emailValue=document.getElementById('email-Text');


const myForm=document.getElementById('main-form');
myForm.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("SUBMITTED");
    console.log(emailElem.value);
    console.log(nameElem.value);
    nameValue.textContent =nameElem.value;
    emailValue.textContent=emailElem.value;
})