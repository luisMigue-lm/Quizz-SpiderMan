let contSpiderGwen = 0;
let contSpiderPunk = 0;
let contMilesMorales = 0;
let contPorcoAranha = 0;

let radios = document.querySelectorAll('input[type="radio"]');

function calcularPontuacao() {
    radios.forEach(resp => {
        
        if (resp.checked) {

            if (resp.value == "punk-aranha") {
                contSpiderPunk++;

            } else if (resp.value == "spider-gwen") {
                contSpiderGwen++;

            } else if (resp.value == "miles-morales") {
                contMilesMorales++;

            } else if (resp.value == "porco-aranha"){
                contPorcoAranha++;

            }

        }

        resultado();
        salvarDados();
        maiorResultado();
        
    })
}

function resultado() {
    let resultado = `Miles Morales = ${contMilesMorales}<br>
    Spider-Gwen = ${contSpiderGwen}<br>
    Porco-Aranha = ${contPorcoAranha}<br>
    Punk-Aranha = ${contSpiderPunk}`;

    document.getElementById("resultado").innerHTML = resultado;
}

function salvarDados() {
    localStorage.setItem('punk-aranha', contSpiderPunk)
    localStorage.setItem('spider-gwen', contSpiderGwen)
    localStorage.setItem('miles-morales', contMilesMorales)
    localStorage.setItem('porco-aranha', contPorcoAranha)
}

function maiorResultado() {
    let maior = 0;
    let empate = 0
    let pag;

    if (contMilesMorales >= maior) {
        pag = "miles-morales"
        maior = contMilesMorales
    }

    if (contSpiderGwen >= maior) {
        pag = "spider-gwen"
        maior = contSpiderGwen

    }

    if (contSpiderPunk >= maior) {
        pag = "spider-punk"
        maior = contSpiderPunk
    }

    if (contPorcoAranha >= maior) {
        pag = "porco-aranha"
        maior = contPorcoAranha
    } 

    setTimeout(() =>{
        window.open(pag+'.html')
    }, 5000);

}

