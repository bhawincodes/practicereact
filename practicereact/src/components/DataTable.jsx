function cellClass(column) {
  return [column.align, column.wrap ? 'wrap' : ''].filter(Boolean).join(' ')
}

export default function DataTable({ title, columns, rows, rowKey }) {
  return (
    <section className="panel">
      <h2>{title}</h2>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} className={cellClass(column)}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td className="empty" colSpan={columns.length}>
                  No records
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={rowKey(row)}>
                  {columns.map((column) => (
                    <td key={column.key} className={cellClass(column)}>
                      {column.render(row)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export function Status({ value }) {
  return <span className={`status status-${value}`}>{value}</span>
}

export function Loading({ label }) {
  return <p className="status-line">{label}</p>
}
