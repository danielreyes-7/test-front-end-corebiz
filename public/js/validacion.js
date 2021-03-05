const validator = require('validator');

let errors = [];

window.addEventListener('load', () => {

    const formulario = document.getElementsByClassName('form');

    addEventListener('submit', (e) => {
        e.preventDefault();

        errors = [];
        clearValidations();

        validateInput("name", [
            [validator.isLength, { min: 1 }, "Nombre es un campo requerido!"],
        ]);
        validateInput("email", [
            [validator.isEmail, "Email debe ser un email valido!"],
        ]);

        
    })
})