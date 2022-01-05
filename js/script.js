
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
	
	const js = $("<link>", {
	  "rel" : "stylesheet",
	  "type" :  "text/javascript",
	  "href" : pathname
	})[0];

	document
	  .getElementsByTagName("head")[0]
	  .appendChild(js);

}
function laodComp(name,{html,js,css}){
	if ( html||true ) renderHtml(`#${name}`,`./componentes/${name}/${name}.html`);
	if ( css ||true ) laodCss(`./componentes/${name}/${name}.css`);
	if ( js  ||true ) laodJs(`./componentes/${name}/${name}.js`);
}

 