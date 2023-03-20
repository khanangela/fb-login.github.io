//login

function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users')); // get the users array from LocalStorage

    // loop through the users array to find a matching email and password

    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
      alert('Login successful!');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  

    
    if (email == "") {
      alert("email must be filled out");
      return false;
    }

    if(email.indexOf('@') <= 0){
        alert("plz type correct email");
      return false;
    }

    if((email.charAt(email.length - 4)!= '.') && (email.charAt(email.length -3)!= ' . ')) {
        alert("plz type correct email");
        return false;
         
    }

   
  
    
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }
    
    if(password.length < 3 ){
        alert("Password must be 3 characters");
      return false;
    }

    if(password.length > 20){
        alert("Password must be 20 characters");
      return false;
    }



    return true;

   
  }

  //signup

  function validationForm() {
  var fname = document.getElementById('fnamebox').value;
  var lname = document.getElementById('lnamebox').value;
  var emails = document.getElementById('mailbox').value;
  var confirmemail = document.getElementById('mailboxes').value;
  var passwords = document.getElementById('mailbox1').value;
  var dob = document.getElementById('dob').value;
  const users = [];
  
  const user = {
    fname: fname,
    lname: lname,
    emails: emails,
    confirmemail:confirmemail,
    passwords: passwords,
    dob:dob
  };

  users.push(user); // add the user object to the array

  localStorage.setItem('users', JSON.stringify(users));


  
  

 

  

  // var correct_way = /^[A-Za-z]+$/;
  
  if (fname == "") {
    alert("Name must be filled out");
    return false;
  }
  if(fname > 3){
    alert("first name must be 3 characters long");
    return false;
  }

  // if(fname.match(correct_way)){
  //    alert("plz type correct name");
  //    return false;
  // }
  if (lname == "") {
    alert("Name must be filled out");
    return false;
  }

  if(lname > 3){
    alert("last name must be 3 characters long");
    return false;
  }

  // if(lname.match(correct_way)){
  //    alert("plz type correct name");
  //    return false;
  // }
  
  if (emails == "") {
    alert("Email must be filled out");
    return false;
  }
  if(emails.indexOf('@') <= 0){
    alert("plz type correct email");
  return false;
}

if((emails.charAt(emails.length - 4)!= '.') && (emails.charAt(emails.length -3)!= ' . ')) {
    alert("plz type correct email");
    return false;
     
}

if (confirmemail == "") {
    alert("Email must be filled out");
    return false;
  }


  if(confirmemail!= emails){
      alert("emails are not matching");
      return false;
  }
  
  if (passwords == "") {
    alert("Password must be filled out");
    return false;
  }
  if(passwords.length < 3 ){
    alert("Password must be 3 characters");
  return false;
}

if(passwords.length > 20){
    alert("Password must be 20 characters");
  return false;
}

  
  if (dob == "") {
    alert("Date of Birth must be filled out");
    return false;
  }
  

  var gender =  document.getElementById('r-b').value; 
  for(i=0; i<gender.length; i++){
     if(gender[i].checked==false){
      alert("Gender must be selected");
      return false;

     }
     return true;
    
  }
 
    
   
  }
  
 

