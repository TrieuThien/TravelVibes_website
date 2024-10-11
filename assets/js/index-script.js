var mobileMenu = document.getElementById("mobile-menu");
var navbar = document.querySelector("#header .navbar");
var listNavLink = document.querySelectorAll("#header .navbar ul li");


// Closed/Open menu trên điện thoại và tablet
mobileMenu.onclick = function () {
    var isClosed = navbar.clientHeight === 0;
    if (isClosed) {
        navbar.style.height = 'auto';
        if (navbar.classList.contains("animate-up")) {
            navbar.classList.remove("animate-up");
            navbar.classList.add("animate-down");
            for (var i = 0; i < listNavLink.length; i++) {
                listNavLink[i].style.display = "block";
                
            }
        }
        else {
            navbar.classList.add("animate-down");
            for (var i = 0; i < listNavLink.length; i++) {
                listNavLink[i].style.display = "block";
            }
        }
        
    } else {
        if (navbar.classList.contains("animate-down")) {
            navbar.classList.remove("animate-down");
            navbar.classList.add("animate-up");
            for (var i = 0; i < listNavLink.length; i++) {
                listNavLink[i].style.display = "none";
            }
        }
        else {
            navbar.classList.add("animate-up");
            for (var i = 0; i < listNavLink.length; i++) {
                listNavLink[i].style.display = "none";
            }
        }
        navbar.style.height = "0px";
    }
}

// Kiểm tra kích thước cửa sổ và trả về style chuẩn của navbar khi ở giao diện laptop
function checkBrowserSize() {
    var width = window.innerWidth;
    var listItems = document.querySelectorAll("#header .navbar ul li");
    var navbar = document.querySelector("#header .navbar");

    if (width > 1048) {
        for (var i = 0; i < listNavLink.length; i++) {
            listItems[i].style.display = "inline-block";
        }
        navbar.style.height = "auto";
    }
    else {
        for (var i = 0; i < listNavLink.length; i++) {
            listItems[i].style.display = "none";
        }
        navbar.style.height = "0px";
    }
}

// Gọi hàm khi cửa sổ thay đổi kích thước
window.addEventListener("resize", checkBrowserSize);

// Gọi hàm khi trang được tải lần đầu
window.addEventListener("load", checkBrowserSize);
