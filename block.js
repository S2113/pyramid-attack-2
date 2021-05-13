class box

{
 constructor (x,y)
 {
    
    this.width=50;
    this.height=60;
    this.image=loadImage("block.png");
    this.body=Bodies.rectangle(x,y,50,60,{friction:0.5});
    this.visibility=225;
    World.add (world,this.body);

 }

  display()
  {
     
    
      


      if (this.body.speed<7.8)
      {
        push ();
        rotate(this.body.angle);
        image (this.image,this.body.position.x,this.body.position.y,50,60);
        pop ();
         
      }

      else{

        this.visibility=this.visibility-4;
        World.remove(world,this.body);
        push ();
        tint (255,this.visibility);
        image (this.image,this.body.position.x,this.body.position.y,50,60);
        pop ();

        
      }





  }




}
