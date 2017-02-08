var wordArrayOne = ['ASDF', 'BLAH', 'Oh! ', 'Hi ', 'There!'];
var wordArrayExtra = [3, 'smile', 'loose ', 'E.', 'T. ', 'phone ', 'home.'];

// console.log(wordArrayOne);
console.log(phraseFunction(wordArrayOne, 3));
console.log(phraseFunction(wordArrayOne, 2));
console.log(phraseFunction(wordArrayExtra, 3));



function phraseFunction(array, i) {
  var phrase = '';
  for (i; i < array.length; i++) {
    phrase += array[i];
  }
  return phrase;
}
