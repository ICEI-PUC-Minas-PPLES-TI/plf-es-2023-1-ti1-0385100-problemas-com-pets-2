
function ler_dados() {
  let strDados = localStorage.getItem('db');
  let objDados = {};

  if (strDados) {
      objDados = JSON.parse(strDados);
  }
  else {
      objDados = {
              Cadastros: [
                  {
                      "id":1,
                      "usuario": "Usuario1",
                      "senha": 1234
                  },
                  {
                      "id":2,
                      "usuario": "Usuario2",
                      "senha": 2345
                  },
                  {
                      "id":3,
                      "usuario": "Usuario3",
                      "senha": 4321
                  },
                  {
                      "id":4,
                      "usuario": "Usuario4",
                      "senha": 9876
                  }
              ]
      }
  }

  return objDados;
}

function fazer_login() {
  let objDados = ler_dados();

  let strUsuario = document.getElementById('usuario').value;
  let strSenha = document.getElementById('senha').value;
  let usuario_encontrado = false;
  let senha_enoctrada = false;

  for (let i = 0; i < objDados.Cadastros.length; i++) {
    if (objDados.Cadastros[i].usuario === strUsuario) {
      usuario_encontrado = true;
      break;
    }
  }

  for (let i = 0; i < objDados.Cadastros.length; i++) {
    if (objDados.Cadastros[i].senha == strSenha) {
      senha_enoctrada = true;
      break;
    }
  }

  if (usuario_encontrado) {
    alert("Usario encontrado!");
  } else {
    alert("Usario nao encontrado!");
  }

  if (senha_enoctrada) {
    alert("Senha encontrada!");
  } else {
    alert("Senha nao encontrada!");
  }
}

document.getElementById("submit").addEventListener("click", fazer_login);
