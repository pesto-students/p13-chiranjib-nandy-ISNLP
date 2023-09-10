function isStrongPassword(password) {
    // Check the length of the password
    if ((password.length < 8) || (password.toLowerCase().includes("password")) || (!/[A-Z]/.test(password))){
        return false;
    }
    return true;
}

// Example usage:
console.log(isStrongPassword("Qwerty")); // false - Too short
console.log(isStrongPassword("passwordQwerty")); // false - Contains "password"
console.log(isStrongPassword("qwerty123")); // false - No uppercase characters
console.log(isStrongPassword("Qwerty123")); // true