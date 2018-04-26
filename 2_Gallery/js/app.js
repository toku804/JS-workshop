/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function(){

    var lis = document.querySelectorAll("li");
    var body = document.querySelector("body");
    var bigImg = document.querySelector(".fullScreen");

    bigImg.style.display = "none";

    for (var i=0; i<lis.length; i++) {
        lis[i].addEventListener("click", function(event){
            var chosenImg = this.firstElementChild.getAttribute("src");

            var newBigImg = bigImg.firstElementChild;
            newBigImg.setAttribute("src", chosenImg);

            bigImg.style.display = "block";
        })
    }

    var button = document.querySelector(".close");

    button.addEventListener("click", function (event){
        bigImg.style.display = "none";
    })



    // Wszystko działa poprawnie, poza jednym - przy przeładowaniu strony na mgnienie oka pojawia się ten zły obrazek - do momentu aż przeglądarka zczyta, że nadałem mu styl display none. Żeby to wyeliminować, usuwam odnośnik do obrazka wrong z tagu img.




});