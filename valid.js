let email=document.getElementById("email");
let password=document.getElementById("password");

function validate(){
    if(emailvalue==""||password.value==""){
        alert('Fields cannot be empty');
        return false;
    }
    else{
        return true;
        //alert (" Validation is proper")
    }
}