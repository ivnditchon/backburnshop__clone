// Nav items dropdown
const navDropDownActive = () => {
    const navLinks = document.getElementById('nav__links');
    const childNodes = navLinks.childNodes;
    const navMen = document.getElementById('men__dropDown'); // Men dropdown list
    const navWomen = document.getElementById('women__dropDown'); // Women dropdown list
    const navOnSale = document.getElementById('onSale__dropDown'); // Onsale dropdown list
    const navContact = document.querySelector('#contact__dropDown'); // Contact dropdown list
    for (let i = 0; i < childNodes.length; i++) {
        if (childNodes[i].nodeType === 1) {
            if(Array.prototype.indexOf.call(navLinks.children, childNodes[i]) === 1) {
                childNodes[i].addEventListener('mouseover', function() {
                    navMen.classList.add('dropDown__active');
                })
                childNodes[i].addEventListener('mouseout', function() {
                    navMen.classList.remove('dropDown__active');
                })
            }
            if(Array.prototype.indexOf.call(navLinks.children, childNodes[i]) === 2) {
                childNodes[i].addEventListener('mouseover', function() {
                    navWomen.classList.add('dropDown__active');
                });
                childNodes[i].addEventListener('mouseout', function() {
                    navWomen.classList.remove('dropDown__active');
                })
            }
            if(Array.prototype.indexOf.call(navLinks.children, childNodes[i]) === 3) {
                childNodes[i].addEventListener('mouseover', function() {
                    navOnSale.classList.add('dropDown__active');
                });
                childNodes[i].addEventListener('mouseout', function() {
                    navOnSale.classList.remove('dropDown__active');
                })
            }
            if(Array.prototype.indexOf.call(navLinks.children, childNodes[i]) === 4) {
                childNodes[i].addEventListener('mouseover', function() {
                    navContact.classList.add('dropDown__active');
                });
                childNodes[i].addEventListener('mouseout', function() {
                    navContact.classList.remove('dropDown__active');
                })
            }          
        } 
    }
};

// Slider 
let slideIndex = 0;
function carousel() {
    var i;
    var slides = document.getElementsByClassName("banner__slide");
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
         slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
// Toggle hamburger menu
function toggleMenu() {
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

// Nav items toggle
function navToggle() {
    const nav = document.querySelector('#nav');
    const navLinks = document.getElementById('nav__links');
    const childNodes = navLinks.childNodes;
    const navMen = document.getElementById('men__dropDown'); // Men dropdown list
    const navWomen = document.getElementById('women__dropDown'); // Women dropdown list
    const navOnSale = document.getElementById('onSale__dropDown'); // Onsale dropdown list
    const navContact = document.querySelector('#contact__dropDown'); // Contact dropdown list
    const caret = document.querySelectorAll('#caret');
    if (nav.classList.toggle("nav__active")) {
        for (let i = 0; i < childNodes.length; i++) {
            if (childNodes[i].nodeType === 1) {
                if (Array.prototype.indexOf.call(navLinks.children, childNodes[i]) === 1) {
                    childNodes[i].addEventListener('mouseover', function() {
                        navMen.classList.remove('dropDown__active');
                    });
                }
                if (Array.prototype.indexOf.call(navLinks.children, childNodes[i]) === 2) {
                    childNodes[i].addEventListener('mouseover', function() {
                        navWomen.classList.remove('dropDown__active');
                    });
                }
                if (Array.prototype.indexOf.call(navLinks.children, childNodes[i]) === 3) {
                    childNodes[i].addEventListener('mouseover', function() {
                        navOnSale.classList.remove('dropDown__active');
                    });
                }
                if (Array.prototype.indexOf.call(navLinks.children, childNodes[i]) === 4) {
                    childNodes[i].addEventListener('mouseover', function() {
                        navContact.classList.remove('dropDown__active');
                    });
                }          
            } 
        }
        for (let n = 0; n < caret.length; n++) {
            if (Array.prototype.indexOf.call(caret, caret[n]) === 0) {
                caret[n].addEventListener('click', function() {
                    navMen.classList.toggle('caret__dropDown__active');
                });
            }
            if (Array.prototype.indexOf.call(caret, caret[n]) === 1) {
                caret[n].addEventListener('click', function() {
                    navWomen.classList.toggle('caret__dropDown__active');
                });
            }
            if (Array.prototype.indexOf.call(caret, caret[n]) === 2) {
                caret[n].addEventListener('click', function() {
                    navOnSale.classList.toggle('caret__dropDown__active');
                }); 
            }
            if (Array.prototype.indexOf.call(caret, caret[n]) === 3) {
                caret[n].addEventListener('click', function() {
                    navContact.classList.toggle('caret__dropDown__active');
                });
            }
        }
    }
    else {
        location.reload();
    }
}

function changeNavIcon() {
    const caret = document.querySelectorAll('#caret');
    caret.forEach(function(caretIcons){
        caretIcons.classList.toggle('fa-plus');
    });
}

function scrollTop() {
    const btnToScroll = document.querySelector('#btn__scroll');
    btnToScroll.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
}

function myFunctions() {
    navDropDownActive();
    carousel();
    toggleMenu();
    scrollTop();    
};

myFunctions();