/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var map = new Map();
    
    var result = 0;
    for(let char of s){
        if(map.has(char)){
            map.set(char, map.get(char) + 1);
        }else{
            map.set(char, 1);
        }
    }

    let odd = 0;
    for( a of map.values()){
        result += Math.floor(a / 2) *2;       
    } 
    if(result < s.length)
        result++;
    console.log(Math.floor(3/2)*2);
    return result;
};