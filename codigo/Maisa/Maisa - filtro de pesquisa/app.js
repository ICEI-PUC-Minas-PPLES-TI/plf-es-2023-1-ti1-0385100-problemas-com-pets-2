
const Teste = () => {
  alert('hello!');
}

const animals = [
  {
    animal: "Cachorro",
    idade: "Adulto",
    abrigo: "Abrigo 1",
    raca: "Sem raça",
    imagem: "img/img2.jpg"
  },
  {
    animal: "Gato",
    idade: "Filhote",
    abrigo: "Abrigo 1",
    raca: "Sem raça",
    imagem: "img/img4.jpg"
  }

]

var filteredAnimals = [];

const printAllAnimals = () => {
  console.log(animals);
  console.log(filteredAnimals);
}

var animal = "";
var idade = "";
var abrigo = "";
var raca = "";

const setAnimal = () => {
  animal = $('#animalSelect').val();
};

const setIdade = () => {
  idade = $('#idadeSelect').val();
};

const setAbrigo = () => {
  abrigo = $('#abrigoSelect').val();
};

const setRaca = () => {
  raca = $('#racaSelect').val();
};



const printFilters = () => {
  console.log(animal, idade, abrigo, raca);
};

const clearAll = () => {
  animal = "";
  idade = "";
  abrigo = "";
  raca = "";

  document.getElementById('animalSelect').selectedIndex = 0;
  document.getElementById('idadeSelect').selectedIndex = 0;
  document.getElementById('abrigoSelect').selectedIndex = 0;
  document.getElementById('racaSelect').selectedIndex = 0;

  document.getElementById('tela').innerHTML = '';


}

const checkSelectFields = () => {
  if(animal == "" || idade == "" || abrigo == "" || raca == "") {
    alert("Falha na pesquisa, preencha todos os campos!");
  }
  else {
    showAnimals();
  }
}

const showAnimals = () => {
  filteredAnimals = [];
  for (i=0; i < animals.length; i++){
    console.log("ENTREI NO FOR", i, animals[i]);
    if(animals[i].animal == animal && animals[i].idade == idade && animals[i].abrigo == abrigo && animals[i].raca == raca){
      console.log("ENTREI NO IF");
      filteredAnimals.push(animals[i]);
    }
  }
  console.log(filteredAnimals);
  filtrar();
}




function filtrar() {
  let tela = document.getElementById('tela');
  let strHtml = '';
  if (filteredAnimals.length < 1){
   alert("Nenhum resultado encontrado")
  }
  else {
    for (i = 0; i < filteredAnimals.length; i++) {
      strHtml += `<p>${filteredAnimals[i].animal} , ${filteredAnimals[i].abrigo} , ${filteredAnimals[i].idade} , ${filteredAnimals[i].raca}</p>`
      strHtml += `<img src="${filteredAnimals[i].imagem}" alt="${filteredAnimals[i].animal}">`;
    }
    tela.innerHTML = strHtml;
  }
}

