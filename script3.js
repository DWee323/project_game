//RESIZE, DEBOUNCE idk how the fuck im supposed to make this work

// console.dir();  -> displays more of an object style. There's a bunch of console.X(); it's a way of showing -> 아마 MDN 보고서 다른 거 쓰고 싶을거야

//using _underscore_ for variable names
//using camelCase for function names
//because they are fucking confusing although VS assigns different colors 

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// coordinate values
var left_top_x = 0;
var left_top_y = 0;
var left_bottom_x = 0;
var left_bottom_y = canvas.height;
var right_top_x = canvas.width;
var right_top_y = 0;
var rigth_bottom_x = canvas.width;
var rigth_bottom_y = canvas.height;
var buffer_player = 20;


/*
setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.
setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously.
*/
var rain_speed = 300;

//player's beginning coordinate HALF CIRCLE
var rain_radius = 10;
var rain_x = left_top_x + buffer_player + rain_radius;
var rain_y = left_top_y + buffer_player + rain_radius;
console.log(rain_x, rain_y);

const drawRain = (x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, rain_radius, 0, 2*Math.PI); //line is there, but invisible
   // ctx.closePath();
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.fillStyle = "#a9dacb"; //pale blue
    ctx.fill();
};

drawRain(rain_x, rain_y);

/*
var myRainTimer = setInterval(rainFall, rain_speed);
const rainFall = () => {

};
*/






// other values
var player_speed = 5;

//player's beginning coordinate HALF CIRCLE
var player_radius = 30;
var player_x = left_bottom_x + buffer_player + player_radius;
var player_y = left_bottom_y - buffer_player - player_radius;

//no I'm fucking ditching playerPath (and going with the drawPlayer)

const drawPlayer = (x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, player_radius, 0, 1*Math.PI); //line is there, but invisible
    ctx.closePath();
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.fillStyle = "#b2aba9"; //ash grey
    ctx.fill();
};

const step = () => {
   // console.log("inside step");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer(player_x, player_y);
    //drawObstacle();
    drawRain(rain_x, rain_y);
    window.requestAnimationFrame(step); //when you are done wih ALL the other stuff, call yourself again: hence this line resides at the last within the function
    //this function already holds the time interval in which the screen refreshes - it figures out by the computer 상태 
}

const onKeyDown = (event) => {
    //console.log(event);
    let key = event.key;
    if (key === "ArrowUp"){       
       player_y += -1 * player_speed;
        console.log("pressed up", player_y);
       } //if 를 여러변 쌓으면 여러 키 동시에 누르는 행위 입력으로 가능
    if (key === "ArrowDown"){        
        player_y += 1 * player_speed;
        console.log("pressed down", player_y);
    }
    if (key === "ArrowLeft"){        
        player_x += -1 * player_speed;
        console.log("pressed left", player_x);
    }
    if (key === "ArrowRight"){       
        player_x += 1 * player_speed;
        console.log("pressed right", player_x); 
    }
};

document.addEventListener("keydown", onKeyDown);//keydown, keyup, keypress = down+up

window.requestAnimationFrame(step);

console.log();