function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
  //n을 toString을 이용하여 3진수로 바꾼다.
  //split으로 각 자릿수를 배열로 각각 바꾼다.
  //reverse를 사용하여 배열의 인덱스 순서를 반대로 바꾼다.
  //join 을 사용하여 배열을 문자열로 바꾼다.
  //parseInt를 이용하여 문자열을 숫자로 바꾼다.
  //parseInt의 두 번째 파라미터는 현재 숫자의 진수를 입력받고, 10진수로 바꿔준다.
}
//링크 : https://programmers.co.kr/learn/courses/30/lessons/68935
