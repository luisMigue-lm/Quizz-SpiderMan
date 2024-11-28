let contSpiderGwen = 0;
let contSpiderPunk = 0;
let contMilesMorales = 0;
let contPorcoAranha = 0;

let radios = document.querySelectorAll('input[type="radio"]');

function calcularPontuacao() {
    radios.forEach(e => {
        
        if (e.checked) {

            if (e.value == "punk-aranha") {
                contSpiderPunk++;

            } else if (e.value == "spider-gwen") {
                contSpiderGwen++;

            } else if (e.value == "miles-morales") {
                contMilesMorales++;

            } else if (e.value == "porco-aranha"){
                contPorcoAranha++;

            }

        }

        resultado();
        salvarDados();
        
    })
}

function resultado() {
    let resultado = `Miles Morales = ${contMilesMorales}<br>
    Spider-Gwen = ${contSpiderGwen}<br>
    Porco-Aranha = ${contSpiderGwen}<br>
    Punk-Aranha = ${contSpiderPunk}`;

    document.getElementById("resultado").innerHTML = resultado;
}

function salvarDados() {
    localStorage.setItem('punk-aranha', contSpiderPunk)
    localStorage.setItem('spider-gwen', contSpiderGwen)
    localStorage.setItem('miles-morales', contMilesMorales)
    localStorage.setItem('porco-aranha', contPorcoAranha)
}

function trocarPagina() {
    
    /*setTimeout(() =>{
        window.open(pagina+'.html')
    }, 5000); */
}