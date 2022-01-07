
function criarPergunta({name,titulo,opcs}){
    // name:str, titulo:str e opções:[{value,texto}]
    if (opcs.length === 0) return;

    // cria os elementos html
    const pergunta       = document.createElement('div');
    const p         = document.createElement('p');
    const opcsHTML  = document.createElement('div');

    opcsHTML.classList.add("pergunta-conteiner")
    // adicionando titulo da pergunta
    p.innerHTML = titulo;
    // cria os elementos das opções

    opcs.forEach( (op)=>{
        const input = document.createElement('input');
        const label = document.createElement('label');
        const conteiner = document.createElement('div');
        const icon = document.createElement('i');

        conteiner.classList.add("opc-conteiner")

        input.type  = "radio"
        input.name  = name
        input.value = op.value

        input.setAttribute("id",name+op.value)
        label.setAttribute("for",name+op.value)

        label.appendChild(icon);
        label.innerHTML += op.texto;

        conteiner.appendChild(input);
        conteiner.appendChild(label);
        opcsHTML.appendChild(conteiner);
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
