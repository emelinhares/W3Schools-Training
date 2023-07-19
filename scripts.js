// Variáveis para armazenar as despesas e os moradores
const expenses = [];
const residents = [];
const addedExpenseTypes = new Set();

// Função para adicionar uma despesa
function addExpense(event) {
    event.preventDefault();

    const typeInput = document.getElementById('expense-type');
    const amountInput = document.getElementById('expense-amount');
    const expensesTable = document.getElementById('expenses-list');

    const type = typeInput.value;
    const amount = parseFloat(amountInput.value);

    if (!type || isNaN(amount) || amount <= 0) {
        alert('Por favor, selecione um tipo de despesa e insira um valor numérico válido.');
        return;
    }

    // Verificar se o tipo de despesa já foi adicionado
    if (addedExpenseTypes.has(type)) {
        alert('Esse tipo de despesa já foi adicionado.');
        return;
    }

    // Adicionar o tipo de despesa à lista de tipos adicionados
    addedExpenseTypes.add(type);

    // Adicionar a despesa ao array de despesas
    expenses.push({ type, amount });

    // Criar nova linha na tabela de despesas
    const newRow = expensesTable.insertRow();
    const typeCell = newRow.insertCell(0);
    const amountCell = newRow.insertCell(1);

    typeCell.textContent = type;
    amountCell.textContent = `R$ ${amount.toFixed(2)}`;

    // Limpar os campos do formulário
    typeInput.value = '';
    amountInput.value = '';

    // Calcular a soma total de despesas e atualizar a tabela
    updateTotalExpenses();
}

// Função para adicionar um morador à tabela
function addResidentToTable() {
    const nameInput = document.getElementById('resident-name');
    const salaryInput = document.getElementById('resident-salary');
    const residentsTable = document.getElementById('residents-table');

    const name = nameInput.value;
    const salary = parseFloat(salaryInput.value);

    if (!name || isNaN(salary) || salary <= 0) {
        alert('Por favor, insira um nome de morador e um salário numérico válido.');
        return;
    }

    // Adicionar o morador ao array de moradores
    residents.push({ name, salary });

    // Criar nova linha na tabela de moradores
    const newRow = residentsTable.insertRow();
    const nameCell = newRow.insertCell(0);
    const salaryCell = newRow.insertCell(1);

    nameCell.textContent = name;
    salaryCell.textContent = `R$ ${salary.toFixed(2)}`;

    // Limpar os campos do formulário
    nameInput.value = '';
    salaryInput.value = '';

    // Calcular a soma total dos salários dos moradores e atualizar a tabela
    updateTotalSalaries();
}

// Função para calcular a soma total das despesas e atualizar a tabela
function updateTotalExpenses() {
    const totalExpensesCell = document.getElementById('total-expenses');
    let totalExpenses = 0;

    for (const expense of expenses) {
        totalExpenses += expense.amount;
    }

    totalExpensesCell.textContent = `R$ ${totalExpenses.toFixed(2)}`;
}

// Função para calcular a soma total dos salários dos moradores e atualizar a tabela
function updateTotalSalaries() {
    const totalSalariesCell = document.getElementById('total-salaries');
    let totalSalaries = 0;

    for (const resident of residents) {
        totalSalaries += resident.salary;
    }

    totalSalariesCell.textContent = `R$ ${totalSalaries.toFixed(2)}`;
}

// Evento de submissão do formulário de despesas
const expensesForm = document.getElementById('expenses-form');
expensesForm.addEventListener('submit', function(event) {
    addExpense(event);
    event.preventDefault();
});

// Evento de clique do botão de adicionar morador
const addResidentButton = document.querySelector('button[onclick="addResidentToTable()"]');
addResidentButton.addEventListener('click', function() {
    addResidentToTable();
});
