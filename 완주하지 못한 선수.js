function solution(participant, completion) {
  var newList = participant.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});
  completion.forEach((now) => {
    if (newList[now]) newList[now] -= 1;
    if (!newList[now]) delete newList[now];
  });

  return Object.keys(newList)[0];
}
