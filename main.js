var loginForm = document.getElementById('loginForm');
var message = document.getElementById('message');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var correctUsername = "Allyan";
  var correctPassword = "100"; 

  if (username == correctUsername && password == correctPassword) {
    message.textContent = "Login successful!";
    document.getElementsByTagName('p')[0].classList.add('msg-good');
  } else {
    message.textContent = "Incorrect username or password.";
    document.getElementsByTagName('p')[0].classList.add('msg-bad');
  }
});
