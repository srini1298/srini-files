var forms=document.getElementById("forms");
var username=document.getElementById("username");
var email=document.getElementById("email");
var password=document.getElementById("password");
var address=document.getElementById("address");

forms.addEventListener('submit',function(event){
    event.preventDefault();
    checkForm([username,email,password,address]);
})


function checkForm(inputs){
    for(var i=0;i<inputs.length;i++){
        var input=input[i];
        if(input.value === ""){
            const message=input.id+"is required";
            showErrorMessage(input,message)
        }
        else{
            showSuccessMessage(input);
        }
    }
}

function showErrorMessage(input,message){
    const formcontrol=input.parentElement;
    formcontrol.classname="form-control error";
    const errormsg=formcontrol.querySelector('small');
    errormsg.innerText=message;
    
}

function showSuccessMessage(input){
    const formcontrol=input.parentElement;
    formcontrol.classname="form-control success";
}

