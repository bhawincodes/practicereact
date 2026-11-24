const express = require("express");
const { employees, findEmployee } = require("../data/employees");

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({
    resource: "employees",
    count: employees.length,
    employees
  });
});

router.get("/:id", (req, res) => {
  const employee = findEmployee(req.params.id);
  if (!employee) {
    return res.status(404).json({
      resource: "employees",
      error: `Employee ${req.params.id} was not found`
    });
  }
  res.json({ resource: "employees", employee });
});

module.exports = router;
