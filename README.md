# typing_effective_page1 
<img src="./image.gif">

## 효과 
타이핑 효과 

## 학습 
### 1. JS : split()  
: 문자열을 하위 문자열 배열로 분할   
: 새 배열을 반환     
: 원래 문자열을 변경하지 않습니다.  
: (" ")를 구분 기호로 사용하면 문자열이 단어 간에 분할   
```
<script>
let text = "How are you doing today?";
const myArray = text.split("");

document.getElementById("demo").innerHTML = myArray;
// H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?

</script>


``` 

### 2. JS : shift()  
: 배열의 첫 번째 항목을 제거합니다.     
: 원래 배열을 변경합니다.    
: 이동된 요소를 반환합니다.
```
<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.shift();
// Banana

</script>
```

## 학습 출처 
**유튜브**   
https://www.youtube.com/@sucoding   

**JS**   
https://www.w3schools.com/jsref/jsref_split.asp   
https://www.w3schools.com/jsref/jsref_shift.asp 

**키워드**   
split   
shift
