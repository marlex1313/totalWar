function update() {
    sceene.clearRect(0,0,c.width,c.height);

    Unit.moveUnits();

    renderLoop();

    requestAnimationFrame(update);
}