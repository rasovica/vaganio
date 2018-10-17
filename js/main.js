let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
}

document.addEventListener('DOMContentLoaded', function () {
    window.app = new PIXI.Application({width: document.body.offsetWidth});

    document.body.appendChild(app.view);

    PIXI.loader
        .add('snake', 'assets/sprites/snake.png')
        .once('complete', () => {
            const s = new Spermy();

            app.ticker.add(() => {
                s.update();
            });
        })
        .load();

}, false);