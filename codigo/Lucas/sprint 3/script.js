function enviarComentario() {
  var comment = document.getElementById("commentBox").value;
  var ongSelect = document.getElementById("ongSelect");
  var ongName = ongSelect.options[ongSelect.selectedIndex].text;

  var commentWithOng = ongName + ": " + comment;
  var comments = localStorage.getItem("comments");
  comments = comments ? JSON.parse(comments) : [];

  comments.push(commentWithOng);

  localStorage.setItem("comments", JSON.stringify(comments));

  alert("Comentário enviado");

  document.getElementById("commentBox").value = "";
}


window.addEventListener('DOMContentLoaded', function () {
  var commentsContainer = document.getElementById('commentsContainer');

  // Recupera os comentários do localStorage
  var comments = localStorage.getItem("comments");
  comments = comments ? JSON.parse(comments) : [];

  for (var i = 0; i < comments.length; i++) {
    var card = createCard(comments[i]);
    commentsContainer.appendChild(card);
  }

  function createCard(comment) {
    var card = document.createElement('div');
    card.classList.add('card');

    var commentElement = document.createElement('p');
    commentElement.textContent = comment;

    card.appendChild(commentElement);

    return card;
  }
});

function verComentarios() {
  window.location.href = "ver_comentarios.html";
}



