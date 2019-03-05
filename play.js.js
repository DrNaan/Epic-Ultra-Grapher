// David's SoftDev class. 
//Activities: 1) change color of line and location of box 2) connect the line to the box
//      3) uncomment the loop - discuss difference with python. 4) fix code with gradient
//      5) play 
// when window loads, a canvas will be created

window.onload = function() {

 var canvas = document.getElementById("canvas"),
 ctx = canvas.getContext("2d"),
 width = canvas.width = window.innerWidth,
 height = canvas.height = window.innerHeight;

     // trying to add a gradient effect to the lines

     var gradient=ctx.createLinearGradient(0,0,800,800);

     gradient.addColorStop("0.4","pink");
     gradient.addColorStop("0.8","purple");
     gradient.addColorStop("1.0","orange");

     ctx.lineWidth=5;

     // originally we just filled the rect            

     ctx.fillRect(0,0,width,height);

     ctx.fillStyle = "#FF0000";
     ctx.fillRect(600,400,150,75);

     ctx.strokeStyle = "blue";
     ctx.moveTo(0,0);
     ctx.lineTo(200,100);
     ctx.stroke();

     // random lines drawn (100 of them)

     // for(var i=0; i<100; i+=1)  {
     //      ctx.beginPath();
     //      ctx.moveTo(Math.random()*width, Math.random()*height);
     //      ctx.lineTo(Math.random()*10, Math.random()*200);
     //      //missing code here

     // }  // end for loop


}  // end onload function
