const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data', 'expenses.json');

function loadExpenses() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function saveExpenses(expenses) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(expenses, null, 2));
}

module.exports = { loadExpenses, saveExpenses };
