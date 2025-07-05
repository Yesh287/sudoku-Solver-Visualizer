import BigBox from '../BigBox/BigBox'

export default function Grid({ grid,onCellChange }){
  return(
    <div className='flex justify-center bg-white p-4'>
      <div className='grid grid-cols-3 gap-2 border-4'>
        {Array.from({ length: 9 },(_,blockIdx) =>{
          const blockRow = Math.floor(blockIdx / 3)
          const blockCol = blockIdx % 3
          const cells = []
          for(let dr = 0; dr < 3; dr++){
            for(let dc = 0; dc < 3; dc++){
              const row = blockRow*3+dr
              const col = blockCol*3+dc
              cells.push({ row,col,value: grid[row][col] })
            }
          }
          return(
            <BigBox
              key={blockIdx}
              cells={cells}
              onCellChange={onCellChange}
            />
          )
        })}
      </div>
    </div>
  )
}
