//Leet Code --> 344. Reverse String

function reverseString(s) {
    function swap(first, second) {
        let temp = s[first];
        s[first] = s[second];
        s[second] = temp;
    }
    for (let i = 0; i < s.length / 2; i++){
        swap(i, s.length - 1 - i);
    }
    return s;
}

// console.log(reverseString(['h','e','l','l','o']))
// console.log(reverseString(['s','o','u','m','a','y']))
