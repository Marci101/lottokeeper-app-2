export const calculatePrize = (hits) => {
  let prize = 0;
  switch (hits) {
    case 2:
      prize = 600;
      break;
    case 3:
      prize = Math.pow(2, hits) * 1000;
      break;
    case 4:
      prize = Math.pow(hits, hits) * 1000;
      break;
    case 5:
      prize = Math.pow(hits, hits) * 1000;
      break;
    default:
      0;
  } console.log("calculatePrize Func RUNNING!", prize);
  return prize;
};
