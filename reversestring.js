function reverseString(str) {


    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


const string = "hello how are you";
console.log(reverseString(string));