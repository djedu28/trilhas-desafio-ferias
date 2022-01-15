
function popUp(name){
	renderHtml("#djpopup",`/componentes/${name}/${name}.html`)
	// document
	  // .getElementsByClassName("auth")[0]
	  // .addEventListener("submit", authForm, false);
}
function popUpExit(){
	console.log("Desativando popUp",name)
	document
	  .getElementById("djpopup")
	  .innerHTML = "";
}

function authForm(e){
	e.preventDefault()

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
	console.log({e,formData,formProps})
	if (e.target.id==="cadastro"){
		alert(`Olá ${formProps.nome}, você foi cadastrado com sucesso! \n\nÉ o que eu diria se o servidor estivesse funcionando`)
	}
	
	if (e.target.id==="entrar"){
		alert(`Usuario não encontrado!`)
	}
}