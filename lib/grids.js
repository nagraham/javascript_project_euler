// Functions to interact with M x N grids (array of arrays)

// Parses a string of elements into a grid
// input: [String]
// input: [String] The delimiter for rows (defaults to return line)
// input: [String] The delimiter for columns (defaults to a space)
// output: [Array, Array] The grid
function parseGrid(str, rowDelim, colDelim) {
  rowDelim = rowDelim || "\n"
  colDelim = colDelim || " "

  var rows = str.split(rowDelim),
      grid = []

  for (var i = 0; i < rows.length; i++) {
    grid.push(rows[i].split(colDelim))
  }

  return grid
}

// Gets horizontal elements from a grid.
// output [Array] Returns an array of the elements
function getLeftToRight(grid, n, c, r) {
  if (c > grid[r].length - n) throw 'Invalid column: ' + n + 'columns not available'

  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(grid[r][c + i]);
  }
  return arr;
}

// Gets vertical elements from a grid.
// output [Array] Returns an array of the elements
function getTopToBottom(grid, n, c, r) {
  if (r > grid.length - n) throw 'Invalid row: ' + n + ' rows not available'

  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(grid[r + i][c]);
  }
  return arr;
}

// Gets diagonal elements from a grid.
// output [Array] Returns an array of the elements
function getLeftToRightDiagonal(grid, n, c, r) {
  if (c > grid[r].length - n) throw 'Invalid column: ' + n + 'columns not available'
  if (r > grid.length - n) throw 'Invalid row: ' + n + ' rows not available'

  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(grid[r + i][c + i]);
  }
  return arr;
}

// Gets diagonal elements from a grid.
// output [Array] Returns an array of the elements
function getRightToLeftDiagonal(grid, n, c, r) {
  if (c < n - 1) throw 'Invalid column: ' + n + 'columns not available'
  if (r > grid.length - n) throw 'Invalid row: ' + n + ' rows not available'

  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(grid[r + i][c - i]);
  }
  return arr;
}

module.exports = {
  parseGrid: parseGrid,
  getLeftToRight: getLeftToRight,
  getTopToBottom: getTopToBottom,
  getLeftToRightDiagonal: getLeftToRightDiagonal,
  getRightToLeftDiagonal: getRightToLeftDiagonal
}
