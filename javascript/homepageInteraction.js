"use strict";

document.addEventListener("DOMContentLoaded", function() {
    let openMenuButt = document.getElementById("open-menu-button");
    let insideButt = document.getElementById("menu-inside");
    let buttons = document.getElementById("buttons");
    let aboutBtt = document.getElementById("about-us-button");
    let menuBtt = document.getElementById("menu-button");
    let content = document.getElementById("contents")
    let about = document.getElementById("about-us");
    let menu = document.getElementById("menu-content")
    let closeBtt = document.getElementById("close-button");

    openMenuButt.addEventListener("click", function () {
        if(insideButt.style.display=="") {
            buttons.style.backgroundColor="";
            insideButt.style.display="none";
        } else {
            buttons.style.backgroundColor= "#d1c3b7aa";
            insideButt.style.display="";
        }
    },false);

    aboutBtt.addEventListener("click", function() {
        about.style.display="";
        content.style.display="";
        menu.style.display="none";
        buttons.style.display ="none";
    }, false);

    menuBtt.addEventListener("click", function() {
        buttons.style.display="none";
        about.style.display="none"
        content.style.display="";
        menu.style.display="";
    });

    closeBtt.addEventListener("click", function() {
        about.style.display="none";
        content.style.display="none";
        menu.style.display="none";
        buttons.style.display="";
    }, false);


}, false);