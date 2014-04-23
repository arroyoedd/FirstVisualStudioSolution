"use strict";

var toDoCounter = 0;

var elementDoSomething = function(){
    "use strict";
    toDoCounter++;
    var idElement = [];

    var inputValue = document.getElementById("todoInput");
    var outputOrderedList = document.getElementById("todoUnorderedList");
    idElement.push('<li id="item' + toDoCounter + '" onclick="strikeOutListItem(\'' + 'item' + toDoCounter + '\');">' + inputValue.value + '<div onclick="deleteItem(' + 'item' + toDoCounter + ');"> delete me</div>' + '</li>');

    for (var i = 0; i < idElement.length; i++) {
        outputOrderedList.innerHTML += idElement[i];
    }

    //idElement.push('item' + toDoCounter);

    //outputOrderedList.innerHTML += '<li id="item' + toDoCounter + '" onclick="strikeOutListItem(\''+'item' + toDoCounter + '\');">' + inputValue.value + '<div onclick="deleteItem('+ 'item' + toDoCounter +');"> delete me</div>' + '</li>';


   
};
   
var deleteItem = function (clicker) {
    clicker.style.display = 'none';
};
var strikeOutListItem = function (listItemId) {
    "use strict";
    var x = document.getElementById(listItemId);
    x.setAttribute("class", "strikethrough");
    //if (x.style.textDecorationLineThrough == "line-through") {
      //  x.style.display = 'none';
    //}

};



//write a strikethrough if clicked for each li
//add a new list element