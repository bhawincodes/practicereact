const employees = [
  {
    id: "EMP-1001",
    firstName: "Asha",
    lastName: "Mehta",
    email: "asha.mehta@contoso.com",
    department: "Engineering",
    title: "Software Engineer",
    location: "Bengaluru",
    hireDate: "2022-04-11",
    status: "active",
    managerId: "EMP-1003",
    salary: {
      currency: "INR",
      annual: 1800000,
      monthly: 150000
    }
  },
  {
    id: "EMP-1002",
    firstName: "Rohit",
    lastName: "Sharma",
    email: "rohit.sharma@contoso.com",
    department: "Finance",
    title: "Payroll Analyst",
    location: "Mumbai",
    hireDate: "2021-08-02",
    status: "active",
    managerId: "EMP-1003",
    salary: {
      currency: "INR",
      annual: 1440000,
      monthly: 120000
    }
  },
  {
    id: "EMP-1003",
    firstName: "Neha",
    lastName: "Iyer",
    email: "neha.iyer@contoso.com",
    department: "Human Resources",
    title: "HR Manager",
    location: "Hyderabad",
    hireDate: "2019-01-15",
    status: "active",
    managerId: null,
    salary: {
      currency: "INR",
      annual: 2160000,
      monthly: 180000
    }
  }
];

function findEmployee(id) {
  return employees.find((employee) => employee.id === id) || null;
}

module.exports = { employees, findEmployee };
