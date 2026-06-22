let form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let username = document.getElementById("uname").value.trim();
    let password = document.getElementById("pass").value.trim();

    let message = document.getElementById("message");

    if(username === "" || password === ""){
        message.textContent = "All fields are required";
        message.style.color = "red";
        return;
    }

    if(password.length < 6){
        message.textContent = "Password must be at least 6 characters";
        message.style.color = "red";
        return;
    }

    message.textContent = "Login Successful";
    message.style.color = "green";

    console.log("Username:", username);
    console.log("Password:", password);
});