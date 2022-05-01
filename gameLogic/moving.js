let step = 4; // distance covered each frame

function getNewPos(a,b) { //a being the unit and b being the destination
    let dist = getDist(a,b);
    if(dist >= step) {
        let thales = step/dist;
        return new Vector2((b.x - a.x)*thales + a.x,(b.y - a.y)*thales + a.y);
    }
    else {
        return b;
    }
}