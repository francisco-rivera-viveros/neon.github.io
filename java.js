const open = document.getElementById('login');
const s = document.getElementById('s');
const x = document.getElementById('x');
const popup = document.getElementById('popup');
const neonPage = document.getElementById('neonPopup');
const close = document.getElementById('closeSuper');

open.addEventListener('click', () => {
    popup.style.transform = 'translateY(-100%)';
});

s.addEventListener('click', () => {
    popup.style.transform = 'translateY(-100%)';
});

x.addEventListener('click', () => {
    popup.style.transform = 'translateY(5%)';
});

close.addEventListener('click', () => {
    neonPage.style.transform = 'translateY(-200%)';
});

const log = document.getElementById('log');


log.addEventListener('click', () => {
    // Llamar a la función cuando se envía el formulario
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;    

    if (username === 'paco' && password === 'paco') {
        neonPage.style.transform = 'translateY(-100%)';
    };
});