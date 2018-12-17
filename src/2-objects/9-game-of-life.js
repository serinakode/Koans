function isCellAliveInNextGeneration(isCellAlive, numberOfLiveNeighbours) {
  //TODO - Implement one test at a time

  if (numberOfLiveNeighbours < 2 || numberOfLiveNeighbours > 3) {
    return (isCellAlive = false);
  }

  if (!isCellAlive) {
    if (numberOfLiveNeighbours == 3) {
      return true;
    } else if (numberOfLiveNeighbours < 3 || numberOfLiveNeighbours > 3)
      return false;
  }

  if (numberOfLiveNeighbours == 2 || numberOfLiveNeighbours == 3) {
    return (isCellAlive = true);
  }
}

export default isCellAliveInNextGeneration;
