import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import EmployeesPage from './pages/EmployeesPage'
import FinancePage from './pages/FinancePage'
import HrPage from './pages/HrPage'
import './App.css'

const links = [
  { to: '/employees', label: 'Employees' },
  { to: '/hr', label: 'HR' },
  { to: '/finance', label: 'Finance' },
]

export default function App() {
  return (
    <div className="app">
      <nav>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/employees" replace />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/hr" element={<HrPage />} />
          <Route path="/finance" element={<FinancePage />} />
        </Routes>
      </main>
    </div>
  )
}
