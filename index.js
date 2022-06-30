const errorForm = document.querySelector('.error-form');

const user = document.querySelector('#user');
const password = document.querySelector('#password');

const submit = document.querySelector('#submit');

const errorMesege = (texto) => {
    return errorForm.textContent = texto;
}


submit.addEventListener('click', (e) => {
    e.preventDefault();

    if(user.value === '' || password.value === '') {
        errorMesege('Type your username and password');
        
        setTimeout(() => {
            errorForm.textContent = "";
        }, 3000);
        return;
    }

    user.value ="";
    password.value ="";
});