/*
Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.
*/
/**
 * @param {number} millis
 */
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

/*
Complexity Analysis
Time complexity: O(1)O(1)O(1). The time complexity of the function is O(1)O(1)O(1) because the computational effort remains constant regardless of the input. However, the actual time taken for the function to fulfill or complete may vary, as it involves initiating a timer and returning a promise, which is not directly related to the input size but rather the specific task being performed.

Space complexity: O(1)O(1)O(1). The function uses a constant amount of space to store the promise and the timer. This does not change with the input value.


*/
