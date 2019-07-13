  class calculo_itens{
  constructor(total,Quantidade_atual,Quantidade_digitada,destino_fretamento,taxa_kg,taxa_saida,valor_fretamento,passageiros){
    this.total = total;
    this.Quantidade_atual = Quantidade_atual;
    this.Quantidade_digitada = Quantidade_digitada; 
    this.destino_fretamento = destino_fretamento;
    this.taxa_kg = taxa_kg;
    this.taxa_saida = taxa_saida;
    this.valor_fretamento = valor_fretamento;
    this.passageiros = passageiros;
  }
  calculo_qtd_veiculo(){
    return this.Quantidade_atual -= this.Quantidade_digitada;
  }
  calculo_fretamento(){
    return this.total = (this.destino_fretamento * this.taxa_kg + this.taxa_saida + this.valor_fretamento) * this.Quantidade_digitada;
  }
  passagem(){
    return parseInt(this.total/this.passageiros);
  }
  geral(){
    document.getElementById("erro").style.color = "green";
    document.querySelector("#erro").innerHTML = "Veiculo Adicionado na Lista de Fretamendo";
   }
}


class informacoes_banner {
   constructor(img, texto) {
      this.img = img;
      this.texto = texto;
   }
   slide1(){
      document.getElementById('img_automatico').src = banner_3.img;
       document.getElementById('Text').innerHTML = banner_3.texto;
       setTimeout("banner_1.slide2()", 5000);
   }
   slide2(){
    document.getElementById('img_automatico').src = banner_2.img;
    document.getElementById('Text').innerHTML = banner_2.texto;
    setTimeout("banner_3.slide3()", 5000);
   }
   slide3(){
    document.getElementById('img_automatico').src = banner_1.img;
     document.getElementById('Text').innerHTML = banner_1.texto;
     setTimeout("banner_2.slide1()", 5000);
   }
}

var banner_1 = new informacoes_banner("img/1.jpg", "LINHAS SPACE1 SPACE2 SPACE3");
var banner_2 = new informacoes_banner("img/2.jpg", "Expresso Nordeste , Extensão Frota para outros paises");
var banner_3 = new informacoes_banner("img/3.jpg", "Pacotes turisticos 50% Desconto para todos locais");


function slides() {
  banner_1.slide1(); 
}
class onibus {
   constructor(cod, nome, passageiros, ano, img,Quantidade_veiculo,valor_fretamento,sobre) {
      this.cod = cod;
      this.nome = nome;
      this.passageiros = passageiros;
      this.ano = ano;
      this.img = img;
      this.Quantidade_veiculo = Quantidade_veiculo;
      this.valor_fretamento = valor_fretamento;
      this.sobre = sobre;
   }
}

class veiculoreserva{
  constructor(cod,representação,nome_veiculo,passageiro,quantidade_onibus_reservado,origem,Total,local){
    this.cod = cod;
    this.representação = representação;
    this.nome_veiculo = nome_veiculo;
    this.passageiro = passageiro;
    this.quantidade_onibus_reservado = quantidade_onibus_reservado;
    this.origem = origem;
    this.Total = Total;
    this.local = local;
  } 
}

