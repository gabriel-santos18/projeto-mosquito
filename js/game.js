
function start() {
  var dificulty = document.getElementById("select-dificulty");

  if (dificulty.value == "selecione") {
    alert("Selecione uma dificuldade antes de jogar.");
  } else if (dificulty.value == "normal") {
    window.location.href = "app.html?" + dificulty.value;
  } else if (dificulty.value == "dificil") {
    window.location.href = "app.html?" + dificulty.value;
  } else if (dificulty.value == "chuck") {
    window.location.href = "app.html?" + dificulty.value;
  }
}

var vidas = 3;
var clicou = false;

function game(tempo) {
  var time = 15;
  document.getElementById("time").textContent = time;

  setInterval(function () {
    time--;
    document.getElementById("time").textContent = time;

    if (time == 0 && vidas > 0) {
      window.location.href = "venceu.html";
    }

  }, 1000);

  setInterval(function () {
    var rnd = Math.floor(Math.random() * (10 - 1) + 1);
    document.getElementById("mosquito0" + rnd).style.display = "block";
    setTimeout(function () {
      document.getElementById("mosquito0" + rnd).style.display = "none";
      checarClicou();
      clicou = false;
    }, tempo);
  }, tempo);
}

function clicouMosquito(mosquito) {
  document.getElementById(mosquito).style.display = "none";
  clicou = true;
}

function checarClicou() {
  if (clicou == false && vidas == 3) {
    document.getElementById("coracao03").src = "assets/coracao_vazio.png";
    vidas--;
  } else if (clicou == false && vidas == 2) {
    document.getElementById("coracao02").src = "assets/coracao_vazio.png";
    vidas--;
  } else if (clicou == false && vidas == 1) {
    document.getElementById("coracao01").src = "assets/coracao_vazio.png";
    vidas--;
  }

  if (vidas == 0) {
    window.location.href = "perdeu.html";
  }
}