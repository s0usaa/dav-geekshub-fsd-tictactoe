let ganador = sessionStorage.getItem("ganador");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let dataSession = JSON.parse(sessionStorage.getItem("playersInfo"));

if(ganador == "X"){
    player1.innerHTML = `${dataSession.player1}`;
}else{
    player2.innerHTML = `${dataSession.player2}`;
}