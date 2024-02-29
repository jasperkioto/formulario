
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    document.getElementById('clock').innerHTML = strTime;
}

setInterval(updateTime, 1000);

document.addEventListener("DOMContentLoaded", function() {
    let signUp = document.getElementById("signup");
    let signIn = document.getElementById("signin");
    let nameInput = document.querySelector("#nameinput input");
    let emailInput = document.querySelector("#emailinput input");
    let passwordInput = document.querySelector("#passwordinput input");
    let nameField = document.getElementById("nameinput");
    let changePasswordLink = document.getElementById("changePasswordLink");
    let limpiarButton = document.getElementById("limpiar");

    signIn.onclick = function() {
        let emailValue = emailInput.value.trim();
        let passwordValue = passwordInput.value.trim();
        
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (emailValue === storedEmail && passwordValue === storedPassword) {
            window.location.href = "https://yailinm43.wixsite.com/epiphany";
        } else {
            alert("Correo electrónico o contraseña incorrectos.");
        }
    }

    signUp.onclick = function() {
        let nameValue = nameInput.value.trim();
        let emailValue = emailInput.value.trim();
        let passwordValue = passwordInput.value.trim();
        
      
        if (nameValue === "" || nameValue.length < 3) {
            alert("El nombre de usuario debe tener al menos 3 caracteres.");
            return;
        }
        
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === "" || !emailRegex.test(emailValue)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        
        if (passwordValue === "" || passwordValue.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        
        localStorage.setItem("email", emailValue);
        localStorage.setItem("password", passwordValue);
            
        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";

        nameField.style.display = "none";
        alert("Registrado con éxito. Puede iniciar sesión ahora.");
    }

    limpiarButton.onclick = function() {
        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        alert("Campos limpiados.");
    }
    
    changePasswordLink.onclick = function() {
        let newPassword = prompt("Ingrese la nueva contraseña:");
        if (newPassword !== null && newPassword !== "") {
            localStorage.setItem("password", newPassword);
            alert("Contraseña cambiada exitosamente.");
        }
    }

    
    document.getElementById("changePasswordLinkRedirect").onclick = function() {
        window.location.href = "formulario.html"; 
    }

});