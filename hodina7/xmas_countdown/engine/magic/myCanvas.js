class myCanvas {

    constructor(id) {
        this.id = id;
        this.el = document.getElementById(this.id);
        this.ctx = this.el.getContext("2d");
        this.shapes = Array();

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
        for (let i = 0; i < this.shapes.length; i++)
        {
            this.shapes[i].draw(this.ctx);
        }




    }
debug()
{
console.log("id " + this.id);


for(let i = 0; i < this.shapes.length; i++)
{
this.shapes[i].debug();


}


}


}


