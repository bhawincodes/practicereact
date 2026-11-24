const express = require("express");
const employeesRouter = require("./routes/employees");
const hrRouter = require("./routes/hr");
const financeRouter = require("./routes/finance");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/", (_req, res) => {
  res.json({
    name: "employee-rbac-api",
    note: "Each prefix is a separate resource boundary for Azure RBAC.",
    resources: {
      employees: {
        prefix: "/backend/employees",
        routes: ["GET /backend/employees", "GET /backend/employees/:id"]
      },
      hr: {
        prefix: "/backend/hr",
        routes: [
          "GET /backend/hr/leaves",
          "GET /backend/hr/leaves/:id",
          "GET /backend/hr/employees/:employeeId/leaves",
          "GET /backend/hr/balances",
          "GET /backend/hr/employees/:employeeId/balance"
        ]
      },
      finance: {
        prefix: "/backend/finance",
        routes: [
          "GET /backend/finance/compensation",
          "GET /backend/finance/compensation/:id",
          "GET /backend/finance/employees/:employeeId/compensation",
          "GET /backend/finance/allowances"
        ]
      }
    }
  });
});

app.use("/backend/employees", employeesRouter);
app.use("/backend/hr", hrRouter);
app.use("/backend/finance", financeRouter);

app.use((req, res) => {
  res.status(404).json({ error: `No route for ${req.method} ${req.path}` });
});

app.listen(port, () => {
  console.log(`employee-rbac-api listening on http://localhost:${port}`);
});
