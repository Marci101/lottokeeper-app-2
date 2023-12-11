export const createUniqueNumsArray = (repeat) => {
  let matrixOfArrays = new Array();
  do {
    let randomNumsArray = new Array();
    let uniqueNums = new Set();
    do {
      randomNumsArray.push(Math.floor(Math.random() * 39) + 1);
      uniqueNums = new Set(randomNumsArray);
    } while(uniqueNums.size !== 5);

    matrixOfArrays.push([...uniqueNums]);

  } while(matrixOfArrays.length !== repeat)

  //return matrixOfArrays;  <<<<<<<<<<<<<<<<<<<<<<<<<< RESET AFTER TESTING !!!
  return [[30,31,32,33,34]];
}
