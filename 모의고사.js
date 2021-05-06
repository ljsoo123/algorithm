function solution(answers) {
  var per1 = [1, 2, 3, 4, 5];
  var per2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var answer = [];
  var per3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var num1 = 0,
    num2 = 0,
    num3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == per1[i % per1.length]) num1++;
    if (answers[i] == per2[i % per2.length]) num2++;
    if (answers[i] == per3[i % per3.length]) num3++;
  }
  var max = Math.max(num1, num2, num3);
  if (num1 == max) answer.push(1);
  if (num2 == max) answer.push(2);
  if (num3 == max) answer.push(3);

  return answer;
}
