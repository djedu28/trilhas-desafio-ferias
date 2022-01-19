
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function criarBox(tipo,{value,id,i,j}){
	const box = document.createElement('div');
	
	
	box.classList.add("box")
	box.classList.add(tipo)
	if (tipo === "A-BK" || tipo === "N" ) {
		box.textContent  = tipo === "N" ? `${value}.` : `${value}`
	}
	if (tipo === "A"){
		//const input = document.createElement('input');
		//input.innerHTML = `<input 
		box.innerHTML = `<input 
			type="text"
			autocapitalize = "characters"
			autocorrect   = "off"
			autocomplete  = "off"
			maxlength = 1
			size = 1
			onblur = "testeLetra(event)"
			id = ${id}
			i = ${i}
			j = ${j}

		/>`
	}
	return box
}

const mapa = [
	[" " ," " ," " ," " ," " ," " ," " ,"1" ," " ," " ," " ," " ," " ," " ," " ," "] , // 0 
	[" " ," " ," " ," " ," " ," " ," " ,"B" ," " ," " ," " ," " ," " ," " ," " ," "] , // 1 
	[" " ," " ," " ," " ," " ,"2" ,"M" ,"O" ,"E" ,"D" ,"A" ," " ," " ," " ," " ," "] , // 2 
	[" " ," " ," " ," " ," " ," " ," " ,"L" ," " ," " ," " ," " ," " ," " ," " ," "] , // 3 
	[" " ," " ," " ," " ," " ," " ," " ,"S" ," " ," " ," " ," " ," " ," " ," " ," "] , // 4 
	[" " ," " ," " ," " ," " ," " ," " ,"A" ," " ," " ," " ," " ," " ," " ," " ," "] , // 5 
	[" " ," " ," " ," " ," " ," " ," " ,"*" ," " ," " ," " ," " ,"4" ," " ," " ," "] , // 1 
	[" " ," " ," " ," " ," " ," " ," " ,"D" ," " ," " ," " ," " ,"I" ," " ," " ," "] , // 6 
	[" " ," " ," " ,"3" ,"I" ,"N" ,"V" ,"E" ,"S" ,"T" ,"M" ,"E" ,"N" ,"T" ,"O" ," "] , // 7 
	[" " ," " ," " ," " ," " ," " ," " ,"*" ," " ," " ," " ," " ,"F" ," " ," " ," "] , // 1 
	[" " ," " ," " ," " ," " ," " ," " ,"V" ," " ," " ," " ," " ,"L" ," " ," " ," "] , // 8 
	[" " ," " ," " ," " ," " ," " ," " ,"A" ," " ," " ," " ," " ,"A" ," " ," " ," "] , // 9 
	[" " ," " ," " ," " ," " ," " ," " ,"L" ," " ," " ," " ," " ,"Ç" ," " ," " ," "] , // 10
	[" " ," " ," " ,"5" ,"J" ,"U" ,"R" ,"O" ," " ," " ," " ," " ,"Ã" ," " ," " ," "] , // 11
	[" " ," " ," " ," " ," " ," " ," " ,"R" ," " ," " ," " ," " ,"O" ," " ," " ," "] , // 12
	[" " ," " ,"6" ,"F" ,"I" ,"N" ,"T" ,"E" ,"C" ,"H" ," " ," " ," " ," " ," " ," "] , // 13
	[" " ," " ," " ," " ," " ," " ," " ,"S" ," " ," " ," " ," " ," " ," " ," " ," "] , // 14
]

const mapaHTML = document.getElementsByClassName("mapa")[0];
mapa.forEach((linha,i) => {
	const linhaHTML = document.createElement('section');
	//const fragment = document.createDocumentFragment();	

	linha.forEach((box,j)=>{
		let tipo = 
			isNumber(box) ? "N"  // numero de incide
			: box===" " ? "L" 	 // caixa limpa
			: box==="*" ? "BK"   // caixa bloqueada
			: "A"	             // caixa com input ativado
			//: "A-BK";			 // caixa bloqueada com texto
			// modificar o acima para apenas A e terá o input ativados
		const boxHTML = criarBox(tipo,{value:box,id:`L${i}_C${j}`,i,j})
		boxHTML.id = `div_L${i}_C${j}`
		linhaHTML.appendChild(boxHTML)
	})
	
	mapaHTML.appendChild(linhaHTML)

})

// console.log("mapa",{mapa})

// console.log(`
// modificar linha 147 de "A-BK" para apenas "A" e terá o input ativados

// agora basta pecorrer todos os box comparando o input.value com mapa

// cada box possui um id referente a linha e coluna
// exemplo id = "L1C2" // linha 1 e coluna 2
// `);

function testeLetra(e){
	e.target.value = e.target.value.toUpperCase()
	// console.log("testeLetra",{e});
	const value = e.target.value;
	
	const i = e.target.getAttribute("i")
	const j = e.target.getAttribute("j")
	if (value === mapa[i][j]){
		e.target.disabled=1
	}
	
	// <!-- box.classList.add(tipo) -->
}

