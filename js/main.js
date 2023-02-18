let turno = true;
let fichaP1 = 3;
let fichaP2 = 3;
let tablero = Array.from(document.getElementsByClassName("cell"));



let tableroLogico = ["", "", "", "", "", "", "", "", ""];

let combinacionGanadora = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const comprueboGanador = () => {
        //Combi 1
        if ((tableroLogico[0] === tableroLogico[1]) && (tableroLogico[1] === tableroLogico[2]) && tableroLogico[0] !== ""){
          turno ? sessionStorage.setItem("ganador", "x"): sessionStorage.setItem("ganador", "o");
          window.open("../pages/winners.html","_self");
        //Combi 2
        }else if ((tableroLogico[3] === tableroLogico[4]) && (tableroLogico[3] === tableroLogico[5]) && tableroLogico[3] !== ""){
          turno ? sessionStorage.setItem("ganador", "x"): sessionStorage.setItem("ganador", "o");
          window.open("../pages/winners.html","_self");
        //Combi 3
        }else if ((tableroLogico[6] === tableroLogico[7]) && (tableroLogico[6] === tableroLogico[8] && tableroLogico[6] !== "")){
          turno ? sessionStorage.setItem("ganador", "x"): sessionStorage.setItem("ganador", "o");
          window.open("../pages/winners.html","_self");
        //Combi 4
        }else if ((tableroLogico[0] === tableroLogico[3]) && (tableroLogico[0] === tableroLogico[6]) && tableroLogico[0] !== ""){
          turno ? sessionStorage.setItem("ganador", "x"): sessionStorage.setItem("ganador", "o");
          window.open("../pages/winners.html","_self");
        //Combi 5
        }else if ((tableroLogico[1] === tableroLogico[4]) && (tableroLogico[1] === tableroLogico[7]) && tableroLogico[1] !== ""){
          turno ? sessionStorage.setItem("ganador", "x"): sessionStorage.setItem("ganador", "o");
          window.open("../pages/winners.html","_self");
        //Combi 6
        }else if ((tableroLogico[2] === tableroLogico[5]) && (tableroLogico[2] === tableroLogico[8]) && tableroLogico[2] !== ""){
          turno ? sessionStorage.setItem("ganador", "x"): sessionStorage.setItem("ganador", "o");
          window.open("../pages/winners.html","_self");
        //Combi 7
        }else if ((tableroLogico[0] === tableroLogico[4]) && (tableroLogico[0] === tableroLogico[8]) && tableroLogico[0] !== ""){
          turno ? sessionStorage.setItem("ganador", "x"): sessionStorage.setItem("ganador", "o");
          window.open("../pages/winners.html","_self");
        //Combi 8
        }else if((tableroLogico[2] === tableroLogico[4]) && (tableroLogico[2] === tableroLogico[6]) && tableroLogico[2] !== ""){
          turno ? sessionStorage.setItem("ganador", "x"): sessionStorage.setItem("ganador", "o");
          window.open("../pages/winners.html","_self");
        }
}

// Resetear jugadores y partida
const resetPlayers = () => {
    sessionStorage.clear();
    setTimeout(()=>{
        window.open("../pages/players.html", "_self");
},500);
};

// Resetear partida
const resetGame = () => {
    window.location.reload();
};

// Pintar el tablero
tablero.map((casilla) => {
  casilla.addEventListener("click", () => {
    if (casilla.innerHTML === "" && (fichaP1 > 0 || fichaP2 > 0)) {
      //Aqui PINTO el simbolo, dependiendo del turno
      casilla.innerHTML = turno ? "x" : "o";
      //Restamos una ficha al jugador
      turno ? fichaP1-- : fichaP2--;
      document.getElementById("player1Text").innerHTML = `tokens left ${fichaP1}`;
      document.getElementById("player2Text").innerHTML = `tokens left ${fichaP2}`;
    //   guardo la posición que ocupa en mi tablero lógico
      tableroLogico[casilla.id] = turno ? "x" : "o";
      comprueboGanador();
      //Cambiamos de turno
      turno = !turno;
    }else if (casilla.innerHTML === "x" && fichaP1 === 0 && turno == true){
      casilla.innerHTML = "";
      tableroLogico[casilla.id] = "";
      fichaP1++;
      document.getElementById("player1Text").innerHTML = `tokens left ${fichaP1}`;
    }else if (casilla.innerHTML === "o" && fichaP2 === 0 && turno == false){
      casilla.innerHTML = "";
      tableroLogico[casilla.id] = "";
      fichaP2++;
      document.getElementById("player2Text").innerHTML = `tokens left ${fichaP2}`;
}})
})

let players = {
  player1: "",
  player2: "",
};

//Capturo los input por su className...
let inputs = Array.from(document.getElementsByClassName("inputPlayers"));
//Mapeo los inputs de los jugadores..
inputs.map((elemento) => {
  elemento.addEventListener("input", () => {
    for (let jugador in players) {
      if (elemento.name == jugador) {
        //Ahora es cuando meto el valor en el objeto
        players[jugador] = elemento.value;
      }
    }
  });
});

//Creo la función que guardará en sessionStorage y después cambiará de pantalla
const nuevaPantalla = () => {
  if (players.player1 === "" || players.player2 === "") {
    return;
  }
  sessionStorage.setItem("playersInfo", JSON.stringify(players));
  setTimeout(() => {
    window.open("../pages/tablero.html", "_self");
  }, 500);
};