function ale() {
    return (Math.round(Math.random())* memoria.length);
}
var onibus_1 = new onibus("002", "Marcopolo G7 DD 1800", 56, "2017", "img/4.jpg",4,1200,'O Marcopolo Paradiso é uma carroceria de ônibus rodoviários, apropriados para médias e longas distâncias,fabricada pela empresa gaúcha Marcopolo. Foi produzido desde o lançamento, em 1984, sobre vários chassis de motor traseiro ou central: Mercedes-Benz, Volvo, Scania e Volkswagen. O modelo foi e é produzido em diferentes versões (alturas) e teve reformulações ao longo do tempo.');
var onibus_2 = new onibus("003", "Marcopolo G6 1200", 50, "2017", "img/5.jpg",4,600,'O Marcopolo Paradiso é uma carroceria de ônibus rodoviários, apropriados para médias e longas distâncias,fabricada pela empresa gaúcha Marcopolo. Foi produzido desde o lançamento, em 1984, sobre vários chassis de motor traseiro ou central: Mercedes-Benz, Volvo, Scania e Volkswagen. O modelo foi e é produzido em diferentes versões (alturas) e teve reformulações ao longo do tempo.');
var onibus_3 = new onibus("004", "Micro ônibus Mascarello", 28, "2007", "img/6.jpg",2,300,'A Mascarello Carrocerias e Ônibus Ltda. é uma fabricante brasileira de carrocerias para ônibus, com sede no município paranaense de Cascavel.');
var onibus_4 = new onibus("005", "Mascarello Roma 370", 52, "2017", "img/7.jpg",4,800,'A Mascarello Carrocerias e Ônibus Ltda. é uma fabricante brasileira de carrocerias para ônibus, com sede no município paranaense de Cascavel.');
var onibus_5 = new onibus("006", "Mascarello Urbano", 56, "2015", "img/15.jpg",5,700,'O Marcopolo Paradiso é uma carroceria de ônibus rodoviários, apropriados para médias e longas distâncias,fabricada pela empresa gaúcha Marcopolo. Foi produzido desde o lançamento, em 1984, sobre vários chassis de motor traseiro ou central: Mercedes-Benz, Volvo, Scania e Volkswagen. O modelo foi e é produzido em diferentes versões (alturas) e teve reformulações ao longo do tempo.');
var onibus_6 = new onibus("007", "Marcopolo G7 1200", 42, "2015", "img/8.jpg",6,400,'O Marcopolo Paradiso é uma carroceria de ônibus rodoviários, apropriados para médias e longas distâncias,fabricada pela empresa gaúcha Marcopolo. Foi produzido desde o lançamento, em 1984, sobre vários chassis de motor traseiro ou central: Mercedes-Benz, Volvo, Scania e Volkswagen. O modelo foi e é produzido em diferentes versões (alturas) e teve reformulações ao longo do tempo.');
var onibus_7 = new onibus("008", "Marcopolo G7 1050", 32, "2012", "img/9.jpg",2,350,'A Mascarello Carrocerias e Ônibus Ltda. é uma fabricante brasileira de carrocerias para ônibus, com sede no município paranaense de Cascavel.');
var onibus_8 = new onibus("009", "Coletivo Urbano", 70, "2005", "img/10.jpg",8,100,'A Mascarello Carrocerias e Ônibus Ltda. é uma fabricante brasileira de carrocerias para ônibus, com sede no município paranaense de Cascavel.');
var onibus_9 = new onibus("0010", "Neo Bus N9",38, "2010", "img/11.jpg",8,9,'O Marcopolo Paradiso é uma carroceria de ônibus rodoviários, apropriados para médias e longas distâncias,fabricada pela empresa gaúcha Marcopolo. Foi produzido desde o lançamento, em 1984, sobre vários chassis de motor traseiro ou central: Mercedes-Benz, Volvo, Scania e Volkswagen. O modelo foi e é produzido em diferentes versões (alturas) e teve reformulações ao longo do tempo.');
var onibus_10 = new onibus("0011", "Irizar", 52, "2016", "img/12.jpg",3,200,'O Marcopolo Paradiso é uma carroceria de ônibus rodoviários, apropriados para médias e longas distâncias,fabricada pela empresa gaúcha Marcopolo. Foi produzido desde o lançamento, em 1984, sobre vários chassis de motor traseiro ou central: Mercedes-Benz, Volvo, Scania e Volkswagen. O modelo foi e é produzido em diferentes versões (alturas) e teve reformulações ao longo do tempo.');
var onibus_11 = new onibus("0012", "Busscar", 52, "2002", "img/13.jpg",5,250,'O Marcopolo Paradiso é uma carroceria de ônibus rodoviários, apropriados para médias e longas distâncias,fabricada pela empresa gaúcha Marcopolo. Foi produzido desde o lançamento, em 1984, sobre vários chassis de motor traseiro ou central: Mercedes-Benz, Volvo, Scania e Volkswagen. O modelo foi e é produzido em diferentes versões (alturas) e teve reformulações ao longo do tempo.');
var onibus_12 = new onibus("0013", "Mercedes-Benz Monobloco", 54, "1996", "img/14.jpg",4,120,'O Marcopolo Paradiso é uma carroceria de ônibus rodoviários, apropriados para médias e longas distâncias,fabricada pela empresa gaúcha Marcopolo. Foi produzido desde o lançamento, em 1984, sobre vários chassis de motor traseiro ou central: Mercedes-Benz, Volvo, Scania e Volkswagen. O modelo foi e é produzido em diferentes versões (alturas) e teve reformulações ao longo do tempo.');





