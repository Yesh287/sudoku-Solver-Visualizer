const sleep = ms => new Promise(res => setTimeout(()=>{console.log(res),res()}, ms));
export async function solveSudoku(grid, onUpdate, delay){
  let row = -1, col = -1;
  for(let r = 0; r < 9; r++){
    for(let c = 0; c < 9; c++){
      if(grid[r][c] == ""){
        row = r,col = c; 
        break;
      }
    }
    if(row != -1) break;
  }
  if(row === -1) return true;
  for(let d = 1; d <= 9; d++){
    const s = String(d);
    if(isValid(grid, row, col, s)){
      grid[row][col] = s;
      onUpdate(grid);      
      await sleep(delay);      
      if(await solveSudoku(grid, onUpdate, delay)){
        return true;
      }
      grid[row][col] = '';
      onUpdate(grid);
      await sleep(delay);
    }
  }
  return false;
}
function isValid(grid, r, c, val){
  for(let i = 0; i < 9; i++){
    if(grid[r][i] === val || grid[i][c] === val) return false;
  }
  const br = Math.floor(r/3)*3
  const bc = Math.floor(c/3)*3
  for(let dr = 0; dr < 3; dr++){
    for(let dc = 0; dc < 3; dc++){
      if(grid[br+dr][bc+dc] === val) return false;
    }
  }
  return true;
}