/* 
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
 

Constraints:

m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
1 <= accounts[i][j] <= 100
*/

// time complexity is O(n x m) because we must go through every row and accounts and for each row go through every vaule
// space complexity is O(1)/constant because we don't create another data structure proportional in size to our input to find solution

// initialize variable to 0 to keep track of largest wealth so far

// iterate through each customer and accounts

// for each customer iterate through their banks (nested loop)

// find each customers wealth

// check customers wealth to max wealth.

/* ----------- this is my solution unsure of the complexity ------------*/

let maximumWealth = function (accounts) {
  const wealth = accounts.reduce((higher, person) => {
    let sum = 0;
    for (i = 0; i < person.length; i++) {
      sum = sum + person[i];
    }
    if (sum > higher) {
      return sum;
    }
    return higher;
  }, 0);
  return wealth;
};
