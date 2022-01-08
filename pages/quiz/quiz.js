
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
    pergunta.setAttribute("id",name);
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

function Perguntas(){
    const ele = buscarPerguntasHTML()
    if(ele.addEventListener){
        ele.addEventListener("submit", Enviar, false);  //Modern browsers
    }else if(ele.attachEvent){
        ele.attachEvent('onsubmit', Enviar);            //Old IE
    }


    minhasPerguntas()
        .forEach(({ name, titulo, opcs }, i) => {
            titulo = `${i+1}. ${titulo}`
            addPergunta(criarPergunta({ name, titulo, opcs }))
        });
}


function Enviar(e){
    e.preventDefault()

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const perguntas =minhasPerguntas();

    const acertos = perguntas.map(({ name, resp}) => {
        const acertou = formProps[name]===resp
        p = document.getElementById(name)
        if (acertou){
            p.classList.add("pergunta-correta")
        } else {
            p.classList.add("pergunta-errada")
        }
        return {name:acertou}
    });
    soma = 0;
    acertos.forEach(x=>x.name?soma++:0)
    alert(`Você acertou ${soma}`)
    return acertos
}


function minhasPerguntas(){
    opcs = [
        {value:"certo", texto:"Certo"},
        {value:"errado",texto:"Errado"}
    ]
    let i = 1;
    const perguntas = [
        {
            name:`pergunta${i++}`,
            titulo:"Necessário que uma pessoa seja especialista para estudar e aprender sobre educação financeira. Pessoas comuns e jovens não necessitam aprender sobre o assunto. A educação financeira não exerce influência sobre como uma pessoa controla seus gastos, realiza seus investimentos e administra seu capital e dívidas.",
            resp:"errado",
            opcs
        },
        {
            name:`pergunta${i++}`,
            titulo:"Na inflação os efeitos de aumento dos preços de bens e serviços resultam em aumento do poder de compra.",
            resp:"errado",
            opcs
        },
        {
            name:`pergunta${i++}`,
            titulo:"As fintechs são startups inovadoras com produtos e serviços digitais voltados para soluções do mercado financeiro.",
            resp:"certo",
            opcs
        },
        {
            name:`pergunta${i++}`,
            titulo:"De acordo com Peic/CNC, o índice de endividamento das famílias brasileiras aumentou no período dos anos de 2018 a 2020.",
            resp:"certo",
            opcs
        },
        {
            name:`pergunta${i++}`,
            titulo:"Conhecimento e planejamento são ótimos aliados em termos de gestão financeira pessoal.",
            resp:"certo",
            opcs
        }
    ]
    return perguntas
}
