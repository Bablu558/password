const generatePassword = () => {
    const length = 12; // You can adjust the length of the generated password here
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    return password;
};

document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const generateButton = document.getElementById("generate-btn");

    generateButton.addEventListener("click", () => {
        const newPassword = generatePassword();
        passwordInput.value = newPassword;

        // Add a class to the button to change its color temporarily
        generateButton.classList.add("clicked");

        // Reset the button color after a short delay (e.g., 500 milliseconds)
        setTimeout(() => {
            generateButton.classList.remove("clicked");
        }, 150);
    });
});
