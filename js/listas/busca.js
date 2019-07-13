class busca {
  constructor(nome, vetor) {
    this.nome = nome;
    this.vetor = vetor;
  }
  pesquisar() {
    for (var i = 0; i < this.vetor.length; i++) {
      if (this.nome == this.vetor[i].nome) {
        document.getElementById('img_veiculo').src = this.vetor[i].img;
        document.getElementById('Cod').innerHTML = 'Código de indentificação:' + this.vetor[i].cod;
        document.getElementById('Nome').innerHTML = 'Nome Veiculo: '+this.vetor[i].nome;
        document.getElementById('ano').innerHTML = 'Ano Veiculos : '+ this.vetor[i].ano;
        document.getElementById('capacidade').innerHTML = 'Capacidade passageiros: '+this.vetor[i].passageiros;
        document.getElementById('Anos').innerHTML = 'Ano fabricação veiculo: '+ this.vetor[i].ano;
        document.getElementById('qtd').innerHTML = 'Quantidade Frota: ' + this.vetor[i].Quantidade_veiculo + ' Disponivel';
        document.getElementById('descrição').innerHTML = 'Descrição Veiculo: '+ this.vetor[i].sobre;
      }
    }
  }
}

document.querySelector('#encontrar').onclick = function() {
  var nome = document.forms['veiculo_busca']['pesquisa'].value;
  var entra = new busca(nome, memoria);
  entra.pesquisar();
}