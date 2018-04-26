/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function(){

    var images = document.querySelectorAll("img");
    var hideButton = document.querySelector("#hideButton");
    var showButton = document.querySelector("#showButton");
    var input = document.querySelector("input");

    hideButton.addEventListener("click", function(event){
        for (var i=0; i<images.length; i++) {
            if (images[i].dataset.tag.indexOf(input.value) !== -1) {
                images[i].classList.add("invisible");
            }

        }
        var inputValue = "";
        input.value = inputValue;



    });

    showButton.addEventListener("click", function(event){

        for (var i=0; i<images.length; i++) {
            if (images[i].dataset.tag.indexOf(input.value) !== -1) {
                images[i].classList.remove("invisible");
            }
            if (images[i].dataset.tag.indexOf(input.value) === -1) {
                images[i].classList.add("invisible");
            }

        }
        var inputValue = "";
        input.value = inputValue;


    });


    // Strona działa w poprawny sposób, zgodny z instrukcją. W idealnym świecie powinno jednak się wyświetlać tylko to, co chcemy, żeby było np. jak wpiszemy "nightlife", to powinny się wyświetlać tylko zdjęcia z tym tagiem. W tym celu dodałem na zdarzeniu "show" drugiego if-a, dzięki któremu wyświetlają nam się tylko te obrazki, które nas interesują.


});