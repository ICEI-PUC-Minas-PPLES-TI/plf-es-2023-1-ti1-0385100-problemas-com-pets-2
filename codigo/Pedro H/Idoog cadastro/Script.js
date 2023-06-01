
function ler_dados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            Cadastros: [
            ]
        }
    }

    return objDados;
}


function salvaDados(dados) { 
    localStorage.setItem('db', JSON.stringify(dados));
}

function incluirCadastro() {
    let objDados = ler_dados();

    // Incluir um novo Cadastro
    let strUsuario = document.getElementById('usuario').value;
    let strSenha = (document.getElementById('senha').value == 1);


    let novoCadastro = {
        usuario: strUsuario,
        senha: strSenha,

    };
    objDados.Cadastros.push(novoCadastro);

    salvaDados(objDados);

}

document.getElementById("submit").addEventListener("click", incluirCadastro)