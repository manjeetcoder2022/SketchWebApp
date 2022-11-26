function preload(){

}

function setup(){
  
    canvas= createCanvas(350,300)
    canvas.center()
    background('white')
   
}
function draw(){
    if(mouseIsPressed){
      
        mouse_x= pmouseX
        mouse_y= pmouseY
        fill(0,0,47)
        stroke(0,0,47)
        rect(mouse_x,mouse_y,50,50)
    }

}
function Clear2(){
    console.log("hh")
    background('white')
}
timer()
function timer(){
    setTimeout(function(){
        for(var i =0;i<=20;i++){
            document.getElementById("timer").innerHTML="Timer: " + i
            
        }
    },2000)
   
}