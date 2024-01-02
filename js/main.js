let target = document.querySelector("#dynamic");

// 랜덤 stringArr 만드는 함수
function randomString() {
  // 사용할 문구를 배열로 담음 
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to React", "Learn to Typescript"]
  // 만들배열을 랜덤으로 출력하여, 변수에 저장 
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  // split을 사용하여 공백을 포함하여 문자를 분할 
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

// 텍스트 비우기
function resetTyping() {
  target.textContent = ""; 
  dynamic(randomString());
}

// 한 글자씩 텍스트출력되는 효과
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift(); // 첫번째 문자를 저장 
    setTimeout(function() {
      dynamic(randomArr);
    }, 80) // 0.08초마다 synamic 함수를 계속 실행
  } else {
    setTimeout( resetTyping(), 3000) // 3초마다 resetTyping 함수 실행
  }
}

dynamic(randomString())

// 커서 깜박이게 하는 효과
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500); // 0.5초마자 blink 함수가 실행 


