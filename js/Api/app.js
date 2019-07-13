(function() {

//Inicializar Firebase
const config = {
    apiKey: "AIzaSyCTzbBUzvXga4DClVi9MRpr7gnoGdg3C1M",
    authDomain: "database-68b8a.firebaseapp.com",
    databaseURL: "https://database-68b8a.firebaseio.com",
    projectId: "database-68b8a",
    storageBucket: "database-68b8a.appspot.com",
    messagingSenderId: "543521076591"
  };
  firebase.initializeApp(config);

  
  // Obter elementos
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');


// Adicionar login do evento
  btnLogin.addEventListener('click', e => {
   
// Obter e-mail e passar
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
  
// Iniciar sessão
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));   
  });

  
// Adicionar evento de inscrição
  btnSignUp.addEventListener('click', e => {
    
// Obter e-mail e passar
    // ALL: verifique se o e-mail é real
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
  
// Iniciar sessão
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

 

  
// Adicionar em tempo real
   firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      alert('Logado com Sucesso !!!');
      window.location.href = 'index.html';
    } else {
      console.log("E-mail ou Senha incorretos...");
    }    
  });
} ());