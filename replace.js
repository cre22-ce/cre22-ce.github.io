var curPage = "";

function resize(obj) {
	obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

function bodyOnLoad(){
	if(window.location.hash == ""){
		window.location.hash = "main";
	}
	curPage = window.location.hash.replace("#", "");
	load();
}

function changePage(p){
	window.location.hash = p;
	curPage = p;
	load();
}

function load(){
	document.getElementById("maindiv").innerHTML = "{" + curPage + "}";
	rep();
}

function rep(){
	var replacables = document.getElementsByClassName("replacable");
	for(var i = 0; i < replacables.length; ++i){
		var iHTML = replacables[i].innerHTML;
		var r = "<strong><h1>404: Unknown text!</h1></strong>";
		for(var name in replaceText){
			if(iHTML == "{" + name + "}"){
				r = replaceText[name];
				break;
			}
		}
		if(r.startsWith("file:")){
			document.getElementsByClassName("replacable")[i].innerHTML = "";
			var f = document.createElement("iframe");
			f.src = r.substring(5);
			f.frameBorder = 0;
			/*var head = document.createElement("head");
			var cssLink = document.createElement("link");
			cssLink.href = "./style.css"; 
			cssLink.rel = "stylesheet";
			cssLink.type = "text/css";
			head.appendChild(cssLink);
			f.appendChild(head);*/
			document.getElementsByClassName("replacable")[i].appendChild(f);
		}else{
			document.getElementsByClassName("replacable")[i].innerHTML = r;
		}
		/*var hO = document.createElement('div');
		hO.innerHTML = r;
		if(hO.firstChild.id == "frame"){
			hO.src = "./" + name + ".html";
			console.log(hO);
			document.getElementsByClassName("replacable")[i].innerHTML = "";
			document.getElementsByClassName("replacable")[i].append(hO);
		}else{
			document.getElementsByClassName("replacable")[i].innerHTML = r;
		}*/
		//document.getElementsByClassName("replacable")[i].classList.remove("replacable");
	}
}
