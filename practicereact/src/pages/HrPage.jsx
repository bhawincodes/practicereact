import DataTable, { Loading, Status } from '../components/DataTable'
import { useApi } from '../hooks/useApi'

const leaveColumns = [
  { key: 'id', label: 'Leave ID', render: (row) => row.id },
  { key: 'employeeId', label: 'Employee ID', render: (row) => row.employeeId },
  { key: 'type', label: 'Type', render: (row) => row.type },
  { key: 'startDate', label: 'Start', render: (row) => row.startDate },
  { key: 'endDate', label: 'End', render: (row) => row.endDate },
  { key: 'days', label: 'Days', align: 'num', render: (row) => row.days },
  {
    key: 'status',
    label: 'Status',
    render: (row) => <Status value={row.status} />,
  },
  { key: 'reason', label: 'Reason', wrap: true, render: (row) => row.reason },
  {
    key: 'approverId',
    label: 'Approver',
    render: (row) => row.approverId || '—',
  },
]

const balanceColumns = [
  { key: 'employeeId', label: 'Employee ID', render: (row) => row.employeeId },
  { key: 'annual', label: 'Annual', align: 'num', render: (row) => row.annual },
  {
    key: 'usedAnnual',
    label: 'Annual used',
    align: 'num',
    render: (row) => row.usedAnnual,
  },
  { key: 'sick', label: 'Sick', align: 'num', render: (row) => row.sick },
  {
    key: 'usedSick',
    label: 'Sick used',
    align: 'num',
    render: (row) => row.usedSick,
  },
  { key: 'casual', label: 'Casual', align: 'num', render: (row) => row.casual },
  {
    key: 'usedCasual',
    label: 'Casual used',
    align: 'num',
    render: (row) => row.usedCasual,
  },
]

export default function HrPage() {
  const leaves = useApi('/backend/hr/leaves')
  const balances = useApi('/backend/hr/balances')

  return (
    <>
      {leaves.status === 'loading' && <Loading label="Loading leaves" />}
      {leaves.status === 'error' && <Loading label={leaves.error.message} />}
      {leaves.status === 'ready' && (
        <DataTable
          title="Leaves"
          columns={leaveColumns}
          rows={leaves.data.leaves}
          rowKey={(row) => row.id}
        />
      )}
      {balances.status === 'loading' && <Loading label="Loading leave balances" />}
      {balances.status === 'error' && <Loading label={balances.error.message} />}
      {balances.status === 'ready' && (
        <DataTable
          title="Leave balances"
          columns={balanceColumns}
          rows={balances.data.balances}
          rowKey={(row) => row.employeeId}
        />
      )}
    </>
  )
}
