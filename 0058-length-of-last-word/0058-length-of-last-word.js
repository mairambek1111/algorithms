/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const word = s.trim().split(" ")

    const res = word[word.length - 1]

    return res.length 
};