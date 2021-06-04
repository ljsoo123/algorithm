function solution(clothes) {
  let answers = 1;
  var answer = clothes.reduce((acc, cur) => {
    acc[cur[1]] = acc[cur[1]] ? acc[cur[1]] + 1 : 1;
    return acc;
  }, {});
  for (let i in answer) {
    answers *= answer[i] + 1;
  }

  return answers - 1;
}
