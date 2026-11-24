const leaves = [
  {
    id: "LV-5001",
    employeeId: "EMP-1001",
    type: "annual",
    startDate: "2026-12-01",
    endDate: "2026-12-05",
    days: 5,
    status: "approved",
    reason: "Family travel",
    approverId: "EMP-1003"
  },
  {
    id: "LV-5002",
    employeeId: "EMP-1002",
    type: "sick",
    startDate: "2026-11-18",
    endDate: "2026-11-19",
    days: 2,
    status: "approved",
    reason: "Fever",
    approverId: "EMP-1003"
  },
  {
    id: "LV-5003",
    employeeId: "EMP-1001",
    type: "casual",
    startDate: "2026-11-27",
    endDate: "2026-11-27",
    days: 1,
    status: "pending",
    reason: "Personal errand",
    approverId: "EMP-1003"
  },
  {
    id: "LV-5004",
    employeeId: "EMP-1003",
    type: "annual",
    startDate: "2026-12-22",
    endDate: "2026-12-26",
    days: 5,
    status: "pending",
    reason: "Year-end break",
    approverId: null
  }
];

const leaveBalances = [
  { employeeId: "EMP-1001", annual: 12, sick: 8, casual: 6, usedAnnual: 5, usedSick: 0, usedCasual: 0 },
  { employeeId: "EMP-1002", annual: 14, sick: 8, casual: 6, usedAnnual: 0, usedSick: 2, usedCasual: 1 },
  { employeeId: "EMP-1003", annual: 18, sick: 10, casual: 6, usedAnnual: 3, usedSick: 1, usedCasual: 2 }
];

function findLeave(id) {
  return leaves.find((leave) => leave.id === id) || null;
}

function leavesForEmployee(employeeId) {
  return leaves.filter((leave) => leave.employeeId === employeeId);
}

function balanceForEmployee(employeeId) {
  return leaveBalances.find((balance) => balance.employeeId === employeeId) || null;
}

module.exports = {
  leaves,
  leaveBalances,
  findLeave,
  leavesForEmployee,
  balanceForEmployee
};
