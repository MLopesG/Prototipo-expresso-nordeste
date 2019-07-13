function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      testAPI();
      button_troca();
    } else {
      console.log('Não conectado via facebook');
       document.getElementById('button_novo').style.display = 'none';
    }
  }
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  fbAsyncInit = function() {
  FB.init({
    appId      : '1570606389649878',
    cookie     : true,                   
    xfbml      : true,  
    version    : 'v2.10' 
  });


  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

   (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  function testAPI() {

    console.log('Welcome!  Fetching your information.... ');
     FB.api('/me?fields=name,email,gender,birthday,link', function(response) {
      console.log(response);  

      var link = document.createElement('a');
      link.onclick = function(){
        var mensagem = confirm('Deseja sair da sua conta');
        if (mensagem) {
          Logout();
        }else{
          alert("Opção cancelada");
        }
      }
      var text = document.createTextNode('Sair');
      link.appendChild(text);
      document.getElementById('acesso').appendChild(link);
      document.getElementById('remover').style.display = 'none';
      document.getElementById('liberar').style.display = 'block';
       }, { scope: 'email, user_about_me, user_birthday, user_hometown' });
  }
  function Logout() {
    FB.logout(function(){document.location.reload();});
  }
  function button_troca(){
    document.getElementById('button_novo').style.display = 'block';
    document.getElementById('muda').style.display = 'none';
  }