const express = require("express");
const { findEmployee } = require("../data/employees");
const {
  leaves,
  leaveBalances,
  findLeave,
  leavesForEmployee,
  balanceForEmployee
} = require("../data/leaves");

const router = express.Router();

router.get("/leaves", (_req, res) => {
  res.json({
    resource: "hr.leaves",
    count: leaves.length,
    leaves
  });
});

router.get("/leaves/:id", (req, res) => {
  const leave = findLeave(req.params.id);
  if (!leave) {
    return res.status(404).json({
      resource: "hr.leaves",
      error: `Leave ${req.params.id} was not found`
    });
  }
  res.json({ resource: "hr.leaves", leave });
});

router.get("/employees/:employeeId/leaves", (req, res) => {
  const employee = findEmployee(req.params.employeeId);
  if (!employee) {
    return res.status(404).json({
      resource: "hr.leaves",
      error: `Employee ${req.params.employeeId} was not found`
    });
  }
  const records = leavesForEmployee(employee.id);
  res.json({
    resource: "hr.leaves",
    employeeId: employee.id,
    count: records.length,
    leaves: records
  });
});

router.get("/balances", (_req, res) => {
  res.json({
    resource: "hr.balances",
    count: leaveBalances.length,
    balances: leaveBalances
  });
});

router.get("/employees/:employeeId/balance", (req, res) => {
  const employee = findEmployee(req.params.employeeId);
  if (!employee) {
    return res.status(404).json({
      resource: "hr.balances",
      error: `Employee ${req.params.employeeId} was not found`
    });
  }
  const balance = balanceForEmployee(employee.id);
  res.json({
    resource: "hr.balances",
    employeeId: employee.id,
    balance
  });
});

module.exports = router;
