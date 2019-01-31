document.getElementById('player').addEventListener("mouseover", sumPoints);

var points = 0;
var time = 60;
var need = 30;

function sumPoints()
{
    points++;
    document.getElementById("points").innerHTML = "Puntos: <b>" +
    points + "/" + need + " </b>";
    randNum = Math.round(Math.random()*500);
    randNum2 = Math.round(Math.random()*500);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
    if (points == 30)
    {
        alert("Ganaste");
        time = 60;
        points = 0;
    }
}

function countTime()
{
    time--;
    document.getElementById("time").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: " + time;
    if (time == 0)
    {
        alert("Perdiste amigo!");
        time = 60;
        points = 0;
    }
}

setInterval(countTime, 1000);