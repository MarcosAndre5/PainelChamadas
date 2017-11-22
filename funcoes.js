function tempo() {
	var Hora = new Date();
	document.getElementById('hora').innerHTML = Hora.toLocaleTimeString();
	setTimeout('tempo()', 1000);
}

function efeito(){
    var piscarTela = document.getElementById('notifica');
    	
	if(piscarTela.style.display == 'block') {  
		piscarTela.style.display = 'none';  
	} else {
		piscarTela.style.display = 'block';  
	}
}