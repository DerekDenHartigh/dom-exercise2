"use strict";
(function () {
    document.getElementById("submit-classification").addEventListener("click", ()=> {

        let inputValue = document.getElementById("submit-classification").value;
        let fruitList = document.getElementById("fruit-list");
        let vegetableList = document.getElementById("vegetable-list");
        console.log(fruitList, vegetableList);  // for testing, targeting of these lists successful
        if (document.getElementById("fruit-button").checked === true){
            let newListItem = document.createElement("li");
            newListItem.innerHTML="Banana"; // for testing, 
            // newListItem.innerText(`${inputValue}`);
            fruitList = document.getElementById("fruit-list");
            document.fruitList.appendChild(newListItem);
        }

        if (document.getElementById("vegetable-button").checked === true){
            let newListItem = document.createElement("li");
            newListItem.innerText(`${inputValue}`);
            fruitList = document.getElementById("fruit-list");
            document.vegetableList.appendChild(newListItem);
        }

        else alert("Did you select a category?  Click one of them lil radio buttons and try again, or not, what do I care I'm just a program.\nI'm not even really talking to you right now, this is your own head voice conversing with itself.\n*Mind Blown*");
      });
})();