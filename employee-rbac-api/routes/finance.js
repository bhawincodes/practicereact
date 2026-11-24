const express = require("express");
const { findEmployee } = require("../data/employees");
const {
  compensation,
  allowanceCatalog,
  findCompensation,
  compensationForEmployee
} = require("../data/finance");

const router = express.Router();

router.get("/compensation", (_req, res) => {
  res.json({
    resource: "finance.compensation",
    count: compensation.length,
    compensation
  });
});

router.get("/compensation/:id", (req, res) => {
  const record = findCompensation(req.params.id);
  if (!record) {
    return res.status(404).json({
      resource: "finance.compensation",
      error: `Compensation ${req.params.id} was not found`
    });
  }
  res.json({ resource: "finance.compensation", compensation: record });
});

router.get("/employees/:employeeId/compensation", (req, res) => {
  const employee = findEmployee(req.params.employeeId);
  if (!employee) {
    return res.status(404).json({
      resource: "finance.compensation",
      error: `Employee ${req.params.employeeId} was not found`
    });
  }
  const records = compensationForEmployee(employee.id);
  res.json({
    resource: "finance.compensation",
    employeeId: employee.id,
    count: records.length,
    compensation: records
  });
});

router.get("/allowances", (_req, res) => {
  res.json({
    resource: "finance.allowances",
    count: allowanceCatalog.length,
    allowances: allowanceCatalog
  });
});

module.exports = router;
