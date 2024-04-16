document.getElementById('loginForm').addEventListener('submit', function (event) {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var mypassword = 100;
    var myusername = "khan";

    if (username == myusername && password == mypassword) {
        document.getElementById('message').textContent="Correct"
    }else{
        document.getElementById('message').textContent="Incorrect"
    }
})