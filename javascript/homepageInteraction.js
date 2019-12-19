"use strict";

document.addEventListener("DOMContentLoaded", function() {
    let about = document.getElementById("about-us");
    if(window.matchMedia("(max-width: 375px;").matches) {
        about.classList.toggle("d-none");
    }
}, false);