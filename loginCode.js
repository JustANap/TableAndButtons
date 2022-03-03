function checkCreds() {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumber = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    var fullNameLength = fullName.length;
    if (fullNameLength > 21 || fullNameLength < 3) {
        document.getElementById("loginStatus").innerHTML = "Invalid full name, please resubmit.";
    } else if (badgeNumber > 999 || badgeNumber < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid badge number, please resubmit.";
    } else {
        alert("Access granted, welcome " + fullName);
        location.replace("./UATSpacePage.html");
    }
}