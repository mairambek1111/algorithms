/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */



function Buildchar(str) {
    const charobj = {}

    str = str.toLowerCase().replace(/[^\w]/g)

    for (const char  of str) {
        charobj[char] = charobj[char] + 1 || 1 
    }

    return charobj
}

var isAnagram = function(s, t) {
    const sObj = Buildchar(s)
    const tObj = Buildchar(t)
     
    if (Object.keys(sObj).length  !== Object.keys(tObj).length) {
        return false 
    }

    for (const char in sObj) {
        if (sObj[char]!== tObj[char]) {
            return false 
        }
    }
    return true
};

