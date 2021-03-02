// Window scroll to top 
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
    scrollTop();
};

myFunctions();