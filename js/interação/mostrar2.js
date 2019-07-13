
document.querySelector('#chamar_fretamento').onclick = function () {
	document.getElementById('lista_pt').style.display = 'none';
	document.getElementById('lista_frete').style.display = 'block';
	document.getElementById('lista_trans').style.display = 'none';
}
document.querySelector('#chamar_pacote').onclick = function () {
	document.getElementById('lista_pt').style.display = 'block';
	document.getElementById('lista_frete').style.display = 'none';
	document.getElementById('lista_trans').style.display = 'none';
}
document.querySelector('#chamar_transporte').onclick = function () {
	document.getElementById('lista_trans').style.display = 'block';
	document.getElementById('lista_pt').style.display = 'none';
	document.getElementById('lista_frete').style.display = 'none';
}