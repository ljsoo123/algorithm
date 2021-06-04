function solution(nums) {
  var answer = [...new Set(nums)];
  console.log(answer);
  if (answer.length >= nums.length / 2) return nums.length / 2;
  else return answer.length;
}
