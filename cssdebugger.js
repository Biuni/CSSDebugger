/*
* Create by Gianluca Bonifazi
* www.biuni.it
* Copyright (c) 2015 Biuni
*/

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
} //Randomize Color Of Outline
 
var myList = document.getElementsByTagName("*");
for (var i = 0; i < myList.length; i++) {
        myList[i].style.outline = '2px solid '+getRandomColor();
} // Outline All Element
