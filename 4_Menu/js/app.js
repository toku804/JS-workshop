/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function(){

    var mainList = document.querySelector(".nav>ul");
    var main1 = mainList.children[0];
    var main2 = mainList.children[1];
    var main3 = mainList.children[2];
    var main4 = mainList.children[3];

    var mainListArray = [];

    mainListArray.push(main1, main2, main3, main4);

    main1.addEventListener("mouseover", function (event){
        if (this.querySelector("ul") !== null) {
            this.firstElementChild.style.display = "block";
        }
    });

    main1.addEventListener("mouseout", function (event){
        if (this.querySelector("ul") !== null) {
            this.firstElementChild.style.display = "none";
        }
    });

    main2.addEventListener("mouseover", function (event){
        if (this.querySelector("ul") !== null) {
            this.firstElementChild.style.display = "block";
        }
    });

    main2.addEventListener("mouseout", function (event){
        if (this.querySelector("ul") !== null) {
            this.firstElementChild.style.display = "none";
        }
    });

    main3.addEventListener("mouseover", function (event){
        if (this.querySelector("ul") !== null) {
            this.firstElementChild.style.display = "block";
        }
    });

    main3.addEventListener("mouseout", function (event){
        if (this.querySelector("ul") !== null) {
            this.firstElementChild.style.display = "none";
        }
    });

    main4.addEventListener("mouseover", function (event){
        if (this.querySelector("ul") !== null) {
            this.firstElementChild.style.display = "block";
        }
    });

    main4.addEventListener("mouseout", function (event){
        if (this.querySelector("ul") !== null) {
            this.firstElementChild.style.display = "none";
        }
    });


});