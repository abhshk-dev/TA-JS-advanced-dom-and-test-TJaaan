let canvas=document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
console.log(canvas);

var c=canvas.getContext('2d');
/*
c.fillStyle="#fff1af"

c.fillRect(100,100,100,100);

// lines 

c.beginPath();
c.moveTo(50,300);
c.moveTo(100,600);
c.lineTo(300,100);
c.lineTo(400,200);
c.strokeStyle="#ffffff"
c.stroke();

//Arc or circle
for(let i=0;i<3;i++){
    var x=Math.random()* window.innerWidth;
    var y=Math.random()*window.innerHeight; 
    c.beginPath();
    c.arc(x,y,30,0,Math.PI *2,false);
    c.strokeStyle='red';
    c.stroke();
}*/




var x=Math.random()*innerWidth;

var y=Math.random()*innerHeight;
var dy=(Math.random() -0.5)*10;
var dx=(Math.random()-0.5)*10;
var radius=40;
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    c.beginPath();
    c.arc(x,y,radius,0,Math.PI *2,false);
    c.strokeStyle='red';
    c.stroke();

    

    if(x+radius>innerWidth || x-radius<0){
        dx=-dx;
    }
    if(y+radius >innerHeight || y-radius<0){
        dy=-dy;
    }
   
    x+=dx;
    y+=dy;
}

animate();