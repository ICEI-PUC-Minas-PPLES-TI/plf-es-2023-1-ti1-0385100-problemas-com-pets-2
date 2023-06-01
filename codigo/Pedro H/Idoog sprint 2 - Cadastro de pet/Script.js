
function ler_dados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            contatos: [
            ]
        }
    }

    return objDados;
}


function salvaDados(dados) { 
    localStorage.setItem('db', JSON.stringify(dados));
}

function incluirContato() {
    let objDados = ler_dados();

    // Incluir um novo contato
    let strNome = document.getElementById('nome-pet').value;
    let strSexo = (document.getElementById('sexo-pet').value == 1)?"M":"F";
    let strEndereco = document.getElementById('endereco-pet').value;
    let strTelefone = document.getElementById('telefone-pet').value;
    let strCuidados = document.getElementById('cuidados-pet').value;
    let strDescricao = document.getElementById('descricao-pet').value;
    let strImg = document.getElementById("img-pet").files[0].name;

    let novoContato = {
        nome: strNome,
        sexo: strSexo,
        telefone: strTelefone,
        endereco: strEndereco,
        cuidados: strCuidados,
        descricao: strDescricao,
        img: strImg

    };
    objDados.contatos.push(novoContato);

    salvaDados(objDados);

}

document.getElementById("submit").addEventListener("click", incluirContato)