// scripts/loadExpenses.js
function loadExpensesContent() {
  fetch('projeto-web-despesas\pages\Expenses\expenses.html')
    .then(response => response.text())
    .then(html => {
      var expensesContent = document.getElementById('expenses-content');
      expensesContent.innerHTML = html;
      initializeExpenseForm();
    })
    .catch(error => console.error('Erro ao carregar o conteúdo de expenses.html:', error));
}

function initializeExpenseForm() {
  var amountInput = document.getElementById('amount-input');

  // Converter o valor em reais para o formato "R$ X,XX"
  function formatarValorEmReais(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',');
  }

  amountInput.addEventListener('input', function() {
    var valor = parseFloat(amountInput.value);
    if (!isNaN(valor)) {
      amountInput.value = formatarValorEmReais(valor);
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var expensesTab = document.getElementById('expenses');
  expensesTab.addEventListener('click', function() {
    loadExpensesContent();
  });
});
