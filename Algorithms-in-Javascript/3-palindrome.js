function isPalindrome(string) {
    string = string.toLowerCase();
    var charactersArr = string.split("");
    var validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
    
    var lettersArr = [];
    charactersArr.forEach(char => {
        if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });

    return lettersArr.join("") === lettersArr.reverse().join("");
}
var validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
    console.log(validCharacters)

console.log(isPalindrome("Madame, I'm Adam"));

console.log(isPalindrome("Racecar"));