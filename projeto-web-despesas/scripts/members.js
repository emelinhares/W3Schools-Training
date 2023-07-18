// members.js

// Função para adicionar membro na tabela
function adicionarMembro(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name-input');
  const salaryInput = document.getElementById('salary-input');

  const memberName = nameInput.value;
  const memberSalary = parseFloat(salaryInput.value);

  if (!memberName || isNaN(memberSalary)) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

  const tableBody = document.getElementById('members-table-body');

  const newRow = document.createElement('tr');

  const idCell = document.createElement('td');
  idCell.textContent = generateID(); // Gerar ID único de 3 números

  const nameCell = document.createElement('td');
  nameCell.textContent = memberName;

  const salaryCell = document.createElement('td');
  salaryCell.textContent = 'R$ ' + memberSalary.toFixed(2);

  newRow.appendChild(idCell);
  newRow.appendChild(nameCell);
  newRow.appendChild(salaryCell);

  tableBody.appendChild(newRow);

  nameInput.value = '';
  salaryInput.value = '';
}

// Função para gerar ID único de 3 números
function generateID() {
  return Math.floor(Math.random() * 900) + 100;
}

// Captura o formulário e adiciona um listener para o evento de submit
const form = document.getElementById('members-form');
form.addEventListener('submit', adicionarMembro);
