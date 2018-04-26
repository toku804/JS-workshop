/**
 * Created by Jacek on 2015-12-16.
 */


document.addEventListener("DOMContentLoaded", function(){

/*
 <span class="tooltipText">Text tooltipa</span>
 */

    var tooltip1 = document.querySelector(".tooltip:nth-of-type(1)");
    var tooltip2 = document.querySelector(".tooltip:nth-of-type(2)");
    var tooltip3 = document.querySelector(".tooltip:nth-of-type(3)");

    tooltip1.addEventListener("mouseover", function (event){
        var newTooltip = document.createElement("span");
        this.appendChild(newTooltip);
        newTooltip.classList.add("tooltipText");
        newTooltip.innerText = this.dataset.text;
    });

    tooltip1.addEventListener("mouseout", function (event){
        var removeTooltip = this.firstElementChild;
        removeTooltip.parentElement.removeChild(removeTooltip);
    });

    tooltip2.addEventListener("mouseover", function (event){
        var newTooltip = document.createElement("span");
        this.appendChild(newTooltip);
        newTooltip.classList.add("tooltipText");
        newTooltip.innerText = this.dataset.text;
    });

    tooltip2.addEventListener("mouseout", function (event){
        var removeTooltip = this.firstElementChild;
        removeTooltip.parentElement.removeChild(removeTooltip);
    });

    tooltip3.addEventListener("mouseover", function (event){
        var newTooltip = document.createElement("span");
        this.appendChild(newTooltip);
        newTooltip.classList.add("tooltipText");
        newTooltip.innerText = this.dataset.text;
    });

    tooltip3.addEventListener("mouseout", function (event){
        var removeTooltip = this.firstElementChild;
        removeTooltip.parentElement.removeChild(removeTooltip);
    });




});