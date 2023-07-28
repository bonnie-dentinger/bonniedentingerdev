
function showBrandName(brand_name) {
    brand_name = document.getElementById(brand_name);
    brand_name.style.visibility = "visible";
    brand_name.style.opacity = "1";
}

function hideBrandName(brand_name) {
    brand_name = document.getElementById(brand_name);
    brand_name.style.visibility = "hidden";
    brand_name.style.opacity = "0";
}

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}

function loadHTML(page) {
    inner_html = document.getElementById("main").children;
    inner_html = inner_html[0];
    inner_html.classList.remove("fade-in");
    inner_html.classList.add("fade-out");
    
    setTimeout(function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("main").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", page, true);
        xhttp.send();
    }, 500);
}

let slide_index = 1;
showSlides(slide_index);

function plusSlides(n) {
    showSlides(slide_index += n);
}

function currentSlide(n) {
    showSlides(slide_index = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slide_index = 1;
    }

    if (n < 1) {
        slide_index = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slide_index-1].style.display = "block";

    dots[slide_index-1].classList.add("active");
}