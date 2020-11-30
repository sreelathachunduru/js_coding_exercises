function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(x=>x<1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(x=>x.charAt(0)==char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
 return words.filter(x=>x.substring(0,3)=="to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(x=>Number.isInteger(x));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  var cities = [];
  for(var i = 0; i < users.length; i++){
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(x=>parseFloat(Math.sqrt(x).toFixed(2)));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  var findsentence = [];
  sentences.forEach(element => {
    if(element.toUpperCase().indexOf(str.toUpperCase()) != (-1)){
      findsentence.push(element);
    }
  })
  return findsentence;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  var longestSides = [];
  triangles.forEach(x => {
    longestSides.push(Math.max.apply(Math,x));
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
