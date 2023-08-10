const validateEmail = (Email) => {
    return String(Email).toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

const validateInput = (input) => input.length > 1
const validateMessage = (input) => input.length > 10

export { validateEmail,  validateInput, validateMessage }