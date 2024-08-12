document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
});

function verifyEmail() {
    const email = document.getElementById('email').value;
    document.getElementById('otpOverlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('otpOverlay').style.display = 'none';
}

document.getElementById('otpForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const otp = document.getElementById('otp').value;
    console.log('OTP:', otp);
    closePopup();
});

function Loging() {
    window.location.href = '/Home/Index';
    //$.ajax({
    //    url: '/Home/Index',
    //    type: 'GET', // or 'POST' if the Index method requires a POST request
    //    success: function (response) {
    //        alert("Success: " + response);
    //    },
    //    error: function (error) {
    //        alert("Error: " + error);
    //    }
    //});
}