const toggleMenu = () => {
    const menu = document.querySelector('#menu');
    const nav = document.querySelector('#nav');
    const mobileRes = document.querySelector('#mobile__res');
    
    menu.addEventListener('click', () => {
        nav.classList.toggle("nav__active");
        mobileRes.classList.toggle("mobile__res__active");
    }); 
};

toggleMenu();