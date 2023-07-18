// scripts/main.js
document.addEventListener('DOMContentLoaded', function() {
  var contentDiv = document.getElementById('content');

  function loadContent(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        contentDiv.innerHTML = html;
      })
      .catch(error => console.error('Erro ao carregar o conteúdo:', error));
  }

  // Carregar o conteúdo da página Home por padrão
  loadContent('pages/home.html');

  // Adicionar eventos de clique nos links do menu para carregar o conteúdo das páginas correspondentes
  var links = document.querySelectorAll('nav a');
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var href = this.getAttribute('href');
      loadContent(href);
    });
  });
});
