


class Pacotes{
	constructor(codigo_venda,Cidade,Estado,valor,local,parcelas,img,desconto){
		this.codigo_venda = codigo_venda;
		this.Cidade = Cidade;
		this.Estado = Estado;
		this.valor = valor;
		this.local = local;
		this.parcelas = parcelas;
		this.img = img;
		this.desconto = 40*10/100;
	}
	compara(){
		var recebe = "";  
		var data_atual = new Date();    
		recebe += (data_atual.getMonth() + 1) + "/";  
		recebe += data_atual.getDate() + "/";  
		recebe += data_atual.getFullYear(); 

		return(recebe);  

	}
	promocao(){
		var recebe_2 = "";  
		var Duracao_promocao = new Date(2018,4,2);    
		recebe_2 += (Duracao_promocao.getMonth())+1 + "/";  
		recebe_2 += Duracao_promocao.getDate() + "/";  
		recebe_2 += Duracao_promocao.getFullYear();  

		return(recebe_2);  

	}
	promocao_2(){
		var recebe_2 = "";  
		var Duracao_promocao = new Date(2018,3,12);    
		recebe_2 += (Duracao_promocao.getMonth())+1 + "/";  
		recebe_2 += Duracao_promocao.getDate() + "/";  
		recebe_2 += Duracao_promocao.getFullYear();  

		return(recebe_2);  

	}
	contagem_promocao(){
		var pega = new Date();
		var hoje = new Date(pega.getFullYear(),pega.getMonth() + 1,pega.getDate());
		var promo = new Date(hoje.getFullYear(),4,2);
		var  dia = 1000 * 60 * 60 * 24;
		var restantes = Math.ceil((promo.getTime() - hoje.getTime())/(dia));

		if(!promo){
		   var promo_2 = new Date(hoje.getFullYear(),3,12);
		   var restantes_2 = Math.ceil((promo.getTime() - hoje.getTime())/(dia));
		   return (restantes_2 + " Dia(s)");
		}else{
		  return (restantes + " Dia(s)");		
		}		
	}	
}

var Pacotes_1 = new Pacotes("1","Parque Nacional","Foz do Iguaçu",1200,"Pousada 3 Noites",12,"img/Fretamento.jpg");
var Pacotes_2 = new Pacotes("2","Bonito","Mato Grosso Do Sul",3000,"Pousada 6 Noites",15,"img/passagem.jpg");
var Pacotes_3 = new Pacotes("3","Cascata do Caracol","Rio Grande do Sul",2800,"Pousada 8 Noites",15,"img/Transporte.jpg");
var Pacotes_4 = new Pacotes("4","Pão de Açúcar"," Rio de Janeiro",1500,"Pousada 2 Noites",10,"img/lista.jpg");
var recebe = '';

