
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
