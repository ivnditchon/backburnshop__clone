const toggleMenu = () => {
    const menu = document.querySelector('#menu');
    const nav = document.querySelector('#nav');
    const mobileRes = document.querySelector('#mobile__res');
    const createAcc = document.querySelector('.create__acc');
    
    menu.addEventListener('click', () => {
        nav.classList.toggle("nav__active");
        mobileRes.classList.toggle("mobile__res__active");
        createAcc.classList.toggle("nav__item__active");
    }); 
};

const myFunctions = () => {
    toggleMenu();
};

myFunctions();