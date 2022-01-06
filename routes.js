
$(function () {
	laodComp("header",{js:false}) // js=false
	//laodComp("main",{js:false})
	laodComp("footer",{js:false})
})

microroute("/pagina2",()=>{
	laodPage("pagina2",{js:false})
})

microroute("/",()=>{
	laodPage("home",{js:false})
})

microroute("*",()=>{
	laodPage("erro404",{js:false})
})

microroute.run({
	base:"/trilhas_desafio_final/"
})