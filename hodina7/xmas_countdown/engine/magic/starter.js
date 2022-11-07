function test()
{
   console.log("test");
let myCan = new myCanvas("myCanvas");

myCan.add_shape(new shape("line",new Point(50, 50), 10));
myCan.add_shape(new shape("line", new Point(100,100), 20));


myCan.add_shape(new shape("sqr", new Point(60,60), 20))



myCan.debug();

myCan.display();




let arr = Array();
arr.push("a");
arr.push("b");
arr.push("c");

for(let i = 0; i <= arr.length; i++)
{

    console.log(arr[i]);

}


}







