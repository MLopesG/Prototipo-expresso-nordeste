function abrir(){
   document.getElementById("abrir").style.display = "block";
}
function fechar(){
   document.getElementById("abrir").style.display = "none";
}

document.querySelector('#ler').onclick = function(){
  if( document.getElementById("abrir").style.display != "block"){
    abrir();  
  }else{
    fechar();
  }
};

