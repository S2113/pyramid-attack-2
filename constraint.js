class rope
{

constructor(a,b,l)
{
    var options={
        bodyA:a,
        pointB:b,
        length:l,
        stiffness: 0.006,
    }
    this.body=a;
    this.rope=Constraint.create(options);
    World.add (world,this.rope);

}

display()

{
   

   if (this.rope.bodyA)
   {

       var a=this.rope.bodyA.position;
       var b=this.rope.pointB;

       strokeWeight(4);
       line (a.x,a.y,b.x,b.y);
   }

}

fly()
{
    this.rope.bodyA=null;
}

attach()
{
    this.rope.bodyA=this.body;
}




}