pacotes_viagem.push(Pacotes_1,Pacotes_2,Pacotes_3,Pacotes_4);

 for (var i = 0; i < pacotes_viagem.length; i++) {

 		var Desconto = pacotes_viagem[i].valor / pacotes_viagem[i].desconto ;
 		var calculo = pacotes_viagem[i].valor- Desconto;
 		var div  = document.createElement('div');
 		div.setAttribute('class','viagens');
 		var paragrafo_1 = document.createElement('p');
 		var paragrafo_2 = document.createElement('p');
 		var paragrafo_3 = document.createElement('p');
 		var paragrafo_4 = document.createElement('p');
 		var paragrafo_5 = document.createElement('p');
 		var paragrafo_6 = document.createElement('p');
 		var paragrafo_7 = document.createElement('P');
 		var btn_comprar = document.createElement('button');
 		var img = document.createElement('img');
 		var texto_1 = document.createTextNode(pacotes_viagem[i].Estado+"/"+pacotes_viagem[i].Cidade);
 		var texto_2 = document.createTextNode("Valor: "+ pacotes_viagem[i].valor + ",00");
 		var texto_3 = document.createTextNode("Hospedagem: "+ pacotes_viagem[i].local);
 		var texto_4 = document.createTextNode("Parcelas Cartão: "+ pacotes_viagem[i].parcelas + 'x');
 		var texto_5 = document.createTextNode("Desconto -25% " + Desconto +',00');
 		var texto_6 = document.createTextNode("Pacote em Promoção: "+ calculo + ",00");
 		var texto_7 = document.createTextNode("Promoção em : " + Pacotes_1.contagem_promocao());
 		paragrafo_3.setAttribute('style',"color:#cc9e20");
 		paragrafo_7.setAttribute('style',"color:red");
 		var recebe = document.createTextNode("Comprar");
 		img.setAttribute('src',pacotes_viagem[i].img);
 		btn_comprar.id = pacotes_viagem[i].codigo_venda;

 		 div.appendChild(img);
 		 div.appendChild(paragrafo_1);
 		 div.appendChild(paragrafo_2);
 		 div.appendChild(paragrafo_3);
 		 div.appendChild(paragrafo_4);
 		 div.appendChild(paragrafo_5);
 		 div.appendChild(paragrafo_6);
 		 div.appendChild(paragrafo_7);
 		 div.appendChild(btn_comprar);

 		 paragrafo_1.appendChild(texto_3);
 		 paragrafo_2.appendChild(texto_1);
 		 paragrafo_4.appendChild(texto_2);
 		 paragrafo_5.appendChild(texto_4);
 		 btn_comprar.appendChild(recebe);


 		 if (Pacotes_1.compara() == Pacotes_1.promocao()) {
 		 	paragrafo_3.appendChild(texto_6);
 		 	paragrafo_6.appendChild(texto_5);
 		 	paragrafo_4.setAttribute("style", "text-decoration: line-through");
 		 }else if(Pacotes_1.compara() == Pacotes_1.promocao_2()){
 		 	paragrafo_3.appendChild(texto_6);
 		 	paragrafo_6.appendChild(texto_5);
 		 	paragrafo_4.setAttribute("style", "text-decoration: line-through");
 		 }
 		 else{
 		 	paragrafo_7.appendChild(texto_7);
 		 }

 		 document.querySelector("#pacotes").appendChild(div);

 		 btn_comprar.onclick = function(e) {
	      var codigo_venda = this.id;
	      var pacote = pacotes_viagem.find(function(pacote) {
	         return pacote.codigo_venda == this.id;
	      }, this);
	      var mens = confirm("Deseje Reserva esse pacote mesmo ?");   	 	
	      if (mens == true) {
	      Pacotes_Reservas.push(pacote);
	      localStorage.setItem("Pacotes_Reservas", JSON.stringify(Pacotes_Reservas));
    	  alert("Pacote Reservado !!! ");
    	  }else{
    	  	alert("Pacote não reservado");
    	  }
   	    }
   	    
 	}

 	
 	class Encomenda{
 		constructor(destino,qtd_caixas,peso,prazo,taxa,taxa_transporte,total_transporte,entrega){
 			this.destino = destino;
 			this.qtd_caixas = qtd_caixas;
 			this.peso = peso;
 			this.prazo = prazo;
 			this.taxa = 4;
 			this.taxa_transporte = 10;
 			this.total_transporte = total_transporte;
 			this.entrega = entrega;
 		}
 		calcular(){
	 		if (this.prazo >=7 && this.prazo<=49) {
		 		document.forms["form_2"]["previsão"].style.color = "red";
		 		document.forms["form_2"]["previsão"].value ='Prazo Previsto Será '+ this.prazo*1.5 +' Dias'; 
		 		 this.entrega = this.prazo*1.5;
		 	}else if(this.prazo >=50){
		 		document.forms["form_2"]["previsão"].style.color = "red";
		 		document.forms["form_2"]["previsão"].value ='Prazo Previsto Será '+ this.prazo*1.8  + ' Dias';
		 		 this.entrega = this.prazo*1.8;
		 	}else{
		 		document.forms["form_2"]["previsão"].style.color = "red";
		 		document.forms["form_2"]["previsão"].value ='Prazo Previsto Será '+ this.prazo*4 + ' Dias';
		 		 this.entrega = this.prazo*4;
		 	}
		 	return this.total_transporte = ((((this.qtd_caixas * this.taxa) * this.peso ) + this.taxa_transporte)*this.prazo);
 		}
 	}
 	document.querySelector("#btn_trans").onclick = function() {
 		var prazo =+ document.forms["form_2"]["prazo"].value;
	 	var caixas =+ document.forms["form_2"]["Caixas"].value;
	 	var peso =+ document.forms["form_2"]["peso"].value;
	 	var Transporte = new Encomenda('',caixas,peso,prazo);
	 	document.forms["form_2"]["total_trans"].value = Transporte.calcular() + " reais";
	 	transportes.push(Transporte); 
	 	localStorage.setItem("transportes", JSON.stringify(transportes));
	 }

	 
