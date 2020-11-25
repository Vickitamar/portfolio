
export const TETROMINOS = {
    0: { shape: [[0]], color: '167, 250, 231' },
    I: {
         shape: [
                  [0, 'I', 0, 0],
                  [0, 'I', 0, 0],
                  [0, 'I', 0, 0],
                  [0, 'I', 0, 0]
                ],
         color: '34, 34, 34',       
    },
    J: {
      shape: [
               [0, 'J', 0],
               [0, 'J', 0],
               ['J', 'J', 0]
             ],
      color: '34, 34, 34',    
    },
    L: {
      shape: [
               [0, 'L', 0],
               [0, 'L', 0],
               [0, 'L', 'L']
             ],
      color: '34, 34, 34',
    },
    O: {
      shape: [
               ['O', 'O'],
               ['O', 'O'],
             ],
      color: '34, 34, 34',     
    },
    S: {
      shape: [
               [0, 'S', 'S'],
               ['S', 'S', 0],
               [0, 0, 0]
             ],
      color: '34, 34, 34',       
    },
    T: {
      shape: [
               [0, 0, 0],
               ['T', 'T', 'T'],
               [0, 'T', 0]
             ],
      color: '34, 34, 34',       
    },
    Z: {
      shape: [
               ['Z', 'Z', 0],
               [0, 'Z', 'Z'],
               [0, 0, 0]
             ],
      color: '34, 34, 34',       
    },
  }
  
  export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino =
      tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
  }