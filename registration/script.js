'use strict'

const registration = document.querySelector('.registration');
const authorization = document.querySelector('.authorization');
const btnRegAut = document.querySelector('.registration-button');
const vkAnimation = document.querySelector('.authorization__vk');
const regMiddle = document.querySelector('.registration-middle')
const checkAunt = document.querySelector('.check-aunt');
const widd = 550;
console.log(authorization);
console.log(registration)
console.log(btnRegAut)
console.log(vkAnimation)

registration.addEventListener('click', (event) => {
    registration.classList.add('toggle-identification')
    if (event.target) {
        authorization.classList.remove('toggle-identification')
        registration.style.order = '-1';
    }
    btnRegAut.querySelector('.button__change-text').innerHTML = '<b>Зарегестрироваться</b>';
    vkAnimation.style.display = 'none';
    regMiddle.style.display = 'flex';
    checkAunt.style.display = 'none';
});

authorization.addEventListener('click', (event) => {
    authorization.classList.add('toggle-identification')
    if (event.target) {
        registration.classList.remove('toggle-identification')
        authorization.style.order = '-1';
        registration.style.order = '0'
    }
    btnRegAut.querySelector('.button__change-text').innerHTML = '<b>Войти</b>';
    btnRegAut.style = 'max-width:550px;';
    vkAnimation.style.display = 'block';
    regMiddle.style.display = 'none';
    checkAunt.style.display = 'flex';
});
