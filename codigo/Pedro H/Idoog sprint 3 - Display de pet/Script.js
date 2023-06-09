let debug = document.getElementById("debug");

function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            contatos: [
                { nome: "Bnuy", especie: "Coelho", idade: "Adulto", raca: "Holland Lop",  descricao: "Bnuy é um coelho branco de orelhas cinza, ele ama alface e tem medo de gatos", img: "Assests\\imgs\\buny.jpg", pag_dono: "exemplo-1.com", pag_pet: "exemplo-3.com"},
                { nome: "Smelly", especie : "Gato",idade: "Adulto", raca: "SRD",descricao: "Smelly é um gato laranja que gosta de sair, cuidado, ele não é bom com crianças", img: "Assests\\imgs\\smelly.jpg", pag_dono: "exemplo-2.com", pag_pet: "exemplo-4.com"},
                { nome: "Cheetos",especie: "Cachorro", idade: "Filhote", raca: "Terrier brasileiro",descricao: "O Cheetos gosta de ficar dentro de casa mas morre de medo de aspirador", img: "Assests\\imgs\\cheetos.jpg", pag_dono: "exemplo-3.com", pag_pet: "exemplo-5.com" },
            ]
        }
    }

    return objDados;
}

function imprime_dados_2() {
    let objDados = leDados();
    let element = "";
    console.log(objDados);


    for (var i = 0; i < objDados.contatos.length; ++i) {
        //console.log(objDados.contatos[i]);
        //console.log(objDados.contatos[i].nome);
        //Faz um loop por todos objetos no json e coloca o texto dele no innerHTML de cada nome/descricao das capsulas de pets
        element = document.getElementById("nome-" + i);
        element.innerHTML = objDados.contatos[i].nome;

        element = document.getElementById("desc-" + i);
        element.innerHTML = objDados.contatos[i].descricao;

        element = document.getElementById("info-" + i);
        element.innerHTML = objDados.contatos[i].especie + " / "+ "Nascido em: "+ objDados.contatos[i].nascimento + " / " + objDados.contatos[i].raca;

        element = document.getElementById("conheca-" + i);
        element.href = objDados.contatos[i].pag_pet;

        element = document.getElementById("dono-" + i);
        element.href = objDados.contatos[i].pag_dono;

        element = document.getElementById("img-" + i);
        element.src = objDados.contatos[i].img;
    }
}

imprime_dados_2()