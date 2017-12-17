function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}


$('#submit-button').click(function(){
  var errorMessage = "<p> Please correct the following: </p> ";
  var fieldMissing = "";

  if ($('#email').val() == "") {
    fieldMissing += "<br> Email is blank";
  }

  if (isEmail($('#email').val()) == false) {
    errorMessage += "<p> Email is invalid! </p>";
  }


  if ($('#telephone').val() == "") {
      fieldMissing += "<br> Telephone Number is blank";
  }

  if ($.isNumeric($('#telephone').val()) == false) {
    errorMessage += "<p> Telephone number is invalid! </p>";
  }


  if ($('#password').val() == "") {
      fieldMissing += "<br> Password is blank";
  }

  if ($('#confirm-password').val() == "") {
      fieldMissing += "<br> Password confirmation is blank";
  }

  if ($('#password').val() !=  $('#confirm-password').val()) {
    errorMessage += "<p> Passwords do not match! </p>";
  }

  if (fieldMissing != "") {
    errorMessage += fieldMissing;
  }

  if (errorMessage != "<p> Please correct the following: </p> ") {
    $('.errors').append(errorMessage);
  } else {
    $('#success').append('Form submitted!');
  }

});
