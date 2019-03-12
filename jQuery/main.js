"use strict";
(function () {
    document.getElementById("submit-classification").addEventListener("click", ()=> {

        let inputValue = document.getElementById("input-area").value;
        let vegetableList = document.getElementById("vegetable-list");
        let fruitList = document.getElementById("fruit-list");

        if (document.getElementById("fruit-button").checked === true){
            let newListItem = document.createElement("li");
            newListItem.innerText = inputValue;
             fruitList.appendChild(newListItem);
            return;
        }

        if (document.getElementById("vegetable-button").checked === true){
            let newListItem = document.createElement("li");
            newListItem.innerText = inputValue;
            vegetableList.appendChild(newListItem);
            return;
        }

        else alert("Did you select a category?  Click one of them lil radio buttons and try again, or not, what do I care I'm just a program.\nI'm not even really talking to you right now, this is your own head voice conversing with itself.\n*Mind Blown*");
      });
})();