"use strict";

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}

/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}

/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

//FORM VALIDATION ///

const magac = document.getElementById("magac");
const mail = document.getElementById("mail");
const tell = document.getElementById("tell");

//all feilds
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");

//span,h3
let help = document.querySelectorAll(".helper");
let all = document.getElementById("all");

//fname
function fname() {
  //valid fname
  let validfname = /^[A-Za-z]+$/;
  let fnameRe = validfname.test(firstName.value);

  if (firstName.value == "") {
    help[0].innerHTML = "* * first name is empty";
    help[0].style.color = "red";
    firstName.style.border = "1px solid red";
  } else if (!fnameRe) {
    help[0].innerHTML =
      "** Fisrt name must be only string without white spaces";
    help[0].style.color = "red";
    firstName.style.border = "1px solid red";
  } else {
    help[0].innerHTML = "";
    help[0].style.color = "#000";
    firstName.style.border = "1px solid #000";
    return true;
  }
}
//valid lname
function lname() {
  //valid lname
  let validlname = /^[A-Za-z]+$/;
  let lnameRe = validlname.test(lastName.value);

  if (lastName.value == "") {
    help[1].innerHTML = "* * Last name is empty";
    help[1].style.color = "red";
    lastName.style.border = "1px solid red";
  } else if (!lnameRe) {
    help[1].innerHTML = "* *last name must be only string without white spaces";
    help[1].style.color = "red";
    lastName.style.border = "1px solid red";
  } else {
    help[1].innerHTML = "";
    help[1].style.color = "#000";
    lastName.style.border = "1px solid #000";
    return true;
  }
}

//pass
function pass() {
  //valid pass
  let validpass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let passRe = validpass.test(password.value);

  if (password.value == "") {
    help[2].innerHTML = "** Password is empty";
    help[2].style.color = "red";
    password.style.border = "1px solid red";
  } else if (!passRe) {
    help[2].innerHTML =
      "** Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters";
    help[2].style.color = "red";
    password.style.border = "1px solid red";
  } else {
    help[2].innerHTML = "";
    help[2].style.color = "#000";
    password.style.border = "1px solid #000";
    return true;
  }
}

// Confirm Password Validation
function conf() {
  if (confirmPassword.value != password.value) {
    help[3].innerHTML = "confirm your pass";
    help[3].style.color = "red";
    confirmPassword.style.border = "1px solid red";
  } else {
    help[3].innerHTML = "";
    help[3].style.color = "#000";
    confirmPassword.style.border = "1px solid #000";
    return true;
  }
}

function Emailcheck() {
  let validemail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailRE = validemail.test(email.value);
  if (email.value == "") {
    help[4].innerHTML = "** email is empty";
    help[4].style.color = "red";
    email.style.border = "1px solid red";
  } else if (!emailRE) {
    help[4].innerHTML = "** email Addres must be in valid";
    help[4].style.color = "red";
    email.style.border = "1px solid red";
  } else {
    help[4].innerHTML = "";
    help[4].style.color = "#000";
    email.style.border = "1px solid #000";
    return true;
  }
}

function phonevalid() {
  let phoneRE = /\61\d{1}\s\d{3}\s\d{3}/; //;61x xxx xxx
  let validationResult = phoneRE.test(phone.value);
  if (phone.value == "") {
    help[5].innerHTML = "** phone is empty";
    help[5].style.color = "red";
    phone.style.border = "1px solid red";
  } else if (!validationResult) {
    help[5].innerHTML = "9* the phone must be like 61x xxx xxx";
    help[5].style.color = "red";
    phone.style.border = "1px solid red";
  } else {
    help[5].innerHTML = "";
    help[5].style.color = "#000";
    phone.style.border = "1px solid #000";
    return true;
  }
}

document.getElementById("submit").onclick = function () {
  fname();
  lname();
  pass();
  conf();
  Emailcheck();
  phonevalid();

  if (
    fname() == true &&
    lname() == true &&
    pass() == true &&
    conf() == true &&
    Emailcheck() == true &&
    phonevalid() == true
  ) {
    magac.innerHTML = firstName.value + "" + lastName.value;
    mail.innerHTML = email.value;
    tell.innerHTML = phone.value;

    return true;
  } else {
    return false;
  }
};
