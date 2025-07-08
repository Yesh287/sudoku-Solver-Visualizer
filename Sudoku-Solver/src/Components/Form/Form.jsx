import { useState } from 'react'
import Grid from '../Grid/Grid'
import { solveSudoku } from '../Solver/Solver'
import { Checker } from '../Checker/Checker';
const emptyGrid =() => Array.from({ length: 9 },() => Array(9).fill(''));
export default function Form() {
  const [grid, setGrid] = useState(emptyGrid);
  const [running, setRunning] = useState(false);
  const [delay, setDelay] = useState(100);
  const handleCellChange =(row, col, value) => {
    setGrid(g => {
      const next = g.map(r => [...r]);
      next[row][col] = value;
      return next;
    })
  }
  const handleSolve = async() => {
    if(running) return;
    if(!await Checker(grid)){
      alert("Invalid Sudoku!");
      return;
    }
    setRunning(true);
    await solveSudoku(
      grid.map(r => [...r]),
      newGrid => setGrid(newGrid.map(r => [...r])),
      delay
    )
    setRunning(false);
  }
  const handleReset =() => {
    if(running) return;
    setGrid(emptyGrid);
  }

  return(
    <div className="flex flex-col items-center p-4">
      <Grid grid={grid} onCellChange={handleCellChange} />
      <div className="mt-4 flex items-center space-x-2">
        <label htmlFor="speed" className="font-medium">Speed:</label>
        <input
          id="speed"
          type="range"
          min={10}
          max={1000}
          step={10}
          value={delay}
          disabled={running}
          onChange={e => setDelay(Number(e.target.value))}
        />
        <span>{delay} ms</span>
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={handleSolve}
          disabled={running}
          className="px-6 py-2 bg-green-600 text-white rounded disabled:opacity-50"
        >
          {running ? 'Solving…' : 'Visualize Solve'}
        </button>

        <button
          onClick={handleReset}
          disabled={running}
          className="px-6 py-2 bg-red-600 text-white rounded disabled:opacity-50"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
