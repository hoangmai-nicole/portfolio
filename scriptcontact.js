const draggable = document.getElementById('draggable');

let isDragging = false;
let offsetX, offsetY;

draggable.addEventListener('mousedown', (event) => {
    isDragging = true;
    offsetX = event.clientX - draggable.offsetLeft;
    offsetY = event.clientY - draggable.offsetTop;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(event) {
    if (isDragging) {
        draggable.style.left = event.clientX - offsetX + 'px';
        draggable.style.top = event.clientY - offsetY + 'px';
    }
}

function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}



