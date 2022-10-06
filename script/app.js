function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    const passwordInput = document.querySelector(".js-password");
    const passwordToggle = document.querySelector(".js-checkbox");
    const passwordOptions = ["password", "text"];

    passwordToggle.addEventListener('change', function () {
        passwordInput.type = passwordOptions[+this.checked];
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});