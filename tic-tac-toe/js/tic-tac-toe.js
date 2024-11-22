var module = (function () {
  var selectedSquares = [];
  var isOver = false;
  var playerX = {
    name: "",
    gameResults: [],
    sign: "X"
  };
  var playerO = {
    name: "",
    gameResults: [],
    sign: "O"
  };
  var currentPlayer;
  var getFirstPlayer = function () {
    var randomNumber = Math.floor(Math.random() * 10);
    var player = playerX;
    if (randomNumber % 2 === 0) {
      player = playerO;
    }
    currentPlayer = player;
  };
  var initGame = function () {
    if (document.getElementById("display") != null) {
      document.getElementById("display").remove();
    }
    selectedSquares = [];
    isOver = false;
    if (playerX.name === "") {
      getUserInfo();
    }
    if (playerO.name === "") {
      getUserInfo();
    }
    getFirstPlayer();
    generateGameBoard();
    nextRound();
  };
  var getUserInfo = function () {
    playerX.name = prompt("Please enter the name of X's player: ");
    playerO.name = prompt("Please enter the name of O's player: ");
    if (playerX.name === playerO.name) {
      alert("Player O's name cannot be the same as player X's name.")
      getUserInfo();
    }
  };
  var generateGameBoard = function () {
    if (document.getElementById("gameBoard") == null) {
      var gameBoard = document.createElement("div");
      gameBoard.className = "gameBoard";
      gameBoard.id = "gameBoard";
      document.body.appendChild(gameBoard);
    }
    if (document.getElementById("table") == null) {
      var table = document.createElement("table");
      table.id = "table";
      gameBoard.appendChild(table);
    }
    if (document.getElementById("line1") == null) {
      var line1 = document.createElement("tr");
      line1.id = "line1";
      table.appendChild(line1);
    }
    if (document.getElementById("1") == null) {
      var square1 = document.createElement("td");
      square1.className = "square";
      square1.id = "1";
      square1.innerHTML = "";
      square1.addEventListener("click", selectSquare, false);
      square1.style.color = "#f8f8f8";
      square1.style.fontSize = "50px";
      square1.style.textAlign = "center";
      line1.appendChild(square1);
    } else {
      var square1 = document.getElementById("1");
      square1.innerHTML = "";
      square1.style.color = "#f8f8f8";
      square1.style.fontSize = "50px";
      square1.style.textAlign = "center";
    }
    if (document.getElementById("2") == null) {
      var squareLeftRight = document.createElement("td");
      squareLeftRight.className = "square leftRight";
      squareLeftRight.id = "2";
      squareLeftRight.innerHTML = "";
      squareLeftRight.addEventListener("click", selectSquare, false);
      squareLeftRight.style.color = "#f8f8f8";
      squareLeftRight.style.fontSize = "50px";
      squareLeftRight.style.textAlign = "center";
      line1.appendChild(squareLeftRight);
    } else {
      var squareLeftRight = document.getElementById("2");
      squareLeftRight.innerHTML = "";
      squareLeftRight.style.color = "#f8f8f8";
      squareLeftRight.style.fontSize = "50px";
      squareLeftRight.style.textAlign = "center";
    }
    if (document.getElementById("3") == null) {
      var square2 = document.createElement("td");
      square2.className = "square";
      square2.id = "3";
      square2.innerHTML = "";
      square2.addEventListener("click", selectSquare, false);
      square2.style.color = "#f8f8f8";
      square2.style.fontSize = "50px";
      square2.style.textAlign = "center";
      line1.appendChild(square2);
    } else {
      var square2 = document.getElementById("3");
      square2.innerHTML = "";
      square2.style.color = "#f8f8f8";
      square2.style.fontSize = "50px";
      square2.style.textAlign = "center";
    }
    if (document.getElementById("line2") == null) {
      var line2 = document.createElement("tr");
      line2.id = "line2";
      table.appendChild(line2);
    }
    if (document.getElementById("4") == null) {
      var squareTopBottom1 = document.createElement("td");
      squareTopBottom1.className = "square topBottom";
      squareTopBottom1.id = "4";
      squareTopBottom1.innerHTML = "";
      squareTopBottom1.addEventListener("click", selectSquare, false);
      squareTopBottom1.style.color = "#f8f8f8";
      squareTopBottom1.style.fontSize = "50px";
      squareTopBottom1.style.textAlign = "center";
      line2.appendChild(squareTopBottom1);
    } else {
      var squareTopBottom1 = document.getElementById("4");
      squareTopBottom1.innerHTML = "";
      squareTopBottom1.style.color = "#f8f8f8";
      squareTopBottom1.style.fontSize = "50px";
      squareTopBottom1.style.textAlign = "center";
    }
    if (document.getElementById("5") == null) {
      var squareLeftRightTopBottom = document.createElement("td");
      squareLeftRightTopBottom.className = "square leftRight topBottom";
      squareLeftRightTopBottom.id = "5";
      squareLeftRightTopBottom.innerHTML = "";
      squareLeftRightTopBottom.addEventListener("click", selectSquare, false);
      squareLeftRightTopBottom.style.color = "#f8f8f8";
      squareLeftRightTopBottom.style.fontSize = "50px";
      squareLeftRightTopBottom.style.textAlign = "center";
      line2.appendChild(squareLeftRightTopBottom);
    } else {
      var squareLeftRightTopBottom = document.getElementById("5");
      squareLeftRightTopBottom.innerHTML = "";
      squareLeftRightTopBottom.style.color = "#f8f8f8";
      squareLeftRightTopBottom.style.fontSize = "50px";
      squareLeftRightTopBottom.style.textAlign = "center";
    }
    if (document.getElementById("6") == null) {
      var squareTopBottom2 = document.createElement("td");
      squareTopBottom2.className = "square topBottom";
      squareTopBottom2.id = "6";
      squareTopBottom2.innerHTML = "";
      squareTopBottom2.addEventListener("click", selectSquare, false);
      squareTopBottom2.style.color = "#f8f8f8";
      squareTopBottom2.style.fontSize = "50px";
      squareTopBottom2.style.textAlign = "center";
      line2.appendChild(squareTopBottom2);
    } else {
      var squareTopBottom2 = document.getElementById("6");
      squareTopBottom2.innerHTML = "";
      squareTopBottom2.style.color = "#f8f8f8";
      squareTopBottom2.style.fontSize = "50px";
      squareTopBottom2.style.textAlign = "center";
    }
    if (document.getElementById("line3") == null) {
      var line3 = document.createElement("tr");
      line3.id = "line3";
      table.appendChild(line3);
    }
    if (document.getElementById("7") == null) {
      var square3 = document.createElement("td");
      square3.className = "square";
      square3.id = "7";
      square3.innerHTML = "";
      square3.addEventListener("click", selectSquare, false);
      square3.style.color = "#f8f8f8";
      square3.style.fontSize = "50px";
      square3.style.textAlign = "center";
      line3.appendChild(square3);
    } else {
      var square3 = document.getElementById("7");
      square3.innerHTML = "";
      square3.style.color = "#f8f8f8";
      square3.style.fontSize = "50px";
      square3.style.textAlign = "center";
    }
    if (document.getElementById("8") == null) {
      var squareLeftRight2 = document.createElement("td");
      squareLeftRight2.className = "square leftRight";
      squareLeftRight2.id = "8";
      squareLeftRight2.innerHTML = "";
      squareLeftRight2.addEventListener("click", selectSquare, false);
      squareLeftRight2.style.color = "#f8f8f8";
      squareLeftRight2.style.fontSize = "50px";
      squareLeftRight2.style.textAlign = "center";
      line3.appendChild(squareLeftRight2);
    } else {
      var squareLeftRight2 = document.getElementById("8");
      squareLeftRight2.innerHTML = "";
      squareLeftRight2.style.color = "#f8f8f8";
      squareLeftRight2.style.fontSize = "50px";
      squareLeftRight2.style.textAlign = "center";
    }
    if (document.getElementById("9") == null) {
      var square4 = document.createElement("td");
      square4.className = "square";
      square4.id = "9";
      square4.innerHTML = "";
      square4.addEventListener("click", selectSquare, false);
      square4.style.color = "#f8f8f8";
      square4.style.fontSize = "50px";
      square4.style.textAlign = "center";
      line3.appendChild(square4);
    } else {
      var square4 = document.getElementById("9");
      square4.innerHTML = "";
      square4.style.color = "#f8f8f8";
      square4.style.fontSize = "50px";
      square4.style.textAlign = "center";
    }
    if (document.getElementById("currentPlayer") == null) {
      var currentPlayerDiv = document.createElement("div");
      currentPlayerDiv.className = "currentPlayer";
      currentPlayerDiv.id = "currentPlayer";
      gameBoard.appendChild(currentPlayerDiv);
    }
    if (document.getElementById("playerName") == null) {
      var playerName = document.createElement("p");
      playerName.id = "playerName";
      var playerNameContent = document.createTextNode(currentPlayer.name);
      playerName.appendChild(playerNameContent);
      currentPlayerDiv.appendChild(playerName);
    } else {
      var playerName = document.getElementById("playerName");
      playerName.innerHTML = "";
    }
    if (document.getElementById("buttons") == null) {
      var buttons = document.createElement("div");
      buttons.className = "buttons";
      buttons.id = "buttons";
      gameBoard.appendChild(buttons);
    }
    if (document.getElementById("newGame") == null) {
      var newGame = document.createElement("button");
      var newGameContent = document.createTextNode("New Game");
      newGame.appendChild(newGameContent);
      newGame.addEventListener("click", initGame, false);
      newGame.id = "newGame";
      buttons.appendChild(newGame);
    }
    if (document.getElementById("displayResults") == null) {
      var display = document.createElement("button");
      var displayContent = document.createTextNode("Display Results");
      display.appendChild(displayContent);
      display.addEventListener("click", displayResults, false);
      display.id = "displayResults";
      buttons.appendChild(display);
    }
    if (document.getElementById("resetGameButton") == null) {
      var resetGameButton = document.createElement("button");
      var resetGameButtonContent = document.createTextNode("Reset Game");
      resetGameButton.appendChild(resetGameButtonContent);
      resetGameButton.addEventListener("click", resetGame, false);
      resetGameButton.id = "resetGameButton";
      buttons.appendChild(resetGameButton);
    }
  };
  var displayResults = function () {
    if (document.getElementById("display") != null) {
      document.getElementById("display").remove();
    }
    var results = document.createElement("div");
    results.className = "results";
    results.id = "display";
    gameBoard.appendChild(results);
    var tableResults = document.createElement("table");
    tableResults.id = "tableResults";
    results.appendChild(tableResults);
    var tableHeader = document.createElement("tr");
    tableHeader.id = "tableHeader";
    tableResults.appendChild(tableHeader);
    var namePlayer = document.createElement("td");
    namePlayer.innerHTML = "Player";
    tableHeader.appendChild(namePlayer);
    var wins = document.createElement("td");
    wins.innerHTML = "Wins";
    tableHeader.appendChild(wins);
    var losses = document.createElement("td");
    losses.innerHTML = "Losses";
    tableHeader.appendChild(losses);
    var ties = document.createElement("td");
    ties.innerHTML = "Ties";
    tableHeader.appendChild(ties);
    var resultPlayerX = document.createElement("tr");
    resultPlayerX.id = "resultPlayerX";
    tableResults.appendChild(resultPlayerX);
    var namePlayerX = document.createElement("td");
    namePlayerX.innerHTML = playerX.name;
    resultPlayerX.appendChild(namePlayerX);
    var winsPlayerX = document.createElement("td");
    var playerXWinCount = 0;
    for (var i = 0; i < playerX.gameResults.length; i++) {
      if (playerX.gameResults[i] == "win") {
        playerXWinCount++;
      }
    }
    winsPlayerX.innerHTML = playerXWinCount;
    resultPlayerX.appendChild(winsPlayerX);
    var lossesPlayerX = document.createElement("td");
    var playerXLossesCount = 0;
    for (var i = 0; i < playerX.gameResults.length; i++) {
      if (playerX.gameResults[i] == "lose") {
        playerXLossesCount++;
      }
    }
    lossesPlayerX.innerHTML = playerXLossesCount;
    resultPlayerX.appendChild(lossesPlayerX);
    var tiesPlayerX = document.createElement("td");
    var playerXTiesCount = 0;
    for (var i = 0; i < playerX.gameResults.length; i++) {
      if (playerX.gameResults[i] == "tie") {
        playerXTiesCount++;
      }
    }
    tiesPlayerX.innerHTML = playerXTiesCount;
    resultPlayerX.appendChild(tiesPlayerX);
    var resultPlayerO = document.createElement("tr");
    resultPlayerO.id = "resultPlayerO";
    tableResults.appendChild(resultPlayerO);
    var namePlayerO = document.createElement("td");
    namePlayerO.innerHTML = playerO.name;
    resultPlayerO.appendChild(namePlayerO);
    var winsPlayerO = document.createElement("td");
    var playerOWinCount = 0;
    for (var i = 0; i < playerO.gameResults.length; i++) {
      if (playerO.gameResults[i] == "win") {
        playerOWinCount++;
      }
    }
    winsPlayerO.innerHTML = playerOWinCount;
    resultPlayerO.appendChild(winsPlayerO);
    var lossesPlayerO = document.createElement("td");
    var playerOLossesCount = 0;
    for (var i = 0; i < playerO.gameResults.length; i++) {
      if (playerO.gameResults[i] == "lose") {
        playerOLossesCount++;
      }
    }
    lossesPlayerO.innerHTML = playerOLossesCount;
    resultPlayerO.appendChild(lossesPlayerO);
    var tiesPlayerO = document.createElement("td");
    var playerOTiesCount = 0;
    for (var i = 0; i < playerO.gameResults.length; i++) {
      if (playerO.gameResults[i] == "tie") {
        playerOTiesCount++;
      }
    }
    tiesPlayerO.innerHTML = playerOTiesCount;
    resultPlayerO.appendChild(tiesPlayerO);
  };
  var resetGame = function () {
    playerX.name = "";
    playerX.gameResults = [];
    playerO.name = "";
    playerO.gameResults = [];
    currentPlayer = null;
    document.getElementById("gameBoard").remove();
  };
  var nextRound = function () {
    document.getElementById('playerName').innerHTML = currentPlayer.name;
  };
  var selectSquare = function () {
    if (!isOver) {
      var selected = false;
      for (i = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i] == this.id) {
          alert("selected");
          selected = true;
          break;
        }
      }
      if (!selected) {
        selectedSquares.push(this.id);
        this.innerHTML = currentPlayer.sign;
        checkGameStatus();
      }
    } else {
      alert("gameOver");
    }
  };
  var checkGameStatus = function () {
    if (document.getElementById("1").innerHTML === document.getElementById("2").innerHTML
      && document.getElementById("2").innerHTML === document.getElementById("3").innerHTML
      && document.getElementById("1").innerHTML != "") {
      var sign = document.getElementById("1").innerHTML;
      var sq1 = document.getElementById("1").style.color = "#fece1a";
      var sq2 = document.getElementById("2").style.color = "#fece1a";
      var sq3 = document.getElementById("3").style.color = "#fece1a";
      isOver = true;
      addResult("1");
    }
    if (document.getElementById("1").innerHTML === document.getElementById("4").innerHTML
      && document.getElementById("4").innerHTML === document.getElementById("7").innerHTML
      && document.getElementById("1").innerHTML != "") {
      var sign = document.getElementById("1").innerHTML;
      var sq1 = document.getElementById("1").style.color = "#fece1a";
      var sq2 = document.getElementById("4").style.color = "#fece1a";
      var sq3 = document.getElementById("7").style.color = "#fece1a";
      isOver = true;
      addResult("1");
    }
    if (document.getElementById("1").innerHTML === document.getElementById("5").innerHTML
      && document.getElementById("5").innerHTML === document.getElementById("9").innerHTML
      && document.getElementById("1").innerHTML != "") {
      var sign = document.getElementById("1").innerHTML;
      var sq1 = document.getElementById("1").style.color = "#fece1a";
      var sq2 = document.getElementById("5").style.color = "#fece1a";
      var sq3 = document.getElementById("9").style.color = "#fece1a";
      isOver = true;
      addResult("1");
    }
    if (document.getElementById("4").innerHTML === document.getElementById("5").innerHTML
      && document.getElementById("5").innerHTML === document.getElementById("6").innerHTML
      && document.getElementById("4").innerHTML != "") {
      var sign = document.getElementById("4").innerHTML;
      var sq1 = document.getElementById("4").style.color = "#fece1a";
      var sq2 = document.getElementById("5").style.color = "#fece1a";
      var sq3 = document.getElementById("6").style.color = "#fece1a";
      isOver = true;
      addResult("4");
    }
    if (document.getElementById("7").innerHTML === document.getElementById("8").innerHTML
      && document.getElementById("8").innerHTML === document.getElementById("9").innerHTML
      && document.getElementById("7").innerHTML != "") {
      var sign = document.getElementById("7").innerHTML;
      var sq1 = document.getElementById("7").style.color = "#fece1a";
      var sq2 = document.getElementById("8").style.color = "#fece1a";
      var sq3 = document.getElementById("9").style.color = "#fece1a";
      isOver = true;
      addResult("7");
    }
    if (document.getElementById("2").innerHTML === document.getElementById("5").innerHTML
      && document.getElementById("5").innerHTML === document.getElementById("8").innerHTML
      && document.getElementById("2").innerHTML != "") {
      var sign = document.getElementById("2").innerHTML;
      var sq1 = document.getElementById("2").style.color = "#fece1a";
      var sq2 = document.getElementById("5").style.color = "#fece1a";
      var sq3 = document.getElementById("8").style.color = "#fece1a";
      isOver = true;
      addResult("2");
    }
    if (document.getElementById("3").innerHTML === document.getElementById("6").innerHTML
      && document.getElementById("6").innerHTML === document.getElementById("9").innerHTML
      && document.getElementById("3").innerHTML != "") {
      var sign = document.getElementById("3").innerHTML;
      var sq1 = document.getElementById("3").style.color = "#fece1a";
      var sq2 = document.getElementById("6").style.color = "#fece1a";
      var sq3 = document.getElementById("9").style.color = "#fece1a";
      isOver = true;
      addResult("3");
    }
    if (document.getElementById("3").innerHTML === document.getElementById("5").innerHTML
      && document.getElementById("5").innerHTML === document.getElementById("7").innerHTML
      && document.getElementById("3").innerHTML != "") {
      var sign = document.getElementById("3").innerHTML;
      var sq1 = document.getElementById("3").style.color = "#fece1a";
      var sq2 = document.getElementById("5").style.color = "#fece1a";
      var sq3 = document.getElementById("7").style.color = "#fece1a";
      isOver = true;
      addResult("3");
    }
    if (isOver == false) {
      if (selectedSquares.length == 9) {
        playerX.gameResults.push("tie");
        playerO.gameResults.push("tie");
        alert("Tie!")
      } else {
        swapPlayer();
        nextRound();
      }
    }
  };
  var swapPlayer = function () {
    if (currentPlayer === playerX) {
      currentPlayer = playerO;
    } else {
      currentPlayer = playerX;
    }
  };
  var addResult = function (id) {
    if (document.getElementById(id).innerHTML === playerX.sign) {
      alert(playerX.name + " won the game!");
      playerX.gameResults.push("win");
      playerO.gameResults.push("lose");
    } else if (document.getElementById(id).innerHTML === playerO.sign) {
      alert(playerO.name + " won the game!");
      playerO.gameResults.push("win");
      playerX.gameResults.push("lose");
    }
  };
  return {
    initGame: initGame
  };
}());
document.getElementById("initGame").addEventListener("click", module.initGame, false);
