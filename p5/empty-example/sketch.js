var diam1=20;
var posx=500;
var posy=500;
var size1=20;
var round2=10;
var round1=100;

function setup() {
 createCanvas(500, 500); 
	
}

function draw() {
 background("#ADD8E6");
 fill("#ffffff");  
 ellipse(random(posx),random(posy),random(diam1),random(diam1)); 
 fill("#ff0000");
 rect(100,300,size1,size1);
triangle(200,250,300,300,100,300);
fill("#ffffff");
ellipse(round2,round2,round1,round1); 
 fill("#ff0000");
text("HELP ME",width-500,height-50);

}
function mouseClicked(){ 
	if(size1<=200){
	size1=size1+5;
	}
	round2=round2+4;
	round1=round1+4;





}