memoria.push(onibus_1, onibus_2, onibus_3, onibus_4,onibus_5, onibus_6, onibus_7, onibus_8,onibus_9, onibus_10, onibus_11,onibus_12);

memoria.sort(ale);

for (var i = 0; i < 4; i++) {
   var div = document.createElement("DIV");
   var t = document.createElement("P");
   var t_b = document.createElement("P");
   var t_c = document.createElement("P");
   var t_d = document.createElement("P");
   var z = document.createElement("IMG");
   var v = document.createTextNode(memoria[i].nome);
   var v_2 = document.createTextNode(memoria[i].passageiros + ' Passageiros');
   var v_3 = document.createTextNode(memoria[i].ano);
   var v_4 = document.createTextNode('Veiculo: '+memoria[i].Quantidade_veiculo+' Disponivel');
   var btn = document.createElement("BUTTON");
   btn.id = memoria[i].cod;
   var btnt = document.createTextNode("Reservar");
   z.setAttribute("src", memoria[i].img);



   div.appendChild(z);
   div.appendChild(t);
   div.appendChild(t_b);
   div.appendChild(t_c);
   div.appendChild(t_d);
   div.appendChild(btn);
   t.appendChild(v);
   t_b.appendChild(v_4);
   t_c.appendChild(v_2);
   t_d.appendChild(v_3);
   btn.appendChild(btnt);
   
   btn.onclick = function(e) {
      var cod = this.id;
      var busao = memoria.find(function(busao) {
         return busao.cod == this.id;
      }, this);
      document.getElementById("btn_fretar").onclick = function(){
         var Quantidade_veiculo_fretar = document.forms["form_1"]["onibus_qtd"].value;
         var Origem_fretamento = document.forms["form_1"]["origem_fretameto"].value; 

         try{
            if(!Quantidade_veiculo_fretar,!local,!Origem_fretamento) throw "Campos Vazios !!!" ;
            if (Quantidade_veiculo_fretar > busao.Quantidade_veiculo) throw "Quantidade veiculo não disponivel" ;
            if (busao.Quantidade_veiculo == 0) throw "Veiculo não disponivel";
            var recebe = new calculo_itens(0,busao.Quantidade_veiculo,Quantidade_veiculo_fretar,local,3,200,busao.valor_fretamento,busao.passageiros);
            document.querySelector("#Quantidade").innerHTML = "Veiculos Disponivel:" + recebe.calculo_qtd_veiculo();
            document.forms["form_1"]["Total"].value = recebe.calculo_fretamento();
              
            var veiculo_reserva = new veiculoreserva(busao.cod,busao.img,busao.nome,busao.passageiros,Origem_fretamento,Quantidade_veiculo_fretar,recebe.calculo_fretamento(),local);
            Reservas_bus.push(veiculo_reserva);
            localStorage.setItem("Reservas_bus", JSON.stringify(Reservas_bus));
            alert("ônibus Reservado !!! ");
            document.forms["form_1"]["passagens"].value ='R$'+recebe.passagem();
         }
         catch(erro){
            document.getElementById("erro").style.color = 'red';
            document.querySelector("#erro").innerHTML = erro;
         }
      }
      document.querySelector("#img").src = busao.img;
      document.querySelector("#cod").innerHTML = "Numeração de indentificação Veiculo :" + "#" + busao.cod;
      document.querySelector("#nome").innerHTML = "Nome Comercial :" + busao.nome;
      document.querySelector("#passageiros").innerHTML = "Quantidade de Passageiros :" + busao.passageiros;
      document.querySelector("#ano").innerHTML = "Ano Carro: " + busao.ano;
      document.querySelector("#Quantidade").innerHTML = "Veiculos Disponivel :" + busao.Quantidade_veiculo; 
      modal.style.display = "block";
   }
   document.querySelector("#Frota").appendChild(div);
   
}

