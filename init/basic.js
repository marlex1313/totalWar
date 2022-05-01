class Sceene  {
    constructor() {
        var canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        window.onload = function() {
            window.addEventListener('resize',init,false);
            init();
            setup();
        }
        
        function init() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        init();
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }
}

//to use the canvas :
//var sceene = new Sceene();

class Vector2 {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static sum(a,b) {
        return new Vector2(a.x + b.x, a.y + b.y);
    }
}

function getDist(a,b) {
    return Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2);
}

function isWhitinRectangle(sx,sy,ex,ey,posX,posY) {
    if(posX > sx && posX < ex && posY > sy && posY < ey) {
        return true;
    }
    return false;
}