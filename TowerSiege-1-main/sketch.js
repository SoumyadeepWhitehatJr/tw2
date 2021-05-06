const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var sling1,shooter,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,stand1,stand2


function preload() {
   polygon_img=loadImage("polygon.png")
}

function setup(){
     createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    stand1=new Ground(600,350,300,10)
    stand2=new Ground(1000,230,200,10)
//1st
//last stack
    box1=new Ground1(500,330,20,30)
    box2=new Ground1(520,330,20,30)
    box3=new Ground1(540,330,20,30)
    box4=new Ground1(560,330,20,30)
    box5=new Ground1(580,330,20,30)
    box6=new Ground1(600,330,20,30)
    box7=new Ground1(620,330,20,30)
    //3rd stack
    box8=new Ground1(520,300,20,30)
    box9=new Ground1(540,300,20,30)
    box10=new Ground1(560,300,20,30)
    box11=new Ground1(580,300,20,30)
    box12=new Ground1(600,300,20,30)
//2nd stack

    box13=new Ground1(540,270,20,30)
    box14=new Ground1(560,270,20,30)
    box15=new Ground1(580,270,20,30)
//1st stack
    box16=new Ground1(560,240,20,30)


    //2nd row 
    box17=new Ground1(980,210,20,30)
    box18=new Ground1(1000,210,20,30)
    box19=new Ground1(1020,210,20,30)
    box20=new Ground1(1040,210,20,30)
    box25=new Ground1(1060,210,20,30)
    

    box21=new Ground1(1020,180,20,30)
    box22=new Ground1(1000,180,20,30)
    box23=new Ground1(1040,180,20,30)

    box24=new Ground1(1020,150,20,30)
    
    shooter= Bodies.circle(50,200,20)

    
    
   World.add(world,shooter)

   slingshot=new Slingshot(this.shooter,{x:100,y:200})
}

function draw(){
   background(10,40,50);
    Engine.update(engine);
imageMode(CENTER)
image(polygon_img,shooter.position.x,shooter.position.y,40,40)
  stand1.display()
  stand2.display()


  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()

  box20.display()
  box17.display()
  box18.display()
  box19.display()
  
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
 

//shooter.display()
 
slingshot.display()

}
function keyPressed(){

if (keyCode===32){

    slingshot.attach(this.shooter)
}

}

function mouseDragged(){
    Matter.Body.setPosition(this.shooter, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}