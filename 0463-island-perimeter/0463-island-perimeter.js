/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function (grid) {
    let perimetr = 0;
    let rows = grid.length;
    let columns = grid[0].length;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (grid[i][j] === 1) {
          perimetr += 4;
          if (i > 0 && grid[i - 1][j] === 1) {
            perimetr--;
          }
          if (i < rows - 1 && grid[i + 1][j] === 1) {
            perimetr--;
          }
          if (j > 0 && grid[i][j - 1] === 1) {
            perimetr--;
          }
          if (j < columns - 1 && grid[i][j + 1] === 1) {
            perimetr--;
          }
        }
      }
    }
    return perimetr;
  };
