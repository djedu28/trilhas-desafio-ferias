
$(function () {
	laodComp("header",{js:false}) // js=false
	//laodComp("main",{js:false})
	laodComp("footer",{js:false})
})



microroute("/Entrar",()=>{
	console.log("Entrando")
	popUp("entrar");
})

microroute("/Inscrever",()=>{
	console.log("Increver")
	popUp("cadastrar");
})

microroute("/Fotos_e_Fatos",()=>{
	laodPage("pagina2",{js:false})
})

microroute("/Quiz",()=>{
	laodPage("quiz")
})
microroute("/teste_game",()=>{
	laodPage("game",{js:false})
})
microroute("/Palavras_Cruzadas",()=>{
	laodPage("cpalavra",{js:false})
})

microroute("/Duvidas",()=>{
	laodPage("duvidas",{js:false})
})

microroute("/",()=>{
	laodPage("pagina1",{js:false})
})

/**************************/

microroute("/",()=>{
	laodPage("pagina1",{js:false})
})

microroute("*",()=>{
	laodPage("erro404",{js:false})
})



// {
// 	base:"//djedu28.github.io/trilhas_desafio_final",
// 	base:""
// }
