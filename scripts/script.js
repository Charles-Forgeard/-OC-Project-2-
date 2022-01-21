var use_IE_Btn = document.getElementById('use-IE-btn');
var messageIE = document.getElementById('MessageIE');
var container = document.getElementById('container');

function getDisplayValue(element){
	return window.getComputedStyle(element, null).getPropertyValue("display")
}

function setDisplayValue(element, value){
	if(typeof value != 'string'){
		return TypeError("la function setDisplayValue doit recevoir un argument de type string en deuxième argument") 
	}
	element.style.display = value;
}

function switchDisplayValueBlockNone(element){
	let displayValue = getDisplayValue(element);
	displayValue === "block" ? setDisplayValue(element, "none") : setDisplayValue (element, "block")
}

function createBtnReturnToMessageIE(){
	var newBtn = document.createElement("button");
	newBtn.id = "BtnReturnToMessageIE"
	newBtn.innerText = "Retour vers conseils pour Internet Explorer";
	newBtn.onclick = returnToMessageIE;
	document.body.insertBefore(newBtn, container);
}

function accesIEClient(){
	switchDisplayValueBlockNone(container);
	switchDisplayValueBlockNone(messageIE);
	createBtnReturnToMessageIE()
}

function returnToMessageIE(){
	switchDisplayValueBlockNone(container);
	switchDisplayValueBlockNone(messageIE);
	let btnToDelete = document.getElementById("BtnReturnToMessageIE");
	btnToDelete.parentNode.removeChild(btnToDelete)
}

use_IE_Btn.onclick = accesIEClient;
