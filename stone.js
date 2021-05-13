class stone
{

constructor(x,y)
{
 
    this.x=x;
    this.y=y;
    this.d=50;
    this.body=Bodies.circle(x,y,this.d/2);

    World.add (world,this.body);

}



display()
{
    fill ("yellow");
    circle (this.body.position.x,this.body.position.y,this.d);
}


}