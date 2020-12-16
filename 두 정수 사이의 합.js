function solution(a, b) {
  var arr = [];
  var answer = 0;
  if (a == b) return a;
  //두 수가 같으면 수 하나를 리턴한다.
  else {
    arr.push(a); //a와 b를 배열에 넣고
    arr.push(b);
    arr.sort((a, b) => {
      //오름차순으로 정렬한다.(숫자정렬)
      return a - b;
    });
    for (let i = arr[0]; i <= arr[1]; i++) answer += i; //작은 수부터 큰 수까지 더한다.
    return answer;
  }
}
//링크 : https://programmers.co.kr/learn/courses/30/lessons/12912
