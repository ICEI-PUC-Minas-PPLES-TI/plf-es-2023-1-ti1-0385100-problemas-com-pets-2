var cardsContainer = document.getElementById("cards-container");

var cards = [
  {
    image: "img/CasaMia.jpg",
    title: "Casa Mia",
    description: "A CASA MIA começou a funcionar em fevereiro de 2019, no apartamento de Saskia",
    button: "Veja Mais",
    link: "https://casamiabh.com.br",
  },
  {
    image: "img/Caomer.jpg",
    title: "Projeto Cãomer",
    description: "O Projeto Cãomer foi iniciado no ano de 2015 por uma moradora do bairro Jardim Canadá.",
    button: "Veja Mais",
    link: "https://projetocaomer.com.br/"
  },
  {
    image: "img/Casadosanjos.jpg",
    title: "Casa dos Anjos",
    description: "A Casa dos Anjos é uma organização de proteção animal fundada em 2012 em Macaé, RJ.",
    button: "Veja Mais",
    link: "https://casadosanjos.netlify.app/",
  },
];


cards.forEach((card) => {
  // cria os elementos de card
  var cardElement = document.createElement("div");
  var imageElement = document.createElement("img");
  var bodyElement = document.createElement("div");
  var titleElement = document.createElement("h5");
  var textElement = document.createElement("p");
  var buttonElement = document.createElement("button");

  // define as classes dos elementos
  cardElement.classList.add("card");
  imageElement.setAttribute("src", card.image);
  imageElement.classList.add("card-img-top");
  bodyElement.classList.add("card-body");
  titleElement.classList.add("card-title");
  textElement.classList.add("card-text");
  buttonElement.classList.add("btn", "btn-primary");

  // define o conteúdo dos elementos
  titleElement.textContent = card.title;
  textElement.textContent = card.description;
  buttonElement.textContent = card.button;

  buttonElement.addEventListener("click", function() {
    window.location.href = card.link;
  });
  // anexa os elementos filho ao elemento de card
  bodyElement.appendChild(titleElement);
  bodyElement.appendChild(textElement);
  bodyElement.appendChild(buttonElement);
  cardElement.appendChild(imageElement);
  cardElement.appendChild(bodyElement);

  // anexa o elemento de card ao contêiner de cards
  cardsContainer.appendChild(cardElement);
});