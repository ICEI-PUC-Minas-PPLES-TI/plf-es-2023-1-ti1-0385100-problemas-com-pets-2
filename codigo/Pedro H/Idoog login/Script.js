
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

    if(strUsuario in objDados.Cadastros){
        alert("usuario tem");
    }
    if(strSenha in objDados.Cadastros){
        alert("senha tem");
    }

}

document.getElementById("submit").addEventListener("click", fazer_login);
