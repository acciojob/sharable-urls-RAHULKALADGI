// your code here
const url = document.getElementById("url");
const name = document.getElementById("name");
const year = document.getElementById("year");
const button = document.getElementById("button");

function func(e) {
	e.preventDefault();
	let text = name.value;
	let num = year.value;
	let s = "";
	if(text && num) {
		s+= `?name=${text}&year=${num}`
	}
	else if(text && !num) {
		s+=`?name=${text}`;
	}
	else if(!text && num) {
		s+= `?year=${num}`;
	}
	url.innerText = `https://localhost:8080/${s}`;
}
button.addEventListener("click" , func);