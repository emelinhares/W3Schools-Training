// expenses.js

// Função para adicionar despesa na tabela
function adicionarDespesa(event) {
  event.preventDefault();

  const expenseSelect = document.getElementById('expense-select');
  const amountInput = document.getElementById('amount-input');

  const expenseName = expenseSelect.value;
  const expenseValue = parseFloat(amountInput.value);

  if (!expenseName || isNaN(expenseValue)) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

  const tableBody = document.getElementById('expenses-table-body');

  const newRow = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = expenseName;

  const valueCell = document.createElement('td');
  valueCell.textContent = 'R$ ' + expenseValue.toFixed(2);

  newRow.appendChild(nameCell);
  newRow.appendChild(valueCell);

  tableBody.appendChild(newRow);

  expenseSelect.value = '';
  amountInput.value = '';
}

// Captura o formulário e adiciona um listener para o evento de submit
const form = document.getElementById('expenses-form');
form.addEventListener('submit', adicionarDespesa);
