class Point
{

constructor(x, y, id)
{
    this.x = x;
    this.y = y;
    this.id =id;
}
draw(context)
{  
    context.beginPath();
    context.arc(this.x, this.y, 2, 0, 360);
    context.stroke();
}
debug()
{


    console.log("point.js");
    console.log("x: " + this.x);
    console.log("y: " + this.y);
    console.log("id: "+ this.id);
}
}