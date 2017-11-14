var xhttp = new XMLHttpRequest();
//console.log(xhttp);

var root = "https://jsonplaceholder.typicode.com/";

xhttp.open("GET", root + "todos", true);
xhttp.addEventListener('load', successListener);
xhttp.send();

function successListener(event){
	console.log(event);
	var data = JSON.parse(event.target.response);
	var misTareas = document.getElementById("mis-tareas");
	for(var i=0; i< data.length; i++){
		if (!data[i].completed){
			var miTarea = document.createElement("LI");
			var texto = document.createTextNode(data[i].title);
			miTarea.innerText = data[i].title;
			misTareas.appendChild(miTarea);
		}
	}
}