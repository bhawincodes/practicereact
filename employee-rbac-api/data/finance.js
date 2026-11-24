const compensation = [
  {
    id: "PAY-3001",
    employeeId: "EMP-1001",
    period: "2026-11",
    currency: "INR",
    baseSalary: 150000,
    allowances: [
      { code: "HRA", name: "House Rent Allowance", amount: 45000 },
      { code: "TA", name: "Travel Allowance", amount: 8000 },
      { code: "MA", name: "Medical Allowance", amount: 5000 }
    ],
    deductions: [
      { code: "PF", name: "Provident Fund", amount: 18000 },
      { code: "TDS", name: "Tax Deducted at Source", amount: 22000 }
    ],
    gross: 208000,
    net: 168000
  },
  {
    id: "PAY-3002",
    employeeId: "EMP-1002",
    period: "2026-11",
    currency: "INR",
    baseSalary: 120000,
    allowances: [
      { code: "HRA", name: "House Rent Allowance", amount: 36000 },
      { code: "TA", name: "Travel Allowance", amount: 6000 },
      { code: "LTA", name: "Leave Travel Allowance", amount: 4000 }
    ],
    deductions: [
      { code: "PF", name: "Provident Fund", amount: 14400 },
      { code: "TDS", name: "Tax Deducted at Source", amount: 14000 }
    ],
    gross: 166000,
    net: 137600
  },
  {
    id: "PAY-3003",
    employeeId: "EMP-1003",
    period: "2026-11",
    currency: "INR",
    baseSalary: 180000,
    allowances: [
      { code: "HRA", name: "House Rent Allowance", amount: 54000 },
      { code: "TA", name: "Travel Allowance", amount: 10000 },
      { code: "SA", name: "Special Allowance", amount: 15000 }
    ],
    deductions: [
      { code: "PF", name: "Provident Fund", amount: 21600 },
      { code: "TDS", name: "Tax Deducted at Source", amount: 32000 }
    ],
    gross: 259000,
    net: 205400
  }
];

const allowanceCatalog = [
  { code: "HRA", name: "House Rent Allowance", taxable: true, description: "Housing support paid with monthly salary" },
  { code: "TA", name: "Travel Allowance", taxable: false, description: "Commute and local travel support" },
  { code: "MA", name: "Medical Allowance", taxable: false, description: "Outpatient medical support" },
  { code: "LTA", name: "Leave Travel Allowance", taxable: false, description: "Travel during approved leave" },
  { code: "SA", name: "Special Allowance", taxable: true, description: "Role-based extra pay" }
];

function findCompensation(id) {
  return compensation.find((record) => record.id === id) || null;
}

function compensationForEmployee(employeeId) {
  return compensation.filter((record) => record.employeeId === employeeId);
}

module.exports = {
  compensation,
  allowanceCatalog,
  findCompensation,
  compensationForEmployee
};