for (var i = 0; i < memoria.length; i++) {
   var div = document.createElement("DIV");
   var t = document.createElement("P");
   var t_b = document.createElement("P");
   var t_c = document.createElement("P");
   var t_d = document.createElement("P");
   var z = document.createElement("IMG");
   var v = document.createTextNode(memoria[i].nome);
   var v_2 = document.createTextNode(memoria[i].passageiros + ' Passageiros');
   var v_3 = document.createTextNode(memoria[i].ano);
   var v_4 = document.createTextNode('Veiculo: '+memoria[i].Quantidade_veiculo+' Disponivel');
   var btn = document.createElement("BUTTON");
   btn.id = memoria[i].cod;
   var btnt = document.createTextNode("Reservar");
   z.setAttribute("src", memoria[i].img);



   div.appendChild(z);
   div.appendChild(t);
   div.appendChild(t_b);
   div.appendChild(t_c);
   div.appendChild(t_d);
   div.appendChild(btn);
   t.appendChild(v);
   t_b.appendChild(v_4);
   t_c.appendChild(v_2);
   t_d.appendChild(v_3);
   btn.appendChild(btnt);
   
   btn.onclick = function(e) {
      var cod = this.id;
      var busao = memoria.find(function(busao) {
         return busao.cod == this.id;
      }, this);
      document.getElementById("btn_fretar").onclick = function(){
         var Quantidade_veiculo_fretar = document.forms["form_1"]["onibus_qtd"].value;
         var Origem_fretamento = document.forms["form_1"]["origem_fretameto"].value; 

         try{
            if(!Quantidade_veiculo_fretar,!local,!Origem_fretamento) throw "Campos Vazios !!!" ;
            if (Quantidade_veiculo_fretar > busao.Quantidade_veiculo) throw "Quantidade veiculo não disponivel" ;
            if (busao.Quantidade_veiculo == 0) throw "Veiculo não disponivel";
            var recebe = new calculo_itens(0,busao.Quantidade_veiculo,Quantidade_veiculo_fretar,local,3,200,busao.valor_fretamento,busao.passageiros);
            document.querySelector("#Quantidade").innerHTML = "Veiculos Disponivel:" + recebe.calculo_qtd_veiculo();
            document.forms["form_1"]["Total"].value = recebe.calculo_fretamento();
              
            var veiculo_reserva = new veiculoreserva(busao.cod,busao.img,busao.nome,busao.passageiros,Origem_fretamento,Quantidade_veiculo_fretar,recebe.calculo_fretamento(),local);
            Reservas_bus.push(veiculo_reserva);
            localStorage.setItem("Reservas_bus", JSON.stringify(Reservas_bus));
            alert("ônibus Reservado !!! ");
            document.forms["form_1"]["passagens"].value ='R$'+recebe.passagem();
         }
         catch(erro){
            document.getElementById("erro").style.color = 'red';
            document.querySelector("#erro").innerHTML = erro;
         }
      }
      document.querySelector("#img").src = busao.img;
      document.querySelector("#cod").innerHTML = "Numeração de indentificação Veiculo :" + "#" + busao.cod;
      document.querySelector("#nome").innerHTML = "Nome Comercial :" + busao.nome;
      document.querySelector("#passageiros").innerHTML = "Quantidade de Passageiros :" + busao.passageiros;
      document.querySelector("#ano").innerHTML = "Ano Carro: " + busao.ano;
      document.querySelector("#Quantidade").innerHTML = "Veiculos Disponivel :" + busao.Quantidade_veiculo; 
      modal.style.display = "block";
   }
   document.querySelector("#levanta_veiculo").appendChild(div);
   
}
var modal = document.querySelector('#myModal');
var btn = document.querySelector("#myBtn");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
   modal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}
