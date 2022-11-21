class myCanvas {

    constructor(id) {
        this.id = id;
        this.el = document.getElementById(this.id);
        this.ctx = this.el.getContext("2d");
        this.shapes = Array();




        this.width = this.el.width






        this.height = this.el.height

        this.fps = 0;
        this.LastCalledTime = 0;


    }
    get_fps() {
        let delta = (Date.now() - this.LastCalledTime) / 1000;
        this.LastCalledTime = Date.now();
        this.fps = 1 / delta;

        return this.fps;

    }

    /**
     * Tato funkce usnadnuje pridavani bodu do canvasu ktere se vykresli
     * param {Point} new_point novy bod
     * @param {*}
     */
    add_shape(new_shape) {
        this.shapes.push(new_shape);
    }
    /**
     * vykresli zminene body do canvasu
    */
    display() {
        for (let i = 0; i < this.shapes.length; i++) {
            this.shapes[i].draw(this.ctx);
            if (this.shapes[i].vector != null) {
                this.shapes[i].move(this.width, this.height);

            }


            //this.shapes[i].move();

        }




    }


    clear() {
        this.ctx.clearRect(0, 0, this.el.width, this.el.height);

    }

    debug() {
        console.log("id " + this.id);


        for (let i = 0; i < this.shapes.length; i++) {
            this.shapes[i].debug();


        }


    }


}


