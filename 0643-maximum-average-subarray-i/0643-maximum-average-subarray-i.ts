function findMaxAverage(nums: number[], k: number): number {
    let sum = nums.slice(0, k).reduce((acc, el) => acc + el,0)
    let max = sum / k

    for(let i = k; i < nums.length; i++){
        sum += nums[i] - nums[i - k]
        max = Math.max(max, sum / k)
    }

    return max
};