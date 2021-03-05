var NumArray = function(nums) {
  const n = nums.length;
  this.sums = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
      this.sums[i + 1] = this.sums[i] + nums[i];
  }
};

NumArray.prototype.sumRange = function(i, j) {
  return this.sums[j + 1] - this.sums[i];
};
