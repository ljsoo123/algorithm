function solution(brown, yellow) {
  var arr = [];
  var answer = [];
  if (yellow == 1) return [3, 3];
  for (let i = 1; i <= yellow; i++) {
    if (yellow % i == 0) arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if ((arr[i] + 2) * (arr[j] + 2) - yellow == brown) {
        return [arr[j] + 2, arr[i] + 2];
      }
    }
  }

  return answer;
}
