const docE = document.documentElement;
const newCursor = document.getElementById('cursor');
let posX = 0;
let posY = 0;

document.addEventListener('DOMContentLoaded', () =>{
    document.documentElement.onmousemove = function(e){
        posX = e.pageX + 'px';
        posY = e.pageY + 'px';

        newCursor.style.left = posX;
        newCursor.style.top = posY;
    }
});