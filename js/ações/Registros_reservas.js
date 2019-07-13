class calcula_lista{
	constructor(Quantidade_pacote_reserva,Quantidade_Reserva_bus,Quantidade_transportes){
		this.Quantidade_pacote_reserva = Quantidade_pacote_reserva;
		this.Quantidade_Reserva_bus = Quantidade_Reserva_bus;
		this.Quantidade_transportes = Quantidade_transportes;
	}
	soma(){
		return this.Quantidade_pacote_reserva + this.Quantidade_Reserva_bus + this.Quantidade_transportes;
	}
}

var entrada = new calcula_lista(Pacotes_Reservas.length,Reservas_bus.length,transportes.length);
document.getElementById('registros_reservas').innerHTML = "Serviços Solicitados: " + entrada.soma() + ' itens';
