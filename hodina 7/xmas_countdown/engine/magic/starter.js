
let myCan = new myCanvas("myCanvas");

function test()


{
    myCan.add_shape(new shape("sqr", new Point(100,100), 5, new Vector("vc", 1, 1 )))

  
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

for(let i = 0; i <= arr.length; i++)
{

    console.log(arr[i]);

}


}

function loop()
{

myCan.clear();
myCan.display();


window.requestAnimationFrame(loop);

}

window.requestAnimationFrame(loop);



