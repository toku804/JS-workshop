/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function(){

    var next = document.querySelector("#nextPicture");
    var prev = document.querySelector("#prevPicture");
    var lis = document.querySelectorAll("li");
    var counter = 0;

    lis[0].classList.add("visible");

    next.addEventListener("click", function (event){
        lis[counter].classList.remove("visible");
        counter++;
        if (counter >= lis.length) {
            counter = 0;
        }
        lis[counter].classList.add("visible");
    });

    prev.addEventListener("click", function (event){
        lis[counter].classList.remove("visible");
        counter--;
        if (Math.sign(counter) === -1) {
            counter = lis.length-1;
        }

        lis[counter].classList.add("visible");
    });

});