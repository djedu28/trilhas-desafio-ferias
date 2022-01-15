// script para carregar os arquivos das rotas
// Autor: DjEdu28
// dez. 2021 ~ jun. 2022


function renderHtml(cssid,path){
	$(cssid).load(path);
}

function laodCss(pathname){

	const css = $("<link>", {
	  "rel" : "stylesheet",
	  "type" :  "text/css",
	  "href" : pathname
	})[0];

	document
	  .getElementsByTagName("head")[0]
	  .appendChild(css);

}

function laodJs(pathname){
	console.log("laodJs",pathname)
	const js = $("<script>", {
	  // "rel" : "module",
	  "type" :  "text/javascript",
	  "src" : pathname,
	})[0];

	document
	  .getElementsByTagName("head")[0]
	  .appendChild(js);

}
function laodComp(name,{html,js,css}={}){
	// console.log("laodComp",name,{html,js,css})
	if ( !!html||html===undefined ) renderHtml(`#${name}`,`/componentes/${name}/${name}.html`);
	if ( !!css ||css===undefined ) laodCss(`/componentes/${name}/${name}.css`);
	if ( !!js  ||js===undefined ) laodJs(`/componentes/${name}/${name}.js`);
}

function laodPage(name,{html,js,css}={}){
	console.log("laodPage",name,{html,js,css})

	if ( !!html||html===undefined ) renderHtml(`#main`,`/pages/${name}/${name}.html`);
	if ( !!css ||css ===undefined ) laodCss(`/pages/${name}/${name}.css`);
	if ( !!js  ||js  ===undefined ) laodJs(`/pages/${name}/${name}.js`,"DOMContentLoaded");
}

document.addEventListener("DOMContentLoaded", microroute.run, false);
