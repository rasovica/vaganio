class Spermy {
    constructor() {
        this.points = [];
        this.size = 45;
        this.counter = 0;

        for (let i = 0; i < 25; i++) {
            this.points.push(new PIXI.Point(i * this.size, 0));
        }

        this.strip = new PIXI.mesh.Rope(PIXI.loader.resources.snake.texture, this.points);
        this.strip.x = 500;
        this.strip.y = 200;

        window.app.stage.addChild(this.strip);
    }

    update() {
        this.counter += 0.1;

        this.points.forEach((item, i) => {

            item.y = 100 * Math.sin(Math.PI/6 * i) * Math.pow(Math.E, - (Math.log(100)/200) * i) * Math.cos(this.counter);
            // item.x = i * this.size + Math.cos((i * 0.3) + this.counter) * 20;
        });
    }
}
