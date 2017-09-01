function normalKey(key) {
	document.getElementById('display').value += key;
}

function back() {
	var disL = document.getElementById('display').value.length;
	document.getElementById('display').value = document.getElementById('display').value.substr(0,disL-1);
}

function clear(){
	document.getElementById('display').value = "";
}