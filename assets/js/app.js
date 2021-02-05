// Nav items dropdown
const navDropDownActive = () => {
    const navMen = document.querySelector('#nav__item__men');
    const navMenDropDown = document.querySelector('#men__dropDown');
    const navWomen = document.querySelector('#nav__item__women');
    const navWomenDropDown = document.querySelector('#women__dropDown');
    const navOnSale = document.querySelector('#nav__item__onSale');
    const navOnSaleDropDown = document.querySelector('#onSale__dropDown');
    const navContact = document.querySelector('#nav__item__contact');
    const navContactDropDown = document.querySelector('#contact__dropDown');

    navMen.addEventListener("mouseover", () => {
        navMenDropDown.classList.add("dropDown__active")
    });
    navMen.addEventListener("mouseout", () => {
        navMenDropDown.classList.remove("dropDown__active");
    });
    navWomen.addEventListener("mouseover", () => {
        navWomenDropDown.classList.add("dropDown__active");
    });
    navWomen.addEventListener("mouseout", () => {
        navWomenDropDown.classList.remove("dropDown__active");
    });
    navOnSale.addEventListener("mouseover", () => {
        navOnSaleDropDown.classList.add("dropDown__active");
    });
    navOnSale.addEventListener("mouseout", () => {
        navOnSaleDropDown.classList.remove("dropDown__active");
    });
    navContact.addEventListener("mouseover", () => { 
        navContactDropDown.classList.add("dropDown__active");
    });
    navContact.addEventListener("mouseout", () => { 
        navContactDropDown.classList.remove("dropDown__active");
    }); 
};
// Toggle hamburger menu
const toggleMenu = () => {
    const menu = document.querySelector('#menu');
    const mobileRes = document.querySelector('#mobile__res');
    const createAcc = document.querySelector('.createAcc');
    const signIn = document.querySelector('.signIn');
    
    menu.addEventListener('click', () => {
        navToggle();
        changeNavIcon();
        mobileRes.classList.toggle("mobile__res__active");
        createAcc.classList.toggle("active");
        signIn.classList.toggle("active");
    });
};

function navToggle() {
    const nav = document.querySelector('#nav');
    nav.classList.toggle("nav__active");
}

function changeNavIcon(){
    const caret = document.querySelectorAll('#caret');
    caret.forEach(function(caretIcons){
        caretIcons.classList.toggle('fa-plus');
    });
}

const myFunctions = () => {
    navDropDownActive();
    toggleMenu();
};

myFunctions();