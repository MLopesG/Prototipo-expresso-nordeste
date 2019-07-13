var viagens = new Array();
var local = 0;

class cidades{
	constructor(cidade,km,local){
		this.cidade = cidade;
		this.km = km;
	}
}

var city = new cidades('Dourados/MS',120);
var city_2 = new cidades('Selecione Região Fretamento',000);
var city_3 = new cidades('Campo Grande/MS',340);
var city_4 = new cidades('Ivinhema/MS',200);
var city_5 = new cidades('Ponta-Porã/MS',120);

viagens.push(city_2,city,city_3,city_4,city_5);


for (var i = 0; i < viagens.length; i++) {
	
	var element_2 = document.createElement('OPTION');
	var element_3_text = document.createTextNode(viagens[i].cidade);

	element_2.appendChild(element_3_text);

	document.getElementById('itens').appendChild(element_2);

	document.querySelector('#itens').addEventListener('change', function(evt){
		if (evt.target.value == 'Selecione Região Fretamento') {
			alert("Selecione Cidade");
		}else{
			function verificar(ler) {
				return ler.cidade == evt.target.value;  
			}
			function chamar(nome) {
			 if (nome = viagens.find(verificar)){
			 	local = nome.km;
				}else{
					alert('Não Encontrado');
				}	
			}
		}	  
		chamar();
	});
}
