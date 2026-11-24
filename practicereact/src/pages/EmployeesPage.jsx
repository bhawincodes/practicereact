import DataTable, { Loading, Status } from '../components/DataTable'
import { useApi } from '../hooks/useApi'
import { inr } from '../api'

const columns = [
  { key: 'id', label: 'Employee ID', render: (row) => row.id },
  {
    key: 'name',
    label: 'Name',
    render: (row) => `${row.firstName} ${row.lastName}`,
  },
  { key: 'title', label: 'Title', render: (row) => row.title },
  { key: 'department', label: 'Department', render: (row) => row.department },
  {
    key: 'monthly',
    label: 'Monthly',
    align: 'num',
    render: (row) => inr.format(row.salary.monthly),
  },
  {
    key: 'annual',
    label: 'Annual',
    align: 'num',
    render: (row) => inr.format(row.salary.annual),
  },
  {
    key: 'status',
    label: 'Status',
    render: (row) => <Status value={row.status} />,
  },
  { key: 'location', label: 'Location', render: (row) => row.location },
  { key: 'hireDate', label: 'Hired', render: (row) => row.hireDate },
  { key: 'email', label: 'Email', render: (row) => row.email },
]

export default function EmployeesPage() {
  const { status, data, error } = useApi('/backend/employees')

  if (status === 'loading') return <Loading label="Loading employees" />
  if (status === 'error') return <Loading label={error.message} />

  return (
    <DataTable
      title="Employees"
      columns={columns}
      rows={data.employees}
      rowKey={(row) => row.id}
    />
  )
}
