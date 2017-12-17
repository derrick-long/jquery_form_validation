function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}


$('#submit-button').click(function(){
  var errorMessage = "";

  if (isEmail($('#email').val()) == false) {
    errorMessage += "<p> Email is invalid! </p>";
  }

  if ($.isNumeric($('#telephone').val()) == false) {
    errorMessage += "<p> Telephone number is invalid! </p>";
  }

  if ($('#password').val() !=  $('#confirm-password').val()) {
    errorMessage += "<p> Passwords do not match! </p>";
  }

  alert(errorMessage);

});
