var pacotes_viagem = new Array();

var memoria = localStorage.getItem('memoria');
memoria = (memoria) ? JSON.parse(memoria) : [];

var Pacotes_Reservas = localStorage.getItem("Pacotes_Reservas");
Pacotes_Reservas = (Pacotes_Reservas) ? JSON.parse(Pacotes_Reservas) : [];

var Reservas_bus = localStorage.getItem("Reservas_bus");
Reservas_bus = (Reservas_bus) ? JSON.parse(Reservas_bus) : [];

var transportes = localStorage.getItem("transportes");
transportes = (transportes) ? JSON.parse(transportes) : [];

