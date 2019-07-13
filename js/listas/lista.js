for (var i = 0; i < Pacotes_Reservas.length; i++) {
	var coluna =  document.createElement("TR");
	var linha_1 = document.createElement('TD');
	var linha_2 = document.createElement('TD');
	var linha_3 = document.createElement('TD');
	var linha_4 = document.createElement('TD');
	var linha_5 = document.createElement('TD');
	var linha_6 = document.createElement('TD');
	var linha_7 = document.createElement('TD');
	var img =  document.createElement("IMG");
	var button =  document.createElement("button");

	button.id = Pacotes_Reservas[i].codigo_venda;
	img.setAttribute("src",Pacotes_Reservas[i].img);
	var text_cod = document.createTextNode(Pacotes_Reservas[i].codigo_venda);
	var text_Estado = document.createTextNode(Pacotes_Reservas[i].Estado);
	var valor_pacote = document.createTextNode(Pacotes_Reservas[i].valor + ',00');
	var text_cidade = document.createTextNode(Pacotes_Reservas[i].Cidade);
	var text_parcelas = document.createTextNode(Pacotes_Reservas[i].parcelas + 'x');
	var btn_function = document.createTextNode('Remover');

	button.appendChild(btn_function);


	linha_2.appendChild(img);
	linha_3.appendChild(text_Estado);
	linha_7.appendChild(button);
	linha_5	.appendChild(valor_pacote);
	linha_1.appendChild(text_cod);
	linha_4.appendChild(text_cidade);
	linha_6.appendChild(text_parcelas);

	coluna.appendChild(linha_1);
	coluna.appendChild(linha_2);
	coluna.appendChild(linha_3);
	coluna.appendChild(linha_4);
	coluna.appendChild(linha_5);
	coluna.appendChild(linha_6);
	coluna.appendChild(linha_7);

	button.onclick = function(e) {
	      var codigo_venda = this.id;
	      var pacote = Pacotes_Reservas.find(function(pacote) {
	         return pacote.codigo_venda == this.id;
	      }, this);   	 	
	       Pacotes_Reservas.splice(Pacotes_Reservas.indexOf(pacote),1);
	       localStorage.setItem("Pacotes_Reservas", JSON.stringify(Pacotes_Reservas));
	       location.reload();
   	    }
		
 	
	document.querySelector("#reserva_pacote").appendChild(coluna);

}
for (var i = 0; i < Reservas_bus.length; i++) {
	var coluna =  document.createElement("TR");
	var linha_1 = document.createElement('TD');
	var linha_2 = document.createElement('TD');
	var linha_3 = document.createElement('TD');
	var linha_4 = document.createElement('TD');
	var linha_5 = document.createElement('TD');
	var linha_6 = document.createElement('TD');
	var linha_7 = document.createElement('TD');
	var linha_8 = document.createElement('TD');

	var img =  document.createElement("IMG");
	var button =  document.createElement("button");
	img.setAttribute("src",Reservas_bus[i].representação);
	var titulo_veiculo = document.createTextNode(Reservas_bus[i].nome_veiculo);
	var qtd_passageiro = document.createTextNode(Reservas_bus[i].passageiro);
	var origem_fretamento = document.createTextNode(Reservas_bus[i].quantidade_onibus_reservado);
	var total_reserva = document.createTextNode(Reservas_bus[i].origem);
	var total_frete = document.createTextNode('R$ '+ Reservas_bus[i].Total + ',00');
	var btn_function = document.createTextNode('Remover');
	var local_bus = document.createTextNode(Reservas_bus[i].local + ' (KM)');

	button.id = Reservas_bus[i].cod;
	button.appendChild(btn_function);

	linha_1.appendChild(img);
	linha_2.appendChild(titulo_veiculo);
	linha_3.appendChild(qtd_passageiro);
	linha_4.appendChild(total_reserva);
	linha_5.appendChild(origem_fretamento);
	linha_6.appendChild(total_frete);
	linha_7.appendChild(button);
	linha_8.appendChild(local_bus);


	coluna.appendChild(linha_1);
	coluna.appendChild(linha_2);
	coluna.appendChild(linha_3);
	coluna.appendChild(linha_4);
	coluna.appendChild(linha_5);
	coluna.appendChild(linha_8);
	coluna.appendChild(linha_6);
	coluna.appendChild(linha_7);

	button.onclick = function(e) {
      var cod = this.id;
      var busao = Reservas_bus.find(function(busao) {
         return busao.cod == this.id;
      }, this);
      	Reservas_bus.splice(Reservas_bus.indexOf(busao),1);
	    localStorage.setItem("Reservas_bus", JSON.stringify(Reservas_bus));
	    location.reload();
  	}

	document.querySelector("#reserva_bus").appendChild(coluna);

}
for (var i = 0; i < transportes.length; i++) {
	var coluna =  document.createElement("TR");
	var linha_1 = document.createElement('TD');
	var linha_2 = document.createElement('TD');
	var linha_3 = document.createElement('TD');
	var linha_4 = document.createElement('TD');
	var linha_5 = document.createElement('TD');
	
	var text_prazo = document.createTextNode(transportes[i].prazo + ' Prazo Solicitado');
	var qtd_caixas = document.createTextNode(transportes[i].qtd_caixas + 'CX');
	var text_peso = document.createTextNode(transportes[i].peso + 'Kg(g)');
	var text_total = document.createTextNode('R$ '+transportes[i].total_transporte + ',00');
	var text_entrega = document.createTextNode(transportes[i].entrega + 'Dia(s)');

	linha_1.appendChild(qtd_caixas);
	linha_2.appendChild(text_peso);
	linha_3.appendChild(text_prazo);
	linha_4.appendChild(text_entrega);
	linha_5.appendChild(text_total);

	coluna.appendChild(linha_1);
	coluna.appendChild(linha_2);
	coluna.appendChild(linha_3);
	coluna.appendChild(linha_4);
	coluna.appendChild(linha_5);

	document.querySelector("#reserva_transporte").appendChild(coluna);
}

document.querySelector("#Limpa").onclick = function() {
	var mensagem = confirm("Deseja Limpar Lista de Reservas");
	if (mensagem) {
		 localStorage.clear();
		location.reload();
		alert("Limpa com Sucesso !!!");
	}else{
		alert("Cancelado Com Sucesso !!!");
	}
	
}