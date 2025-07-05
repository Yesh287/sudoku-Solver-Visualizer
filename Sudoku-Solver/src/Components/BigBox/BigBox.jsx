import Box from '../Box/Box'

export default function BigBox({ cells, onCellChange }) {
  return (
    <div className='grid grid-cols-3 border-2'>
      {cells.map(({ row, col, value }) => (
        <Box
          key={`${row}-${col}`}
          value={value}
          onChange={v => onCellChange(row, col, v)}
        />
      ))}
    </div>
  )
}
