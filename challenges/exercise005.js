const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let index = nums.indexOf(n);
  if (index == -1) return null;
  if (index == nums.length - 1) return null;
  else return nums[index + 1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  var count1 = 0;
  var count0 = 0;
  var array = str.split("");
  array.forEach((element) => {
    if (element == "1") {
      count1++;
    }
    if (element == "0") {
      count0++;
    }
  });
  return { 1: count1, 0: count0 };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  n = n + "";
  return parseFloat(n.split("").reverse().join(""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  var sum = 0;
  arrs.forEach((element) => {
    for (var i = 0; i < element.length; i++) {
      sum = sum + element[i];
    }
  });
  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 1) return [];
  else {
    let first = arr[0];
    let last = arr[arr.length-1];
    arr[0] = last;
    arr[arr.length-1] = first;
    return arr
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (let key in haystack) {
    if (typeof haystack[key] == 'string') { 
      if (haystack[key].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) return true;
    }
  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const freq = {};
  const list_words = str.split(' ')
  for (var i = 0; i < list_words.length; i++) {
    const word = list_words[i].toLowerCase().replace(/[,!?]/g,"");
    if (freq[word] === undefined) {
      freq[word] = 1;
    } else {
      freq[word] += 1;    
    }    
  }
  return freq;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
