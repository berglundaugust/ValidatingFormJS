document.addEventListener("DOMContentLoaded", init);

function init(event) {
  regForm = document.forms["registration"];

  regForm["register"].onclick = validateForm;
}

function validateForm(event) {
  var errorMessages = Array();

  // Användarnamn tomt
  if (!regForm["username"].value) {
    errorMessages.push("* Please enter Username");
  }

  if (!regForm["email"].value) {
    errorMessages.push("* Please enter a valid Emailadress");
  }


  // om lösenord är tomt
  if (!regForm["password1"].value) {
    errorMessages.push("* Please enter Password1");
  }

  // om lösenord 2 är tommt
  if (!regForm["password2"].value) {
    errorMessages.push("* Please enter Password2");
  }

  // Båda lösenorden ska ha värden
  if (regForm["password1"].value && regForm["password2"].value) {
    // Om lösenorden inte matchar
    if (regForm["password1"].value != regForm["password2"].value) {
      errorMessages.push("* Passwords do not match");
    }
  }

  var isChecked = false;
  for (var i = 0; i < regForm["gender"].length; i++) {
    if (regForm["gender"][i].checked) {
      isChecked = true;
      break;
    }
  }

  if (!isChecked) {
    errorMessages.push("* Please choose your gender");
  }

  if (!regForm["description"].value) {
    errorMessages.push("* Please enter a description about you");
  }

  displayErrors(errorMessages);

  if (errorMessages.length) {
    // Stoppa form att submitta
    return false;
  }
}

function displayErrors(errors) {
  var errorBox = document.getElementById("errorMessages");

  // Om det ej är några Errors
  if (!errors.length) {
    errorBox.innerHTML = "";
    return false;
  }

  // Get reference to error box
  var errorBox = document.getElementById("errorMessages");

  // Förbereder container att beskriva error-string
  var messageString = "<ul>";

  // Loopar igenom vilken typ av error
  for (var i = 0; i < errors.length; i++) {
    messageString += "<li>" + errors[i] + "</li>";
  }

  messageString += "</ul>";

  errorBox.innerHTML = messageString;
}
