// Leet Code --> 121. Best Time to Buy and Sell Stock

function maxProfit(prices) {
    let profit = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if ((prices[i] - min) > profit) {
            profit = prices[i] - min;
        }
        if (prices[i] < min) {
            min = prices[i];
        }
    }
    return profit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// console.log(maxProfit([2, 4, 1, 7]));