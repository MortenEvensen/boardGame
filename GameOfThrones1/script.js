var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var circleX = 1125;
var circleY = 725;

var myVar = setTimeout(draw(), 3000);



function draw() {

    ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.beginPath();
ctx.arc(circleX, circleY, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.rect(1050, 650, 150, 150);
ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("1", 1055,675);
ctx.stroke();

ctx.beginPath();
ctx.rect(900, 650, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("2", 1055-150,675);
ctx.stroke();

ctx.beginPath();
ctx.rect(750, 650, 150, 150);
       ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("3", 1055-150-150,675);
    ctx.rect(800, 700, 50, 50)
ctx.stroke();

ctx.beginPath();
ctx.rect(600, 650, 150, 150);
       ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("4", 1055-150-150-150,675);
ctx.stroke();

ctx.beginPath();
ctx.rect(450, 650, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("5", 1055-150-150-150-150,675);
ctx.stroke();

ctx.beginPath();
ctx.rect(300, 650, 150, 150);
      ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("6", 1055-150-150-150-150-150,675);
ctx.stroke();

ctx.beginPath();
ctx.rect(150, 650, 150, 150);
      ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("7", 1055-150-150-150-150-150-150,675);
ctx.stroke();

ctx.beginPath();
ctx.rect(0, 650, 150, 150);
      ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("8", 1055-150-150-150-150-150-150-150,675);
ctx.stroke();

    // Line 2
    
ctx.beginPath();
ctx.rect(1050, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("9", 1055,675-150);
ctx.stroke();

ctx.beginPath();
ctx.rect(900, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("10", 1055-150,675-150);
ctx.stroke();

ctx.beginPath();
ctx.rect(750, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("11", 1055-150-150,675-150);
ctx.stroke();

ctx.beginPath();
ctx.rect(600, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("12", 1055-150-150-150,675-150);
ctx.stroke();

ctx.beginPath();
ctx.rect(450, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("13", 1055-150-150-150-150,675-150);
ctx.stroke();

ctx.beginPath();
ctx.rect(300, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("14", 1055-150-150-150-150-150,675-150);
ctx.stroke();

ctx.beginPath();
ctx.rect(150, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("15", 1055-150-150-150-150-150-150,675-150);
ctx.stroke();

ctx.beginPath();
ctx.rect(0, 500, 150, 150);
    ctx.font = "20px Verdana";
    ctx.strokeStyle = "#000000";
    ctx.strokeText("16", 1055-150-150-150-150-150-150-150,675-150);
ctx.stroke();

    }


function delay () {
    setTimeout ("draw()", 1000);
}

  function clickolini() {
    console.log(circleX);
    console.log(circleY);
      console.log(trap);
    if (circleX === 975 - 150 && trap.length - 1 === trap) {
        draw();
        setTimeout(()=> {document.getElementById("message").innerHTML = "<p>It's a trap! Move back one square</p>";
        alert("It's a trap! Move back one square")
        },200);
    } 
    
    if (circleX >= 76) {
        circleX = circleX - 150;
        draw();
        var audio = document.getElementById("myAudio");
        audio.play();
        }
    else if (circleX === 75) {
        //console.log(circleX);
        circleX = 1125;
        circleY = circleY - 150;
        draw();
        var audio = document.getElementById("myAudio");
        audio.play();
        }   
}



var trapo = [];
var diceNumber = "";

function dice() { 
var dico = Math.floor(Math.random() * 6) + 1;
document.getElementById("dice").innerHTML = "<p>" + dico + "</p>";
    
    for (let i = 0; i < dico; i++) {
        
       
        var diceNumber = i + 1;
        trapo[i] = trapo;
        //trapo.push();
        console.log("Hva: " + dico);
        console.log("trap0: " + trapo.length)
        
    
        console.log(trapo.length);
        setTimeout(()=>{
            
            clickolini(); 
            
            
            document.getElementById("counter").innerHTML = "<p>" + (i+1) + "</p>";
            },i * 500)
            
    /*if (circleX >= 76) {
        circleX = circleX - (150 * dico);
        draw();
        }
    else if (circleX < 75) {
        //console.log(circleX);
        circleX = 1125;
        circleY = circleY - 150;
        draw();
        }   */
                 }
  function clickolini() {
      
    if ( circleX === 975 && trapo.length === diceNumber) {
        //draw();
        console.log("jaha: " + trapo.length);
         console.log("jaha2: " + diceNumber);
        setTimeout(()=> {document.getElementById("message").innerHTML = "<p>It's a trap! Move back one square</p>";
        //alert("It's a trap! Move back one square");
        circleX = circleX + 150;
        draw();
        },600);
        
    } 
    
     if (circleX >= 76) {
        circleX = circleX - 150;
        draw();
        var audio = document.getElementById("myAudio");
        audio.play();
        
        }
    else if (circleX === 75) {
        //console.log(circleX);
        circleX = 1125;
        circleY = circleY - 150;
        draw();
        var audio = document.getElementById("myAudio");
        audio.play();
        }   
}
}

var trap1 = function() {
    if (circleX === circleX - 300 && circleY === 725) {
        circleX = circleX - 150;
    }
}


function hei() {
            circleX = 1125;
            circleY = 725;
    draw();
        }
