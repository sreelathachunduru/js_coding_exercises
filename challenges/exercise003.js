function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(num => Math.pow(num,2));
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camword = "";
  for (let i in words) {
    if (i == 0) {
      camword += words[i];
    } else {
      camword += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }
  return camword;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let totalSub = 0;
  for (let i = 0; i < people.length; i++) {
    totalSub += people[i].subjects.length;
  }
  return totalSub;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++) {
    for (let j = 0; j < menu[i].ingredients.length; j++) {
      if (menu[i].ingredients[j] === ingredient) {
        return true;
      }
    }
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let common = arr1.filter(duplicate => arr2.includes(duplicate));
  let list = common.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
  return list.sort();
}
module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
