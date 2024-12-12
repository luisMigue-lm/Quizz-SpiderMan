let contSpiderGwen = 0;
let contSpiderPunk = 0;
let contMilesMorales = 0;
let contPorcoAranha = 0;
let contAll;
let pag;

let radios = document.querySelectorAll('input[type="radio"]');

function calcularPontuacao() {
  radios.forEach((resp) => {
    if (resp.checked) {
      if (resp.value == "punk-aranha") {
        contSpiderPunk++;
      } else if (resp.value == "spider-gwen") {
        contSpiderGwen++;
      } else if (resp.value == "miles-morales") {
        contMilesMorales++;
      } else if (resp.value == "porco-aranha") {
        contPorcoAranha++;
      }
    }
  });

  contAll =
    contMilesMorales + contPorcoAranha + contSpiderGwen + contSpiderPunk;

  if (contAll == 10) {
    resultado();
    salvarDados();
    temporizador();
  
    } else {
        alert("Por favor, responda todas as 10 questões antes de continuar!");
    }
}

function resultado() {
  let maior = Math.max(
    contMilesMorales,
    contSpiderGwen,
    contSpiderPunk,
    contPorcoAranha
  );

  let empate = [];

  if (contMilesMorales === maior) {
    empate.push("miles-morales");
  }

  if (contSpiderGwen === maior) {
    empate.push("spider-gwen");
  }

  if (contSpiderPunk === maior) {
    empate.push("spider-punk");
  }

  if (contPorcoAranha === maior) {
    empate.push("porco-aranha");
  }

  if (empate.length > 1) {
    pag = "spider-man2099";

  } else {
    pag = empate[0];

  }
}

function temporizador() {
  let contador = 5;
  const interval = setInterval(() => {
    document.getElementById(
      "resultado"
    ).innerHTML = `Seu resultado sairá em: ${contador}`;
    contador--;

    if (contador < 0) {
      clearInterval(interval);
      window.open("/paginas/" + pag + ".html");
    }
  }, 1000);
}

function salvarDados() {
  localStorage.setItem("punk-aranha", contSpiderPunk);
  localStorage.setItem("spider-gwen", contSpiderGwen);
  localStorage.setItem("miles-morales", contMilesMorales);
  localStorage.setItem("porco-aranha", contPorcoAranha);
}