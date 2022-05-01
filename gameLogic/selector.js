let startPos;

function getAllUnitsIn(s,e) {
    let selection = [];
    for(var a=0;a<units.length;a++) {
        if(isWhitinRectangle(s.x,s.y,e.x,e.y,units[a].x,units[a].y)) {
            if(units[a].selected) {
                units[a].color = "black";
                units[a].selected = false;
            }
            else {
                units[a].selected = true;
                units[a].color = "red";
            }
            selection.push(units[a]);
        }
    }
    return selection;
}

document.addEventListener('mousedown', () => {
    startPos = new Vector2(mouseX,mouseY);
})

document.addEventListener('mouseup', () => {
    if(getDist(startPos,new Vector2(mouseX,mouseY)) > 2) { 
        getAllUnitsIn(startPos,new Vector2(mouseX,mouseY));
    }
    else {
        console.log("clicked");
        //units go there
        Unit.moveUnitsTo(mouseX,mouseY);
    }
})

function renderSelection() {
    if(mouseDown) {
        sceene.fillStyle = "rgba(125, 186, 255, 0.44)";
        sceene.strokeStyle = "rgb(125, 186, 255)";
        sceene.beginPath();
        sceene.rect(startPos.x,startPos.y,mouseX - startPos.x,mouseY - startPos.y);
        sceene.fill();
        sceene.stroke();
    }
}