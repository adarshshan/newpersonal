var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var SubError = document.getElementById('subject-error');
var phoneError = document.getElementById('phone-error');

function validateName(){
    var name = document.getElementById('name').value;

    if(name.length == 0){
        document.getElementById('name-error').style.color='red';
        nameError.innerHTML = 'Name is required ! ';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        document.getElementById('name-error').style.color='red';
        nameError.innerHTML = 'Write full name';
        return false;
    }
    if(name.length<9){
        document.getElementById('name-error').style.color='red';
        nameError.innerHTML = 'Name must be at least 8 characters';
        return false;
    }
    document.getElementById('name-error').style.color='green';
    nameError.innerHTML = 'valid <i class="fa-solid fa-check"></i>';
    
    return true;
    
}
function validateEmail(){
    var email = document.getElementById('email').value;
    if(email.length == 0){
        document.getElementById('email-error').style.color='red';
        document.getElementById('email-error').innerHTML='Email address is required !';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        document.getElementById('email-error').style.color='red';
        emailError.innerHTML = 'Email is invalid !';
    }
    document.getElementById('email-error').style.color='green';
    emailError.innerHTML = 'valid <i class="fa-solid fa-check"></i>';
    
    return true;
    
}
function validatePhone(){
    var phone = document.getElementById('phone').value;
    if(phone.length==0){
        document.getElementById('phone-error').style.color='red';
        phoneError.innerHTML = 'Phone Number is required !';
        return false;
    }
    if(phone.length !== 10){
        document.getElementById('phone-error').style.color='red';
        phoneError.innerHTML = 'Phone Number should be 10 Numbers';
        return false;
    }
    document.getElementById('phone-error').style.color='green';
    phoneError.innerHTML = 'valid <i class="fa-solid fa-check"></i>';
    
    return true;
}
function validateSub(){
    let subject = document.getElementById('subject').value;
    if(subject.length == 0){
        document.getElementById('subject-error').style.color='red';
        SubError.innerHTML = 'Enter the object ! ';
        return false;
    }
    document.getElementById('subject-error').style.color='green';
    SubError.innerHTML = 'valid <i class="fa-solid fa-check"></i>';
    
    return true;


}