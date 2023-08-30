const validateEmail = (Email) => {
    return String(Email).toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

const validatePhone = (Phone) => {
    const pattern = /9[0-9]+/
    return pattern.test(Phone) && Phone.length == 10
}

const validatePassword = (Password) => {
    return String(Password).match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/) && Password.length >= 8
}

const validateInput = (input) => input.length > 10

export { validateEmail, validatePhone, validatePassword, validateInput }