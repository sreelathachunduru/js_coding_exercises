function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => num < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(name => name.charAt(0) === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(word => word.substring(0, 3) === "to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => Number.isInteger(num));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(x => parseFloat(Math.sqrt(x).toFixed(2)));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let findsentence = [];
  sentences.forEach(element => {
    if (element.toUpperCase().indexOf(str.toUpperCase()) != (-1)) {
      findsentence.push(element);
    }
  })
  return findsentence;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];
  triangles.forEach(triangle => {
    longestSides.push(Math.max.apply(Math, triangle));
  })
  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};