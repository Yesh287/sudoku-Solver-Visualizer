export async function Checker(grid){
  for(let r = 0; r < 9; r++){
    for(let c = 0; c < 9; c++){
      if(grid[r][c] !== ""){
        if(!isValid(grid,r,c,grid[r][c])) return false;
      }
    }
  }
  return true;
}
function isValid(grid, r, c, val){
  for(let i = 0; i < 9; i++){
    if((grid[r][i] === val && i !== c) || (grid[i][c] === val && i !== r)) return false;
  }
  const br = Math.floor(r/3)*3
  const bc = Math.floor(c/3)*3
  for(let dr = 0; dr < 3; dr++){
    for(let dc = 0; dc < 3; dc++){
      if(dr+br === r && dc+bc === c) continue;  
      if(grid[br+dr][bc+dc] === val) return false;
    }
  }
  return true;
}