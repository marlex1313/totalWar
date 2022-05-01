var units = [];

class Unit {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        
        this.color = "black";
        this.selected = false;

        this.destination = new Vector2(x,y);

        units.push(this);
    }

    static renderList() {
        for(var a=0;a<units.length;a++) {
            sceene.strokeStyle = units[a].color;
            sceene.beginPath();
            sceene.arc(units[a].x,units[a].y,unitSize,0,Math.PI*2);
            sceene.stroke();
        }
    }

    static moveUnitsTo(x,y) {
        for(var a=0;a<units.length;a++) {
            if(units[a].selected) {
                units[a].destination = new Vector2(x,y);
            }
        }
    }

    static moveUnits() {
        for(var a=0;a<units.length;a++) {
            if(!(units[a].destination.x == units[a].x && units[a].destination.y == units[a].y)) {
                let newPos = getNewPos(new Vector2(units[a].x,units[a].y),units[a].destination);
                //console.log(newPos);
                if(!isColidingWith(newPos)) {
                    units[a].x = newPos.x;
                    units[a].y = newPos.y;
                }
            }
        }
    }
}