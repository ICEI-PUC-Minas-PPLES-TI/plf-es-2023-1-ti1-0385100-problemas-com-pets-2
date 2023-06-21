function readJSONFile(filename, callback) { //ESSA FUNCIONAAA////
    var file = new XMLHttpRequest();

    file.overrideMimeType("application/json");
    file.open("GET", filename, true);

    file.onreadystatechange = function() {
      if (file.readyState === 4 && file.status == "200") {
        callback(JSON.parse(file.responseText));
      }
};

    file.send(null);
  }
  
  function fazer_login(objDados) {
    document.getElementById("submit").addEventListener("click", function() {
      let strUsuario = document.getElementById('usuario').value;
      let strSenha = document.getElementById('senha').value;
    
      console.log(objDados.Cadastros);
      console.log(strUsuario);
    
      if (objDados.Cadastros.some(cadastro => cadastro.usuario === strUsuario)) {
        alert("Usuário encontrado");
      } else {
        alert("Usuário não encontrado");
      }
    
      if (objDados.Cadastros.some(cadastro => cadastro.senha === strSenha)) {
        alert("Senha encontrada");
      } else {
        alert("Senha não encontrada");
      }
    });
  }
  
  readJSONFile("dados.json", function(data) {
    fazer_login(data);
  });
  