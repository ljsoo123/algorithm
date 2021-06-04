var answer = 0;
function number(numbers, target, count, nowNum) {
  if (count < numbers.length) {
    number(numbers, target, count + 1, nowNum + numbers[count]);
    number(numbers, target, count + 1, nowNum - numbers[count]);
  } else if (target == nowNum) answer++;
}

function solution(numbers, target) {
  number(numbers, target, 0, 0);
  return answer;
}
