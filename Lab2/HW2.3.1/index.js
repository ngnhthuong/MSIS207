const checkLogin = () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (containsSpecialCharacters(username) || containsExtraSpaces(username) || containsInvalidPassword(password)) {
        alert("Invalid Name or Password.");
    } else {
        alert("Login successful!");
    }
};

const containsSpecialCharacters = (str) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return !regex.test(str);
};

const containsExtraSpaces = (str) => /\s\s+/.test(str);

const containsInvalidPassword = (password) => {
    const regex = /^[^\s@]+$/;
    return !regex.test(password);
};
