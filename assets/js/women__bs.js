function womenBsItems() {
    var item = document.querySelectorAll("#item");
    for (let i = 0; i < item.length; i++) {
        item[i].addEventListener('click', (e) => {
            var categName = document.getElementById("desc__header__left").getElementsByTagName("h2")[0].innerHTML;
            var image = e.currentTarget.getElementsByTagName("div")[0].getElementsByTagName("img")[0].getAttribute("src");;
            var name = e.currentTarget.getElementsByTagName("div")[2].getElementsByTagName("h4")[0].innerHTML;
            var price = e.currentTarget.getElementsByTagName("div")[3].getElementsByTagName("h3")[0].innerHTML;
            localStorage.setItem("title", categName);
            localStorage.setItem("image", image);
            localStorage.setItem("name", name);
            localStorage.setItem("price", price);
            localStorage.setItem("location", "women__bs.html");
            window.location.href = "product__details.html";
        });
    }
}
function myFunc() {
    womenBsItems();
}

myFunc();