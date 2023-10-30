$(() => {
  $("#contact-form").on("submit", checkForm);
});

function checkForm() {
  alert("checkform");
  return (
    checkEmail($("#email")) &&
    checkName($("#name")) &&
    checkMessage($("#message"))
  );
}

function checkEmail(email) {
  if (email.val() == "") {
    alert("Email is required");
    return false;
  } else if (email.val().indexOf("@") == -1) {
    alert("Email must have @");
    return false;
  }
  return true;
}
function checkMessage(message) {
  if (message.val() == "") {
    alert("Message is required");
    return false;
  }
  return true;
}
function checkName(name) {
  if (name.val() == "") {
    alert("Name is required");
    return false;
  }
  return true;
}
