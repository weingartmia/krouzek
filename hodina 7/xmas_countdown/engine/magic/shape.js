class shape {
    /**
     * 
     * @param {string} id identifikace
     * @param {Point} center_point teziste
     * @param {int} radius velikost opsane kruznice
     * @param {vector} vector pohyb bodu
     * 
     */

    constructor(id, center_point, radius, vector = null ) {

        this.id = id;
        this.center_point = center_point;
        this.radius = radius;
        this.points = Array();
this.vector = vector;
        this.init();

    }

move(w,h,)
{
this.center_point.x = this.center_point.x + this.vector.x;
this.center_point.y = this.center_point.y + this.vector.y;
this.init();



}

    init() {
        if (this.id == "line") {
            let half_radius = this.radius / 2;
            this.points.push(new Point(this.center_point.x - half_radius, this.center_point.y, this.id + "_a".y));
            this.points.push(new Point(this.center_point.x + half_radius, this.center_point.y, this.id + "_b".y));

    
    
        }
    else if(this.id == "sqr")
    {
        let half_radius = this.radius / 2; 
this.points.push(new Point(this.center_point.x - half_radius, this.center_point.y, this.id + "_a"))
this.points.push(new Point(this.center_point.x, this.center_point.y + half_radius, this.id + "_b"))
this.points.push(new Point(this.center_point.x + half_radius, this.center_point.y, this.id + "_c"))
this.points.push(new Point(this.center_point.x, this.center_point.y - half_radius, this.id + "_d"))

    }
    
    }







    draw(ctx) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i].draw(ctx);


        }
        for (let i = 0; i < this.points.length; i++) {
            ctx.beginPath();
            if (i != (this.points.length - 1)) {
                ctx.moveTo(this.points[i].x, this.points[i].y);
                ctx.lineTo(this.points[i + 1].x, this.points[i + 1].y);
            }
            else {
                ctx.moveTo(this.points[i].x, this.points[i].y);
                ctx.lineTo(this.points[0].x, this.points[0].y);

            }
            ctx.stroke();
        }
    }

    debug() {
        console.log("shape.js");

        console.log("id " + this.id);

        this.center_point.debug();
        console.log("radius " + this.radius)


        for (let i = 0; i < this.points.length; i++) {
            this.points[i].debug();

        }
    }



}