## Description of repo code

The index.html is the file that is displayed on the window. I have sourced in the `'script.js'` within the `<head>` tag to access the Javascript file.
```html
<!DOCTYPE>
<html>
<head>
 <script src="script.js"></script>
</head>
 ...
</html>
```

Inside the `script.js` file, I first set the variables `var wordArrayOne` and `var wordArrayExtra` as arrays for this challenge. I then used `console.log(wordArrayOne)` to verify that the Javascript file was working properly, which was later commented out. Next a function `phraseFunction()` was created with `array` and `i` as the parameters.

Within the function I create the variable `phrase = ''` as a place to store the strings passed into it from the `for` loop. Because `i` is set as a parameter, it does not have to be redefined in the `for` loop. When the `for` loop is entered, the `array[i]` is concatenated to the variable `phrase` so long as the conditional is true. The value of `phrase` is then returned at the end of the function. 
