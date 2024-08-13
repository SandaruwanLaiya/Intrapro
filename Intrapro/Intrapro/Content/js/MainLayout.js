document.getElementById('userIcon').addEventListener('click', function () {
    var panel = document.getElementById('userDetailsPanel');
    if (panel.style.display === "none" || panel.style.display === "") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
});

function LogOut() {
    window.location.href = '/Administrator/Index';
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