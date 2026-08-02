const { CATEGORY_NAMES } = Categorizer;

function formatCurrency(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function monthKey(dateStr) {
  return dateStr.slice(0, 7); // YYYY-MM
}

function monthLabel(key) {
  const [year, month] = key.split('-');
  const date = new Date(Number(year), Number(month) - 1, 1);
  const label = date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

async function api(path, options) {
  const res = await fetch(`/api${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`Falha na requisição: ${res.status}`);
  }
  return res.status === 204 ? null : res.json();
}

let expenses = [];

const form = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const dateInput = document.getElementById('date');
const categorySelect = document.getElementById('category');
const monthFilter = document.getElementById('month-filter');
const expenseList = document.getElementById('expense-list');
const emptyState = document.getElementById('empty-state');
const monthTotalEl = document.getElementById('month-total');
const summaryEl = document.getElementById('summary');
const countLabel = document.getElementById('count-label');

async function init() {
  CATEGORY_NAMES.forEach((cat) => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  });

  dateInput.value = new Date().toISOString().slice(0, 10);

  form.addEventListener('submit', onAddExpense);
  monthFilter.addEventListener('change', render);

  try {
    expenses = await api('/expenses');
  } catch (err) {
    console.error(err);
    expenses = [];
  }
  render();
}

async function onAddExpense(e) {
  e.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const date = dateInput.value;
  const category = categorySelect.value;

  if (!description || !amount || amount <= 0 || !date) return;

  try {
    const expense = await api('/expenses', {
      method: 'POST',
      body: JSON.stringify({ description, amount, date, category }),
    });
    expenses.push(expense);
  } catch (err) {
    console.error(err);
    alert('Não foi possível salvar o gasto.');
    return;
  }

  form.reset();
  dateInput.value = date;
  categorySelect.value = 'auto';
  descriptionInput.focus();

  render();
}

async function deleteExpense(id) {
  try {
    await api(`/expenses/${id}`, { method: 'DELETE' });
  } catch (err) {
    console.error(err);
    alert('Não foi possível excluir o gasto.');
    return;
  }
  expenses = expenses.filter((exp) => exp.id !== id);
  render();
}

async function changeCategory(id, category) {
  try {
    const updated = await api(`/expenses/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ category }),
    });
    const exp = expenses.find((e) => e.id === id);
    if (exp) exp.category = updated.category;
  } catch (err) {
    console.error(err);
    alert('Não foi possível atualizar a categoria.');
    return;
  }
  render();
}

function renderMonthOptions() {
  const currentMonth = new Date().toISOString().slice(0, 7);
  const months = new Set(expenses.map((exp) => monthKey(exp.date)));
  months.add(currentMonth);

  const sorted = [...months].sort().reverse();
  const previousValue = monthFilter.value || currentMonth;

  monthFilter.innerHTML = '';
  sorted.forEach((key) => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = monthLabel(key);
    monthFilter.appendChild(opt);
  });

  monthFilter.value = sorted.includes(previousValue) ? previousValue : sorted[0];
}

function render() {
  renderMonthOptions();
  const selectedMonth = monthFilter.value;
  const filtered = expenses
    .filter((exp) => monthKey(exp.date) === selectedMonth)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  renderList(filtered);
  renderSummary(filtered);
}

function renderList(filtered) {
  expenseList.innerHTML = '';
  emptyState.hidden = filtered.length > 0;
  countLabel.textContent = filtered.length
    ? `${filtered.length} lançamento${filtered.length > 1 ? 's' : ''}`
    : '';

  filtered.forEach((exp) => {
    const tr = document.createElement('tr');

    const dateTd = document.createElement('td');
    dateTd.textContent = new Date(exp.date + 'T00:00:00').toLocaleDateString('pt-BR');
    tr.appendChild(dateTd);

    const descTd = document.createElement('td');
    descTd.textContent = exp.description;
    tr.appendChild(descTd);

    const catTd = document.createElement('td');
    const catSelect = document.createElement('select');
    catSelect.className = 'category-select';
    CATEGORY_NAMES.forEach((cat) => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      if (cat === exp.category) opt.selected = true;
      catSelect.appendChild(opt);
    });
    catSelect.addEventListener('change', (e) => changeCategory(exp.id, e.target.value));
    catTd.appendChild(catSelect);
    tr.appendChild(catTd);

    const amountTd = document.createElement('td');
    amountTd.className = 'align-right';
    amountTd.textContent = formatCurrency(exp.amount);
    tr.appendChild(amountTd);

    const sourceTd = document.createElement('td');
    sourceTd.textContent = exp.source === 'whatsapp' ? '💬 WhatsApp' : '🌐 Web';
    tr.appendChild(sourceTd);

    const actionsTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = 'Excluir';
    deleteBtn.addEventListener('click', () => deleteExpense(exp.id));
    actionsTd.appendChild(deleteBtn);
    tr.appendChild(actionsTd);

    expenseList.appendChild(tr);
  });
}

function renderSummary(filtered) {
  const total = filtered.reduce((sum, exp) => sum + exp.amount, 0);
  monthTotalEl.textContent = formatCurrency(total);

  const totalsByCategory = {};
  filtered.forEach((exp) => {
    totalsByCategory[exp.category] = (totalsByCategory[exp.category] || 0) + exp.amount;
  });

  const rows = Object.entries(totalsByCategory).sort((a, b) => b[1] - a[1]);

  summaryEl.innerHTML = '';
  if (rows.length === 0) {
    summaryEl.innerHTML = '<p class="empty-state">Sem dados para exibir.</p>';
    return;
  }

  rows.forEach(([category, value]) => {
    const percent = total > 0 ? (value / total) * 100 : 0;

    const row = document.createElement('div');
    row.className = 'summary-row';

    const label = document.createElement('div');
    label.className = 'summary-label';
    label.innerHTML = `<span>${category}</span><span>${formatCurrency(value)}</span>`;

    const bar = document.createElement('div');
    bar.className = 'summary-bar';
    const fill = document.createElement('div');
    fill.className = 'summary-bar-fill';
    fill.style.width = `${percent}%`;
    bar.appendChild(fill);

    row.appendChild(label);
    row.appendChild(bar);
    summaryEl.appendChild(row);
  });
}

init();
