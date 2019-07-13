
document.querySelector('#btn_sobre').onclick = function () {
	document.getElementById('inicial').style.display = 'none';
	document.getElementById('sobre').style.display = 'block';
	document.getElementById('lista_frota').style.display = 'none';
	document.getElementById('pesquisa').style.display = 'none';
}
document.querySelector('#home').onclick = function () {
	document.getElementById('inicial').style.display = 'block';
	document.getElementById('sobre').style.display = 'none';
	document.getElementById('lista_frota').style.display = 'none';
	document.getElementById('pesquisa').style.display = 'none';
}
document.querySelector('#pesquis').onclick = function () {
	document.getElementById('inicial').style.display = 'none';
	document.getElementById('sobre').style.display = 'none';
	document.getElementById('lista_frota').style.display = 'none';
	document.getElementById('pesquisa').style.display = 'block';
}
document.querySelector('#lista_veiculos').onclick = function () {
	document.getElementById('inicial').style.display = 'none';
	document.getElementById('sobre').style.display = 'none';
	document.getElementById('pesquisa').style.display = 'none';
	document.getElementById('lista_frota').style.display = 'block';
}





