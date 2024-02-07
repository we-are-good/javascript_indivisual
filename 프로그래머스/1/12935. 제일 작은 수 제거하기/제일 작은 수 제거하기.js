function solution(arr) {
  if (arr.length === 1 || arr.length === 0) return [-1];
    const copyArr = arr.map((str) => str)
  const newArr = copyArr.sort((a, b) => b - a);
  const smallNumber = newArr[arr.length - 1];
  // const elimination = arr.indexOf(smallNumber);
  const eliminatedArr = arr.filter((str) => str !== smallNumber);
  return eliminatedArr;
}