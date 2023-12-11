export const filterWinningNums = (winningNums, userNumbers) => {

  let userNumbersCopy = new Array();
  const compare = new Set(winningNums);


  for (let i = 0; i < userNumbers.length; i++) {

    let hitNumbers = new Array();
    let numOfHits = 0;

    for (let j = 0; j < winningNums.length; j++) {
      const number = userNumbers[i].userNums[j];

      if (compare.has(number)) {
        hitNumbers = [...hitNumbers, number];
        numOfHits++;
      }
    }
    let userNumbersObject = {...userNumbers[i], hitNumbers, numOfHits};
    userNumbersCopy.push(userNumbersObject);
  }
  return userNumbersCopy;
}

