let target = document.querySelector("#dynamic");

// 랜덤 stringArr 만드는 함수
function randomString() {
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to React", "Learn to Typescript"]
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
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
    target.textContent += randomArr.shift();
    setTimeout(function() {
      dynamic(randomArr);
    }, 80)
  } else {
    setTimeout( resetTyping(), 3000)
  }
}

dynamic(randomString())

// 커서 깜박이게 하는 효과
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);


