/*
 Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.


*/

// brute force solution
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // initialize new arr
      returnedArray = []
      // use a for loop that will call fn (which is the call back function)
      for(let i = 0; i < arr.length; i++) {
          // define the param values
        const element = arr[i]
        const index = i
        // push the callback function to the new arr with it's params
        returnedArray.push(fn(element, index))
      }
      // results
      return returnedArray
    };
// refactored solution 
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    resultsArr = []
    for(let i = 0; i < arr.length; i++) {
        resultsArr.push((fn(arr[i], i)))
    }
    return resultsArr
};