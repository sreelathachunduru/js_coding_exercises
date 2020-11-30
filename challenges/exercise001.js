function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase()+word.slice(1);
  }

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.slice(0,1).toUpperCase()+'.'+lastName.slice(0,1).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return parseFloat((originalPrice + (originalPrice * (vatRate/100))).toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return parseFloat((originalPrice - (originalPrice * (reduction/100))).toFixed(2));
}

function getMiddleCharacter(str) {
        if (str === undefined) 
                throw new Error("str is required");
          
        var position;
        var length;
        if(str.length % 2 == 1) {
            position = str.length / 2;
            length = 1;
        } else {
            position = str.length / 2 - 1;
            length = 2;
        }

        return str.substring(position, position + length);
   }
      

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var revWord = "";
  for (var i = word.length -1; i >= 0; i--){
    revWord += word[i];
  }
  return revWord;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  var reverseWords = [];
  words.forEach(ele => {
    var revword = "";
    for (var i = ele.length - 1; i >= 0; i--) {
      revword += ele[i];
    }
    reverseWords.push(revword);
  });
  return reverseWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  var matched=0;
  for(var key in users)
  {
    if(users[key].type==="Linux")
    {
      matched++;
    }
  }
  return matched;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var totalSum = 0;
  for(var i in scores){
    totalSum += scores[i];
  }
  return parseFloat((totalSum/scores.length).toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if(n%3 == 0 && n%5!=0){
    return "fizz";
  }else if(n%5 === 0 && n%3!=0){
    return "buzz";
   }else if(n%3 ===0 && n%5 ===0){
    return "fizzbuzz";
   }else{
     return n;
   }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
