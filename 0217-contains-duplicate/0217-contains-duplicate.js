/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   const res = new Set()
   for(let i = 0;  i < nums.length; i++){
    if(res.has(nums[i])){
        return true 
    }
    res.add(nums[i])
   }
   return false
};