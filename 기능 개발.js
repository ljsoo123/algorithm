function solution(progresses, speeds) {
  var answer = [];
  let count = 0;
  while (progresses.length >= 1) {
    progresses.map((now, i) => {
      progresses[i] += speeds[i];
    });
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }
    if (count) {
      answer.push(count);
      count = 0;
    }
  }
  return answer;
}
