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
    if ((tableroLogico[combinacionGanadora[0][0]] === "X") && (tableroLogico[combinacionGanadora[0][1]] === "X") && (tableroLogico[combinacionGanadora[0][2]] === "X")){
        window.location.href= "/pages/winners.html" 
} else if  ((tableroLogico[combinacionGanadora[0][0]] === "O") && (tableroLogico[combinacionGanadora[0][1]] === "O") && (tableroLogico[combinacionGanadora[0][2]] === "O")){
        window.location.href= "/pages/winners.html"
        //Combi 2
}else if  ((tableroLogico[combinacionGanadora[1][0]] === "O") && (tableroLogico[combinacionGanadora[1][1]] === "O") && (tableroLogico[combinacionGanadora[1][2]] === "O")){
    window.location.href= "/pages/winners.html"
}else if ((tableroLogico[combinacionGanadora[1][0]] === "X") && (tableroLogico[combinacionGanadora[1][1]] === "X") && (tableroLogico[combinacionGanadora[1][2]] === "X")){
    window.location.href= "/pages/winners.html"
        //Combi 3
}else if ((tableroLogico[combinacionGanadora[2][0]] === "O") && (tableroLogico[combinacionGanadora[2][1]] === "O") && (tableroLogico[combinacionGanadora[2][2]] === "O")){
    window.location.href= "/pages/winners.html"
}else if ((tableroLogico[combinacionGanadora[2][0]] === "X") && (tableroLogico[combinacionGanadora[2][1]] === "X") && (tableroLogico[combinacionGanadora[2][2]] === "X")){
    window.location.href= "/pages/winners.html"
        //Combi 4
}else if ((tableroLogico[combinacionGanadora[3][0]] === "O") && (tableroLogico[combinacionGanadora[3][1]] === "O") && (tableroLogico[combinacionGanadora[3][2]] === "O")){
    window.location.href= "/pages/winners.html"
}else if ((tableroLogico[combinacionGanadora[3][0]] === "X") && (tableroLogico[combinacionGanadora[3][1]] === "X") && (tableroLogico[combinacionGanadora[3][2]] === "X")){
    window.location.href= "/pages/winners.html"
        //Combi 5
}else if ((tableroLogico[combinacionGanadora[4][0]] === "O") && (tableroLogico[combinacionGanadora[4][1]] === "O") && (tableroLogico[combinacionGanadora[4][2]] === "O")){
    window.location.href= "/pages/winners.html"
}else if ((tableroLogico[combinacionGanadora[4][0]] === "X") && (tableroLogico[combinacionGanadora[4][1]] === "X") && (tableroLogico[combinacionGanadora[4][2]] === "X")){
    window.location.href= "/pages/winners.html"
    //Combi 6
}else if ((tableroLogico[combinacionGanadora[5][0]] === "O") && (tableroLogico[combinacionGanadora[5][1]] === "O") && (tableroLogico[combinacionGanadora[5][2]] === "O")){
    window.location.href= "/pages/winners.html"
}else if ((tableroLogico[combinacionGanadora[5][0]] === "X") && (tableroLogico[combinacionGanadora[5][1]] === "X") && (tableroLogico[combinacionGanadora[5][2]] === "X")){
    window.location.href= "/pages/winners.html"
    //Combi 7
}else if ((tableroLogico[combinacionGanadora[6][0]] === "O") && (tableroLogico[combinacionGanadora[6][1]] === "O") && (tableroLogico[combinacionGanadora[6][2]] === "O")){
    window.location.href= "/pages/winners.html"
}else if ((tableroLogico[combinacionGanadora[6][0]] === "X") && (tableroLogico[combinacionGanadora[6][1]] === "X") && (tableroLogico[combinacionGanadora[6][2]] === "X")){
    window.location.href= "/pages/winners.html"
    //Combi 8
}else if ((tableroLogico[combinacionGanadora[7][0]] === "O") && (tableroLogico[combinacionGanadora[7][1]] === "O") && (tableroLogico[combinacionGanadora[7][2]] === "O")){
    window.location.href= "/pages/winners.html"
}else if((tableroLogico[combinacionGanadora[7][0]] === "X") && (tableroLogico[combinacionGanadora[7][1]] === "X") && (tableroLogico[combinacionGanadora[7][2]] === "X")){
    window.location.href= "/pages/winners.html"
}
}
// Resetear jugadores y partida
const resetPlayers = () => {
    sessionStorage.clear();
    setTimeout(()=>{
        window.open("/pages/players.html", "_self");
},500);
};

//Resetear partida
const resetGame = () => {
    window.location.reload();
};

// Pintar el tablero con X y O
tablero.map((casilla) => {
  casilla.addEventListener("click", () => {
    //Compruebo que SI puedo pintar la X o la O.
    if (casilla.innerHTML === "" && (fichaP1 > 0 || fichaP2 > 0)) {
      //Aqui PINTO el simbolo, dependiendo del turno
      casilla.innerHTML = turno ? "X" : "O";
      //Restamos una ficha al jugador
      turno ? fichaP1-- : fichaP2--;
    //   guardo la posición que ocupa en mi tablero lógico
      tableroLogico[casilla.id] = turno ? "X" : "O";
      comprueboGanador();
      //Cambiamos de turno
      turno = !turno;
    }
  });
});

let players = {
  player1: "",
  player2: "",
};

//Capturo los input por su className...

let inputs = Array.from(document.getElementsByClassName("inputPlayers"));

//Mapeo los inputs de los jugadores..
inputs.map((elemento) => {
  elemento.addEventListener("input", () => {
    //Según vamos escribiendo en el input, iremos actualizando el objeto players..

    for (let jugador in players) {
      if (elemento.name == jugador) {
        //Ahora es cuando meto el valor en el objeto
        players[jugador] = elemento.value;

        console.log(players);
      }
    }
  });
});

//Creo la función que guardará en sessionStorage y después cambiará de pantalla

const nuevaPantalla = () => {
  //Si no tienen valor no continua

  if (players.player1 === "" || players.player2 === "") {
    return;
  }

  sessionStorage.setItem("playersInfo", JSON.stringify(players));

  setTimeout(() => {
    //Abre a la ventana del tablero
    window.open("/pages/tablero.html", "_self");
  }, 500);
};
