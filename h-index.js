function solution(citations) {
  var answer = 0;

  citations.forEach((now) => {
    var cnt = 0;
    citations.forEach((now, i) => {
      if (now > answer) cnt++;
    });
    if (cnt > answer) answer++;
  });
  console.log(citations);
  return answer;
}
