/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    
    min = Number.MAX_SAFE_INTEGER;
    max = 0;
    
    for(i = 0; i < prices.length; i++){
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
        
        
        
    }  
    return max
    
};



    
    
