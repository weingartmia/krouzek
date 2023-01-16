class MyPlayer {


    constructor(id) {


        this.id = id;
        this.line_offset = 0;
        this.init();
this.color = "#000000";
    }
    init() {
        if (this.id == "a") {
            this.line_offset = 10;
        }

        else if (this.id == "b") {
            this.line_offset = -10;


        }
        myCan.add_shape(new shape("line_" + this.id, new Point(this.line_offset, myCan.height / 2), 20, new Vector("vc", 0, 0)));



    }

}