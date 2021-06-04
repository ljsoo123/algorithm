function solution(n, times) {
  var num = 0;
  var max = Math.max.apply(null, times) * n;
  var answer = max;
  var min = 0;
  while (min <= max) {
    var mid = Math.floor((max + min) / 2);
    var sum = 0;
    times.forEach((now) => {
      sum += Math.floor(mid / now);
    });
    if (sum < n) {
      min = mid + 1;
    } else {
      if (answer >= mid) {
        answer = mid;
        max = mid - 1;
      }
    }
  }
  return Math.floor(answer);
}
