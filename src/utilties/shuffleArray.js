export const shuffleArray = (array) => {
  const newArr=[...array]
  newArr.reverse().forEach((item, index) => {
      const j = Math.floor(Math.random() * (index + 1));
      [newArr[index], newArr[j]] = [newArr[j], newArr[index]];
  });
  return newArr
};