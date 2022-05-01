var mouseX = 0;
var mouseY = 0;
var mouseDown = false;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})

document.addEventListener('mousedown', () => {
    //mouse down
    mouseDown = true;
})

document.addEventListener('mouseup', () => {
    //mouse up
    mouseDown = false;
})