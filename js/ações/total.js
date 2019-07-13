class saldo{
	constructor(valor_1,valor_2,valor_3,vetor_1,vetor_2,vetor_3){
		this.valor_1 = valor_1;
		this.valor_2 = valor_2;
		this.valor_3 = valor_3;
		this.vetor_1 = vetor_1;
		this.vetor_2 = vetor_2;
		this.vetor_3 = vetor_3;
	}
	calcula1(){
		for (var i = 0; i < this.vetor_1.length; i++) {
			this.valor_1 += this.vetor_1[i].Total;
		}
	}
	calcula2(){
		for (var i = 0; i < this.vetor_2.length; i++) {
			this.valor_2 += this.vetor_2[i].valor;
		}	
	}
	calcula3(){
		for (var i = 0; i < this.vetor_3.length; i++) {
			this.valor_3 += this.vetor_3[i].total_transporte;
		}
	}
	soma(){
		return this.valor_1 + this.valor_2 + this.valor_3 ;
	}
}

var x = new saldo(0,0,0,Reservas_bus,Pacotes_Reservas,transportes);
x.calcula1();
x.calcula2();
x.calcula3();

if (Reservas_bus.length >0 || Pacotes_Reservas.length>0) {
	document.querySelector('#Total').style.color = '#cc8e14';
	document.querySelector('#Total_pacotes').style.color = '#cc8e14';
	document.querySelector('#Total_reservas').style.color = '#cc8e14';
	document.querySelector('#Total_trans').style.color = '#cc8e14';
	document.querySelector('#Total').innerHTML = 'Total Fretamentos: '+x.valor_1+ ',00' ;
	document.querySelector('#Total_pacotes').innerHTML = 'Total Pacotes Turisticos: '+x.valor_2+ ',00' ;
	document.querySelector('#Total_trans').innerHTML = 'Total Transpotes: '+x.valor_3+ ',00' ;
	document.querySelector('#Total_reservas').innerHTML +='Total a pagar reservas: '+ x.soma() + ',00' ;
}