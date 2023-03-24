var s = "madam";
function palidrome(s) {
    for (var i = 1; i < s.length / 2; i++) {
        if (s[i] != s[s.length - i - 1]) {
            return "no";
        }
    }
    return "yes";
}
console.log(palidrome(s));
