function separateVowelsConsonants(str) {
    const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    var constantsarr = []
    var vowelsarr = []
    for (var i = 0; i < str.length - 1; i++) {
        if (vowels.includes(str[i])) {
            vowelsarr.push(str[i])
        }
        else {
            constantsarr.push(str[i])
        }
    }
    constantsarr = constantsarr.join("")
    vowelsarr = vowelsarr.join("")
    return [vowelsarr, constantsarr]

}
