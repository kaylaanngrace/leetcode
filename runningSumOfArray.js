// this solution is risky because it overrides the original array
// the time complexity = O(n) = linear
// space complexity = O(1) = constant
let runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i-1]
    }
    return nums
};



