// Window scroll back to top 
function scrollTop() {
    var btnToScroll = document.querySelector('#btn__scroll');
    btnToScroll.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
}

// Filter products
function filterProd() {
    var clicked = false;
    var menBsFilterBtn = document.querySelector('#men__bs__filterProd__btn'); // Mens filter items button
    var menBsCateg = document.querySelector('#men__boardshort__categ'); // Mens boardershorts items category
    var womenBsFilterBtn = document.querySelector('#womenBs__filterProd__btn'); // Womens boardershorts filter items butoon
    var womenBsCateg = document.querySelector('#women__boardshort__categ'); // Womens boardershorts items category
    var menShirtFilterBtn = document.querySelector('#mensShirt__filterProd__btn'); // Mens shirt filter button
    var menShirtCateg = document.querySelector('#men__shirt__categ'); // Mens shirt items category
    var headWearFilterBtn = document.querySelector('#head__wear__featProd__btn'); // Head wear filter items button
    var headWearCateg = document.querySelector('#head__wear__categ'); // Head wear items category
    var menRsCateg = document.querySelector('#men__running__shorts__categ'); // Mens running shorts category
    var menRsFilterBtn = document.querySelector('#mensRS__filterProd__btn'); // Mens running shorts filter button
    var womenRsCateg = document.querySelector('#women__running__shorts__categ'); // Womens running shorts category
    var womenRsFilterBtn = document.querySelector('#womenRS__filterProd__btn'); // Womens running shorts filter button
    var onSaleFilterBtn = document.querySelector('#on__sale__filterProd__btn'); // On sale filter items button
    var onSaleCateg = document.querySelector('#on__sale__categ'); // On sale items category
    var personalCareCateg = document.querySelector('#personal__care__categ'); // Personal care items category
    var personalCareBtn = document.querySelector('#personalCare__filterProd__btn'); // Personal care filter button
    try {
        menShirtFilterBtn.addEventListener('click', function() {
            if (clicked !== true) {
                menShirtCateg.classList.toggle('men__shirt__categ__active');
            }
        });
    }
    catch(err) {
        console.log(err);
    }

    try {
        menBsFilterBtn.addEventListener('click', function() {
            if (clicked !== true) {
                menBsCateg.classList.toggle('men__bs__categ__active');
            }
        });
    }
    catch(err) {
        console.log(err);
    }

    try {
        womenBsFilterBtn.addEventListener('click', function() {
            womenBsCateg.classList.toggle('women__bs__categ__active');
        });
    }
    catch(err) {
        console.log(err)
    }

    try {
        headWearFilterBtn.addEventListener('click', function() {
            if (clicked !== true) {
                headWearCateg.classList.toggle('head__wear__categ__active');
            }
        });
    }
    catch(err) {
        console.log(err);
    }

    try {
        menRsFilterBtn.addEventListener('click', function() {
            if (clicked !== true) {
                menRsCateg.classList.toggle('men__running__shorts__categ__active');
            }
        });
    }
    catch(err) {
        console.log(err);
    }
     // If button is clicked for WOMEN RUNNING SHORTS
    try {
        womenRsFilterBtn.addEventListener('click', function() {
            if (clicked !== true) {
                womenRsCateg.classList.toggle('women__running__shorts__categ__active');
            }
        });
    }
    catch(err) {
        console.log(err);
    }
    // If button is clicked for ON SALE
    try {
        onSaleFilterBtn.addEventListener('click', function() {
            if (clicked !== true) {
                onSaleCateg.classList.toggle('on__sale__categ__active');
            }
        });
    }
    catch(err) {
        console.log(err);
    }
    //  If button is clicked for PERSONAL CARE
    try {
        personalCareBtn.addEventListener('click', function() {
            if (clicked !== true) {
                personalCareCateg.classList.toggle('personal__care__active');
            }
        });
    }
    catch(err) {
        console.log(err);
    }
}


// Load functions
window.onload = function() {
    scrollTop();
    filterProd();
}