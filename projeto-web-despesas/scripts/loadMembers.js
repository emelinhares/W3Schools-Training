// scripts/loadMembers.js
function loadMembersContent() {
    fetch('pages/Members/members.html')
      .then(response => response.text())
      .then(html => {
        var membersContent = document.getElementById('members-content');
        membersContent.innerHTML = html;
      })
      .catch(error => console.error('Erro ao carregar o conteúdo de members.html:', error));
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var membersTab = document.getElementById('members');
    membersTab.addEventListener('click', function() {
      loadMembersContent();
    });
  });
  