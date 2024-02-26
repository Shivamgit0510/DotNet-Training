const nameNode=document.getElementById("fname");
const surnameNode=document.getElementById("sname");

const mobileNode=document.getElementById("mobile");
const emailNode=document.getElementById("email");
const passNode=document.getElementById("password");
const cpassNode=document.getElementById("cpass");

const errorNode1=document.getElementById("error1");
const errorNode2=document.getElementById("error2");
const errorNode3=document.getElementById("error3");
const errorNode4=document.getElementById("error4");
const errorNode5=document.getElementById("error5");
const errorNode6=document.getElementById("error6");

var checkbox = document.getElementById('terms');
var errorMessage = document.getElementById('error-message');


const mobilePattern=new RegExp("^[0-9]{10}$");
const passwordPattern= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
const cpass=cpassNode.value;
const pass=passNode.value;

const oList=document.createElement("ol");
const errors=['small letter', 'capital letter','digit','special symbol'];
for(let error of errors){
    const liNode=document.createElement('li');
    liNode.textContent=error;
    oList.append(liNode);
}
const spanNode1=document.createElement('span');
spanNode1.textContent="Password must contain atleast";
const spanNode2=document.createElement('span');
spanNode2.textContent="Password must be 6 to 12 characters long";


function validate1(){
    errorNode1.textContent="";
        if (nameNode.value=="") {
            errorNode1.textContent="First Name is required";
            return false;
        }else if(nameNode.value.length<2){
            errorNode1.textContent="Please enter valid First name";
            return false;
        }else{
            return true;
        }
}
function validate2(){
    errorNode2.textContent="";
    if (surnameNode.value=="") {
        errorNode2.textContent="Surname is required";
        return false;
    }else if(surnameNode.value.length<2){
        errorNode2.textContent="Please enter valid Surname";
        return false;
    }else{
        return true;
    }
}
function validate4(){
    errorNode4.textContent="";
        if (mobileNode.value=="") {
            errorNode4.textContent="Mobile number is required";
            return false;
        }else if(mobilePattern.test(mobileNode.value)==false){
            errorNode4.textContent="Please enter valid mobile number";
            return false;
        }else{
            return true;
        }
}
function validate3(){
    errorNode3.textContent="";
        if (emailNode.value=="") {
            errorNode3.textContent="Email ID is required";
            return false;
        }else if(!emailNode.value.includes("@")||emailNode.value.startsWith("@")||emailNode.value.endsWith("@")||emailNode.value.includes(" ")){
            errorNode3.textContent="Please enter valid email"
            return false;
        }else{
            return true;
        }
}
function validate5(){
    errorNode5.textContent="";
        if (passNode.value=="") {
            errorNode5.textContent="Password is required";
            return false;
        }else if(passwordPattern.test(passNode.value)==false){
            errorNode5.append(spanNode1,oList,spanNode2);
            return false;
        }else{
            return true;
        }
}
function validate6(){
    errorNode6.textContent="";
        if (cpassNode.value=="") {
            errorNode6.textContent="Confirm Password is required";
            return false;
        }else if(passNode.value != cpassNode.value){
            errorNode6.textContent="Confirm password must match";
            return false;
        }else{
            return true;
        }
    
}

function validateAll(){
    const f1=validate1(); 
    const f2= validate2(); 
    const f3= validate3();
    const f4= validate4(); 
    const f5= validate5(); 
    const f6=validate6();
    
    return (f1&&f2&&f3&&f4&&f5&&f6);
    
}

checkbox.addEventListener('change', function () {
    if (!checkbox.checked) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }});