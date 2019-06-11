function validateForm() {
  var fname = document.myForm.fname.value;
  var lname = document.myForm.lname.value;
  var email = document.myForm.email.value;
  var number = document.myForm.number.value;
  var address1 = document.myForm.address1.value;
  var address2 = document.myForm.address2.value;
  var city = document.myForm.city.value;
  var state = document.myForm.state.value;
  var number2 = document.myForm.number2.value;
  var psw = document.myForm.psw.value;
  var vpsw = document.myForm.vpsw.value;

  var fname1 =/^([a-zA-Z]{1,15})$/;
  var lname1 =/^([a-zA-Z]{1,15})$/;
  var mail =/^(([a-zA-Z0-9_\-\.]+)\@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{1,5}){2,18})$/;
  var phno = /^([0-9]{3}-[0-9]{3}-[0-9]{4})$/; 
  var add1 = /^([#0-9\a-zA-Z\,\''\.]{1,30})$/;
  var add2 = /^([#0-9\a-zA-Z\,\''\.]{1,30})$/;
  var city1 =/^([a-zA-Z\-\.]{1,15})$/;
  var state1 =/^([a-zA-Z\-\.]{1,15})$/;
  var zip1 =/^([0-9]{6})$/;
  var psswrd =/^([a-zA-Z0-9_\-\.\+\#]{5,20})$/;
  var vpsswrd =/^([a-zA-Z0-9_\-\.\+\#]{5,20})$/;


  if(fname == "") {
    document.getElementById("demo1").innerHTML="FirstName cannot be blank";
    document.getElementById("input1").style.border="1px solid red";
    document.getElementById("name1").style.color="red";
  }
  else if(fname1.test(fname)==false){
    document.getElementById("demo1").innerHTML="Please Enter Valid Name";
    document.getElementById("input1").style.border="1px solid #ff0000b5";
    document.getElementById("name1").style.color="#ff0000b5";
  }
  if (lname == "") {
    document.getElementById("demo2").innerHTML="LastNmae cannot be blank";
    document.getElementById("input2").style.border="1px solid red";
    document.getElementById("name2").style.color="red";  
  }
  else if(lname1.test(lname)==false){
    document.getElementById("demo2").innerHTML="Please Enter Valid Name";
    document.getElementById("input2").style.border="1px solid #ff0000b5";
    document.getElementById("name2").style.color="#ff0000b5";
  }
  if (email == "") {
    document.getElementById("demo3").innerHTML="Email cannot be blank";
    document.getElementById("input3").style.border="1px solid red";
    document.getElementById("email").style.color="red";    
  }
  else if(mail.test(email)==false){
    document.getElementById("demo3").innerHTML="Please Enter Valid email";
    document.getElementById("input3").style.border="1px solid #ff0000b5";
    document.getElementById("email").style.color="#ff0000b5";
  }
  if (number == "") {
    document.getElementById("demo4").innerHTML="PhoneNumber cannot be blank";
    document.getElementById("input4").style.border="1px solid red";
    document.getElementById("phnum").style.color="red";   
  }
  else if(phno.test(number)==false){
    document.getElementById("demo4").innerHTML="Please Enter valid phone number";  
    document.getElementById("input4").style.border="1px solid #ff0000b5";
    document.getElementById("phnum").style.color="#ff0000b5";
  }
  if (address1 == "") {
    document.getElementById("demo5").innerHTML="Street cannot be blank";
    document.getElementById("input5").style.border="1px solid red";
    document.getElementById("street1").style.color="red";   
  }
  else if(add1.test(address1)==false){
    document.getElementById("demo5").innerHTML="Please Enter Valid Address";
    document.getElementById("input5").style.border="1px solid #ff0000b5";
    document.getElementById("street1").style.color="#ff0000b5";
  }
  if (address2 == "") {
    document.getElementById("demo6").innerHTML="Street Address cannot be blank";
    document.getElementById("input6").style.border="1px solid red";
    document.getElementById("street2").style.color="red";   
  }
  else if(add2.test(address2)==false){
    document.getElementById("demo6").innerHTML="Please Enter Valid Address";
    document.getElementById("input6").style.border="1px solid #ff0000b5";
    document.getElementById("street2").style.color="#ff0000b5";
  }
  if (city == "") {
    document.getElementById("demo7").innerHTML="City cannot be blank";
    document.getElementById("input7").style.border="1px solid red"; 
    document.getElementById("city").style.color="red";  
  }
  else if(city1.test(city)==false){
    document.getElementById("demo7").innerHTML="Please Enter Valid City";
    document.getElementById("input7").style.border="1px solid #ff0000b5";
    document.getElementById("city").style.color="#ff0000b5";
  }
  if (state == "") {
    document.getElementById("demo8").innerHTML="State can't be blank";
    document.getElementById("input8").style.border="1px solid red"; 
    document.getElementById("state").style.color="red";  
  }
  else if(state1.test(state)==false){
    document.getElementById("demo8").innerHTML="Please Enter Valid State";
    document.getElementById("input8").style.border="1px solid #ff0000b5";
    document.getElementById("state").style.color="#ff0000b5";
  }
  if (number2 == "") {
    document.getElementById("demo9").innerHTML="Zip cannot be blank";
    document.getElementById("input9").style.border="1px solid red"; 
    document.getElementById("zip").style.color="red";  
  }
  else if(zip1.test(number2)==false){
    document.getElementById("demo9").innerHTML="Please Enter Valid Zip Code";
    document.getElementById("input9").style.border="1px solid #ff0000b5";
    document.getElementById("zip").style.color="#ff0000b5";
  }
  if (psw == "") {
    document.getElementById("demo10").innerHTML="Password cannot be blank";
    document.getElementById("input10").style.border="1px solid red";
    document.getElementById("password").style.color="red";   
  }
  else if(psswrd.test(psw)==false){
    document.getElementById("demo10").innerHTML="Please Enter Valid Password";
    document.getElementById("input10").style.border="1px solid #ff0000b5";
    document.getElementById("password").style.color="#ff0000b5";
  }
  if (vpsw == "") {
    document.getElementById("demo11").innerHTML="Verify Password cannot be blank";
    document.getElementById("input11").style.border="1px solid red";
    document.getElementById("vpassword").style.color="red";
  }
  else if(vpsswrd.test(vpsw)==false){
    document.getElementById("demo11").innerHTML="Please Enter Valid Password";
    document.getElementById("input11").style.border="1px solid #ff0000b5";
    document.getElementById("vpassword").style.color="#ff0000b5";
  }
  // return false;
}