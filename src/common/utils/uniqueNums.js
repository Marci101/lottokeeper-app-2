export function validateUiqueUserNums(userNums) {
  const set = new Set();
  for (let i = 0; i < userNums.length; i++) {
      const number = userNums[i];
      if (set.has(number)) {
          return false;
      }
      set.add(number);
  }
  return true;
}