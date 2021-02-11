const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var st;
var ha ;
var ru;




function setup() {
  createCanvas(800, 700);
  


	engine = Engine.create();
	world = engine.world;

	st =  new stone (700,320);
    ru = new rubber(920,320,70,700);
    ha = new hammer(700,240);
    ground= new ground(600,height,1200,20)


	Engine.run(engine);
  
}


function draw() {
  background(0);
ground.display();
ru.display();
st.display();
ha.display();
  

 
}



