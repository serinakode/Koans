function isCellAliveInNextGeneration(isCellAlive, numberOfLiveNeighbours) {
  //TODO - Implement one test at a time

  if (numberOfLiveNeighbours > 3 || numberOfLiveNeighbours < 2) {
    isCellAlive = false;
  }

  if (!isCellAlive) {
    if (numberOfLiveNeighbours == 3) {
      true;
    } else if (numberOfLiveNeighbours < 3 || numberOfLiveNeighbours > 3)
      return false;
  }

  if (numberOfLiveNeighbours == 2 || numberOfLiveNeighbours == 3) {
    return (isCellAlive = true);
  }
}

export default isCellAliveInNextGeneration;

// function isCellAliveInNextGeneration(isCellAlive, numberOfLiveNeighbours) {
//TODO - Implement one test at a time
// let truthy/falsy value => minimize return
// initialise declaration
//   let CellAlive = false;

//   if (numberOfLiveNeighbours > 3 || numberOfLiveNeighbours < 2) {
//     CellAlive;
//   }

//   if (!isCellAlive) {
//     if (numberOfLiveNeighbours == 3) {
//       CellAlive = true;
//     } else if (numberOfLiveNeighbours < 3 || numberOfLiveNeighbours > 3) {
//       CellArive;
//     }
//   }

//   if (numberOfLiveNeighbours == 2 || numberOfLiveNeighbours == 3) {
//     CellAlive = true;
//   }
//   return CellAlive;
// }

// export default isCellAliveInNextGeneration;
