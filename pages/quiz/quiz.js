
function criarPergunta({name,titulo,opcs}){
    // name:str, titulo:str e opções:[{value,texto}]
    if (opcs.length === 0) return;

    // cria os elementos html
    const pergunta       = document.createElement('div');
    const p         = document.createElement('p');
    const opcsHTML  = document.createElement('div');

    // adicionando titulo da pergunta
    p.innerHTML = titulo;
    p.class = "pergunta";
    // cria os elementos das opções

    opcs.forEach( (op)=>{
        const input = document.createElement('input');
        const label = document.createElement('label');

        input.type  = "radio"
        input.name  = name
        input.value = op.value

        label.appendChild(input);
        label.innerHTML += op.texto;
        opcsHTML.appendChild(label);
    })

    pergunta.class = "pergunta-conteiner"
    pergunta.appendChild(p);
    pergunta.appendChild(opcsHTML);
    return pergunta
}

function buscarPerguntasHTML(){
    let perguntasHTML = null;
    let tentativas = 0;
    while (!perguntasHTML && (tentativas<=5)){
        tentativas++;
        console.log("busca perguntas - tentativas",{tentativas,perguntasHTML})
        perguntasHTML = document.getElementsByClassName("perguntas")[0]
    }
    return perguntasHTML;
}

function addPergunta(pergunta){
    perguntasHTML = buscarPerguntasHTML();

    perguntasHTML.appendChild(pergunta);
}
