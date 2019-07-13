
class logar{
	constructor(verificar){
		this.verificar = verificar;
	}
	criar(){
		var link = document.createElement('a');
		link.onclick = function(){
			var mensagem = confirm('Deseja sair da sua conta');
			if (mensagem) {
				localStorage.clear();
				location.reload();
			}else{
				alert("Opção cancelada");
			}
		}
		var text = document.createTextNode('Sair');
		link.appendChild(text);
	  	document.getElementById('acesso').appendChild(link);
	  	document.getElementById('remover').style.display = 'none';
	}
	comparar(){
		if (!localStorage.getItem(this.verificar)) {
			console.log("Nenhum Usuário logado...");
		}else{
			document.getElementById('liberar').style.display = 'block';
			this.criar(); 
		}
	}
}
var analisar = new logar('firebase:authUser:AIzaSyCTzbBUzvXga4DClVi9MRpr7gnoGdg3C1M:[DEFAULT]'); 
analisar.comparar();
