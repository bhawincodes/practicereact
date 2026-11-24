import DataTable, { Loading } from '../components/DataTable'
import { useApi } from '../hooks/useApi'
import { inr } from '../api'

function moneyList(items) {
  return items.map((item) => `${item.code} ${inr.format(item.amount)}`).join(', ')
}

const compensationColumns = [
  { key: 'id', label: 'Pay ID', render: (row) => row.id },
  { key: 'employeeId', label: 'Employee ID', render: (row) => row.employeeId },
  { key: 'period', label: 'Period', render: (row) => row.period },
  {
    key: 'baseSalary',
    label: 'Base salary',
    align: 'num',
    render: (row) => inr.format(row.baseSalary),
  },
  {
    key: 'allowances',
    label: 'Allowances',
    wrap: true,
    render: (row) => moneyList(row.allowances),
  },
  {
    key: 'deductions',
    label: 'Deductions',
    wrap: true,
    render: (row) => moneyList(row.deductions),
  },
  {
    key: 'gross',
    label: 'Gross',
    align: 'num',
    render: (row) => inr.format(row.gross),
  },
  {
    key: 'net',
    label: 'Net',
    align: 'num',
    render: (row) => inr.format(row.net),
  },
]

const allowanceColumns = [
  { key: 'code', label: 'Code', render: (row) => row.code },
  { key: 'name', label: 'Allowance', render: (row) => row.name },
  {
    key: 'taxable',
    label: 'Taxable',
    render: (row) => (row.taxable ? 'Yes' : 'No'),
  },
  {
    key: 'description',
    label: 'Description',
    wrap: true,
    render: (row) => row.description,
  },
]

export default function FinancePage() {
  const compensation = useApi('/backend/finance/compensation')
  const allowances = useApi('/backend/finance/allowances')

  return (
    <>
      {compensation.status === 'loading' && <Loading label="Loading compensation" />}
      {compensation.status === 'error' && (
        <Loading label={compensation.error.message} />
      )}
      {compensation.status === 'ready' && (
        <DataTable
          title="Compensation"
          columns={compensationColumns}
          rows={compensation.data.compensation}
          rowKey={(row) => row.id}
        />
      )}
      {allowances.status === 'loading' && <Loading label="Loading allowances" />}
      {allowances.status === 'error' && <Loading label={allowances.error.message} />}
      {allowances.status === 'ready' && (
        <DataTable
          title="Allowances"
          columns={allowanceColumns}
          rows={allowances.data.allowances}
          rowKey={(row) => row.code}
        />
      )}
    </>
  )
}
