
let myCan = new myCanvas("myCanvas");
let frames_count = 0;

let flag_run = true;

window.addEventListener("keydown", (event) => {

    if (event.key == " ") {
        if (flag_run) {

            flag_run = false;


        }
        else {

            flag_run = true;


        }
    }

});
function test() {
    myCan.add_shape(new shape("sqr", new Point(100, 100), 5, new Vector("vc", 1, 1)))
    myCan.add_shape(new shape("sqr", new Point(2, 77), 20, new Vector("vc", 99, 2)))
    myCan.add_shape(new shape("line", new Point(50, 30), 5, new Vector("vc", 1, 1)))
    myCan.add_shape(new Point("point", new Point(110, 20), 5, new Vector("vc", 1, 1)))



    console.log("test");

    /*
    myCan.add_shape(new shape("line",new Point(50, 50), 10));
    myCan.add_shape(new shape("line", new Point(100,100), 20));
    
    
    myCan.add_shape(new shape("sqr", new Point(60,60), 20))
    
    
    
    myCan.debug();
    
    myCan.display();
    */



    let arr = Array();
    arr.push("a");
    arr.push("b");
    arr.push("c");

    for (let i = 0; i <= arr.length; i++) {

        console.log(arr[i]);

    }


}


function loop() {

    if(flag_run)
   { myCan.clear();



    myCan.display();

    let fps = Math.floor(myCan.get_fps());
    if (frames_count == 10) {
        document.getElementById("fps_counter").innerHTML = "FPS:" + fps;
        frames_count = 0;


    }
    frames_count = frames_count + 1;

}

    window.requestAnimationFrame(loop);

}

window.requestAnimationFrame(loop);



