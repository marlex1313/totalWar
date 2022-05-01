function isColidingWith(v2) {// there is one exception
    let exc = 0;
    for(var b=0;b<units.length;b++) {
        if(getDist(v2,new Vector2(units[b].x,units[b].y)) < unitSize*2) {
            exc++;
        }
    }
    if(exc == 1) {
        return false;
    }
    else {
        return true;
    }
}