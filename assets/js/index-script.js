var mobileMenu = document.getElementById("mobile-menu");
var navbar = document.querySelector("#header .navbar");
var listNavLink = document.querySelectorAll("#header .navbar ul li");

mobileMenu.onclick = function () {
    var isClosed = navbar.clientHeight === 0;
    if (isClosed) {
        navbar.style.height = 'auto';
        navbar.classList.add("animate-down");
        navbar.classList.remove("animate-up");
        setTimeout(() => {
            for (var i = 0; i < listNavLink.length; i++) {
                listNavLink[i].style.display = "block";
                listNavLink[i].style.opacity = "1";
            }
        }, 200);
    } else {
        navbar.classList.add("animate-up");
        navbar.classList.remove("animate-down");
        setTimeout(() => {
            for (var i = 0; i < listNavLink.length; i++) {
                listNavLink[i].style.display = "none";
                listNavLink[i].style.opacity = "0";
            }
        }, 200);
        navbar.style.height = "0px";
    }
};

function checkBrowserSize() {
    var width = window.innerWidth;
    var listItems = document.querySelectorAll("#header .navbar ul li");
    var navbar = document.querySelector("#header .navbar");
    if (width > 1048) {
        for (var i = 0; i < listNavLink.length; i++) {
            listItems[i].style.display = "inline-block";
            listItems[i].style.opacity = "1";
        }
        navbar.style.height = "auto";
    } else {
        for (var i = 0; i < listNavLink.length; i++) {
            listItems[i].style.display = "none";
        }
        navbar.style.height = "0px";
    }
}

window.addEventListener("resize", checkBrowserSize);
window.addEventListener("load", checkBrowserSize);
