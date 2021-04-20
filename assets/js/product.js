function item() {
        var categName = localStorage.getItem("title");
        var image = localStorage.getItem("image");
        var name = localStorage.getItem("name");
        var price = localStorage.getItem("price"); 
        var location = localStorage.getItem("location");
        var categoryName = document.createTextNode(categName);
        var categoryAtt = document.getElementById("category__name").setAttribute("href", location);
        var productNamePat = document.getElementById("product__name").innerHTML = name;
        var categoryText = document.getElementById("category__name").appendChild(categoryName);
        var productName = document.getElementById("p__name").innerHTML = name;    
        var productPrice = document.getElementById("p__price").innerHTML = price
        var productImage = document.getElementById("img").setAttribute("src", image);
}
function myFunc() {
        item();
}
/*===== INVOKE FUNCTION =====*/
myFunc();