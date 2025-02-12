function findBoomerangs(nums) {
    const finalarr = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i + 1] && nums[i] !== nums[i - 1]) {
            finalarr.push([nums[i - 1], nums[i], nums[i + 1]])
        }
    }
    return finalarr;
}
