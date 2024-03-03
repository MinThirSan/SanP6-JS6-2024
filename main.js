//Here is where my "global variables" begin-----------------------------------------------------------------------------------
let score = 0;
let count = 0;
let timer = setInterval(moveIt, 2000);

//Here is basic statements for my program to run******************************************************************************
balloon.addEventListener('click', clickIt);

//Here is where my functions begin...............................................................................................
function moveIt() {
    balloon.style.height = "160px"; //This will "shrink the height of the balloon to 160 after 1000ms have run (see timer);"
    balloon.style.left = Math.random()*800 + 'px';
    balloon.style.top = Math.random()*600 + 'px';
    count++; //add 1 to count each time timer runs moveIt. Time will run moveIt every 1000ms. So.. every 1000ms count will increase by 1.
    if(count == 20) {
        alert("GAME OVER");
        clearInterval(timer);
    }
}

function clickIt() {
    score++
    scoreBox.innerHTML = "Score "+score;
    balloon.style.height = "1px";
}