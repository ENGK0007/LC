/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    
    min = Number.MAX_SAFE_INTEGER; // lowest price-> best time to buy
    max = 0; // maximum profit
    
    for(i = 0; i < prices.length; i++){
        
        min = Math.min(min, prices[i]); // check if the stock price if lower, use the lower price -> we buy at lower price
        max = Math.max(max, prices[i] - min); // calculate profit and choose the max profit
        
        
    }  
    return max
    
};



    
    
