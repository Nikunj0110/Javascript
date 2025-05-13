function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("error")[0].innerHTML = error;
}
function clearerror() {
  cerror = document.getElementsByClassName("error");
  for (let item of cerror) {
    item.innerHTML = "";
  }
}

function css() {
  let piece = document.getElementsByClassName("css");
  for (let ok of piece) {
    ok.style.border = "1px solid red";
  }
}

function validateform() {
  let returnval = true;
  clearerror();
 

  let name = document.forms["myform"]["fname"].value;
  if (name.length < 5) {
    seterror("name", "Length is too sort!");
    css();
    returnval = false;
  }

  let email = document.forms["myform"]["femail"].value;
  if (email.length > 16) {
    seterror("email", "Email Is Too Long");
    css();
    returnval = false;
  }

  let phone = document.forms["myform"]["fphone"].value;
  if (phone.length != 10) {
    seterror("phone", "Please Enter Valid Phone Number!");
    css();
    returnval = false;
  }

  let password = document.forms["myform"]["fpassword"].value;
  if (password.length < 5) {
    seterror("pwd", "Enter Valid Password!");
    css();
    returnval = false;
  }

  let cpassword = document.forms["myform"]["fcpassword"].value;
  if (cpassword != password) {
    seterror("cpwd", "Both Password are not same!");
    css();
    returnval = false;
  }
  return returnval && document.write("<h1>Submitted Successfully</h1>");
}
