function getColor() {
	const randomNumber = Math.floor(Math.random() * 16777215);
	const randomCode = "#" + randomNumber.toString(16);
	document.body.style.backgroundColor = randomCode;
	document.getElementById("col").innerText = randomCode;
}

getColor();

document.getElementById("cng").addEventListener("click", getColor);

document.getElementById("col");
