'use strict'

const registration = document.querySelector('.registration');
const authorization = document.querySelector('.authorization');
const btnRegAut = document.querySelector('.registration-button')

console.log(authorization);
console.log(registration)
console.log(btnRegAut)

registration.addEventListener('click', (event) => {
    registration.classList.add('toggle-identification')
    if (event.target) {
        authorization.classList.remove('toggle-identification')
        registration.style.order = '-1';
    }
    btnRegAut.querySelector('.button__change-text').innerHTML = '<b>Зарегестрироваться</b>';


});

authorization.addEventListener('click', (event) => {
    authorization.classList.add('toggle-identification')
    if (event.target) {
        registration.classList.remove('toggle-identification')
        authorization.style.order = '-1';
        registration.style.order = '0'
    }
    btnRegAut.querySelector('.button__change-text').innerHTML = '<b>Войти</b>';

});
