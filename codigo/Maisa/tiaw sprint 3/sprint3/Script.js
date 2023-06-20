function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    } else {
        objDados = {
            doador: [
                {
                    nome: "Guilherme Benítez",
                    petdoado: "Bnuy",
                    história: "Bnuy foi um presente de aniversário que me deixou muito feliz, cuidei dele com muito amor por 3 meses mas infelizmente tenho sofrido fortes crises de alergia desde sua chegada, e descobri que é por causa do pelo. Espero que Bnuy posso encontrar outro lar que o ame tanto quanto eu que possa lhe dar o cuidado que merece.",
                    comentário: "PS: Mantenha ele longe de gatos!! E não esqueça de comprar muita alface.",
                    img: "/img/coelho.jpg"
                },

                {
                    nome: "Clara Leal",
                    petdoado: "Smelly",
                    história: "Encontrei Smelly na rua dentro de uma ciaxa de papelão, provavlemnte abandonado pelos antigos donos, levei no veterinário e forneci os cuidados que pude, mas não tenho condições de ter uam animalzinho agora, espeqe que ele possa ser adotado por alguem que cuide bem dele e não o deixe se sentir abandonado novamente.",
                    comentário: "PS: Ele é um gatinho muito medroso, mas quando se acostuma com você é muito carinhoso.",
                    img: "/img/gato.jpg"
                },
                {
                    nome: "Lucas Araujo",
                    petdoado: "Cheetos",
                    história: "Estou doando esse lindo e amoroso Cãozinho, até hoje criado com muito carinho por mim e minhas filhas, mas infelizmente agora que vivo sozinho não consigo mais lhe dar o cuidado necessário. Ele merece um novo lar que dê a ele a mesma atenção e amor que teve até hoje, onde possa fazer parte de uma família.",
                    comentário: "PS: Ele gosta de carinho na barriga, e de passear em parques com muitas árvores",
                    img: "/img/cach.jpg"
                }
            ]
        };
    }

    return objDados;
}

function imprime_dados() {
    let objDados = leDados();

    for (let i = 0; i < objDados.doador.length; i++) {
        let elementNome = document.getElementById("nome-" + i);
        elementNome.innerHTML = objDados.doador[i].nome;

        let elementPetDoado = document.getElementById("desc-" + i);
        elementPetDoado.innerHTML = objDados.doador[i].petdoado;

        let elementHistória = document.getElementById("hist-" + i);
        elementHistória.innerHTML = objDados.doador[i].história;

        let elementComentário = document.getElementById("com-" + i);
        elementComentário.innerHTML = objDados.doador[i].comentário;

        let elementImagem = document.getElementById("img-" + i);
        elementImagem.src = objDados.doador[i].img;
    }
}

imprime_dados();