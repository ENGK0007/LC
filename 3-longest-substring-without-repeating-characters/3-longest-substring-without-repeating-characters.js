/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    charmap = new Map();
    max = 0;
    l = 0;
    r = 0;
    
    for(r = 0; r < s.length; r++){
        while(charmap.has(s[r])){
            charmap.delete(s[l]);
            l++;
        }
        charmap.set(s[r])
        max = Math.max(max, r - l + 1);
    }
    
  // max = Math.max(max, r - l + 1);
    
    return max
};