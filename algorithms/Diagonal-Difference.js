function diagonalDifference(arr) {
    let leftDiagonal = 0
    let rightDiagonal = 0
  
    for (let i = 0, j = 0; i < arr.length; i++, j++) {
      leftDiagonal += arr[i][j]
      rightDiagonal += arr[i][arr.length - 1 - j]
    }
  
    return Math.abs(leftDiagonal - rightDiagonal)
  }
  
  console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]))