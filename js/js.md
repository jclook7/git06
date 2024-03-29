# Javascript

- 문법
  - javascript 언어 문법
  - 문법의 내용
    - 데이터/변수/연산자
    - 명령문
    - 함수
    - 배열/객체/Class
    - 추가 문법

- 활용
  - HTML/CSS/Js 종합 활용
  - HTML DOM
  - Open API - 객체

## JS basic

- version
  - ES5
  - ES6

- 작성방식
  - External : js 파일 생성
  - Internal
    - HTML 파일에 js 코드를 작성
    - js 코드 블럭을 따로 구분해서 작성
  - Inline
    - HTML Tag에 js 코드를 작성

- 작성위치
  - js가 실행되는 시점에 HTML이 로딩(렌더링)되어 있어야 함 
  - js가 실행되는 방식 : 최초 한번만 실행됨

## JS 문법

### 데이터/변수/연산자

- data
  - number
  - character
```
number: 0,1,2,3,4,5...
character: 가,나,다,라....., a,b,c,d,e......
```

- data type (종류)
  - number: integer, real number
  - character: 
      - 코드상에서 문자는 따옴표로 묶임
      - 낱개 글자, 묶음 글자.....
  - boolean:
    - true/false (참/거짓)
```
1 + 1 = 2

'a' + 1 = 'a1'

'1' + 1 = 11
```

** 자바스크립트는 데이터 타입을 엄격하게 구분하지 않음 
- https://kingpodo.tistory.com/54
- https://paulyun.tistory.com/14

- 변수 (variable)
  - 데이터를 저장하는 공간
  - 변수는 선언(declaration)/정의(definition)를 한 이후에 사용
  - 변수 선언 예약어(키워드)
    - var(ES5) : 타입 구분 안함, 데이터 변경 자유로움
    - let(ES6) : 타입 구분 안함, 데이터 변경 자유로움, 블록 구분
    - const(ES6) : 타입 구분 안함, 데이터 변경 불가능

```

Java
정수 변수 선언 : int number1;
실수 변수 선언 : float number2;
문자 변수 선언 : char text;

ES5/6
정수 변수 선언 : var number1; | let number1; | const number1;
실수 변수 선언 : var number2; | let number2; | const number2;
문자 변수 선언 : var text;    | let text;    | const text;
```

- 연산자

- 산술 연산자
  - +, *, -, /
  - % : 나머지 연산

- 할당(대입) 연산자
  - = : 값을 변수에 저장
  ```
  let PI = 3.141592;
  ```
  - 산술 + 대입 연산
  ```
  let a = 10;
  a += 5;
  ```

  ** 산술 + 대입 연산이 반복 실행되면 일정값을 지속적으로 연산

  - 카운터
  ```
  a += 1 => a++

  a -= 1 => a--
  ```

  - 비교 연산자
    - ==, === : 같음
    - !=, !== : 다름
    - 비교 연산자를 사용한 식의 결과는 참 또는 거짓

  - 논리 연산자
    - 논리값(참/거짓)을 연산
    - 논리식 : 논리값이 결과로 나오는 식
    - AND : && - 연산하는 여러개의 논리값 중 모두 참이어야 연산 결과가 참
    - OR : || - 연산하는 여러개의 논리값 중 모두 거짓이어야 연산 결과가 거짓
    - NOT : ! - 연산 결과의 반대 값


### 명령문

- 프로그래밍 언어의 실행 흐름에 관여
- 조건문/ 분기문
  - if: 조건/상황에 대한 다른 결정에 대해 각각 다른 실행방식을 선택
    - if
    - else if
    - else
```
if(결과값이 bool 데이터인 식){}
  

if(bool1){
  bool1이 참일때 실행코드
} else if(bool2){
  bool2가 참일때 실행코드
}

if(bool){
  bool이 참일때 실행코드
}
else{
  bool이 거짓일때 실행코드
}

if(bool1){
  boo11이 참일때 실행코드
}
else if(bool2){
  bool2가 참일때 실행코드
}
else{
  bool1, bool2가 모두 거짓일때 실행코드
}
```
```
if(a>10)
if(true){}
if(a+1){}: 값이 숫자 - 0: false, 정수: true
if(1){}
```
  - switch:
    - 식의 결과값에 따라 실행 분기

    ```
    let a = 0
    swtich(a+1){
      case 1: 
           실행 코드
           break;
      case 2:
           실행 코드
           break;      
    }
    ```

- 반복문
  - for: 결정된 반복횟수만큼 반복 실행 구문
    - 구문1, 구문2, 구문3이 유기적으로 연결되어 반복횟수를 결정
```
for(초기값 구문1; 비교식 구문2; 수식 구문3){
  반복 실행 코드
}

1) 구문1 초기값 최초 한번 실행
2) 구문2 비교식 실행 -> 참/거짓 -> 거짓: 반복구문실행 종료
3) 참일때 실행코드 실행
4) 구문3 수식 실행
5) 2)부터 반복 실행

```
```
// i=i+1 => i+=1 => i++

for(let i=0; i<3; i++){
  코드 블럭
}

1. i=0
2. i<3 => true
3. 코드 블럭 실행 
4. i++ => i=1 (0+1 => 1)
```

```
for(let i=0; i<5; i++){}: 5번 반복
for(let i=1; i<=5; i++){}: 5번 반복
for(let i=0; i<10; i+=2){}: 5번 반복
```
  - while
    - 조건식의 결과값이 참일 때 반복 실행
```
while(조건식){
  실행코드
}

조건식의 결과가 참일 때 계속 반복 실행
```

### 함수

- 특정작업을 실행할 수 있도록 만들어진 코드 블럭
- 함수 하나가 독립적으로 실행될 수 있음
- 코드를 그룹화
- 함수를 실행하기 위해서 해당 함수를 호출
- 매개변수(parameter)
- 인수함수를 호출할 때 사용되는 값 들을 인수

### 배열/객체/Class

- 집합 형태의 데이터

#### 배열

- 같은 타입의 데이터들을 나열해서 패키지화 한 것
- It is a common practice to declare arrays with the const keyword.
```
let array = [1,2,3,4,5]
let arr = [1,2,3,4,a]
```
#### 객체

- 어떤 대상을 데이터화 시킨 집합 데이터

객체 데이터
- Properties: 객체 데이터화 시킨 것, 객체가 가지고 있는 성질, 형태
- method: 객체에 포함된 함수, 객체에 기능 정의


#### Class

- 객체데이터를 만들 수 있게 하는 설계도

### 추가 문법

#### 변수 Scope

- Scope
  - Global scope
    - 변수는 모든 범위에서 접근 가능
  - Function scope
    - 해당 함수 범위에서만 접근 가능
  - Block scope
    - 해당 블록 범위에서만 접근 가능

```
<script>
// Global Scope

let a = 1;
var _a = 1;

function myFunction(){
  // function scope
  let b = 2;
  var _b = 2;

  for(statement){
    // block scope(1)
    let c = 3;
    var _c = 3;
  }
}

if(condition) {
  // block scope(2)
  let d = 4;
  var _d = 4;
}


</script>
```

## JS 활용

- 데이터 입출력
- UI 효과

### HTML DOM

- With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
- DOM(Document Object Model) : HTML Element들을 객체화 시킨 모델
- HTML DOM을 사용하여 HTML Element를 제어

### DOM 접근 API

- DOM API : DOM 객체 메소드

```
HTML 4
document.getElementById('id') : id로 DOM 접근
document.getElementsByClassName('class') : class로 DOM 접근
document.getElementsByTagName('tagname') : tag로 DOM 접근

jQuery
$('#id')
$('.class')
$('tag')

HTML 5
document.querySelector('#id')
document.querySelector('.class')
document.querySelector('tag')

document.querySelectorAll('.class')
document.querySelectorAll('tag')
```

### 이벤트

- 상태(상황)의 변화
- ~할 때: 이벤트 발생

```
마우스를 클릭할 때, 키보드 키를 누를 때
```

```
이벤트 흐름

이벤트 발생 -> 신호 발생 -> 신호 감지 -> 해당 이벤트에 대응하는 기능/동작 실행
             'click' -> addEventListner() -> function()
```

- addEventListner(이벤트 핸들러) :  이벤트 감지
- 이벤트 핸들러 : 익명함수 사용
  - 익명함수 : 함수 이름이 없는 함수, 선언과 동시에 실행

```
function(){

}
```

```
dom.addEventListner('click', function(){
  실행코드블럭
});
```

### CRUD

### 화면 효과(Effect)

- 시각적 효과 => CSS 제어
  - CSS 시작 상태와 끝 상태를 구현
  - JS 상태 변화 제어

- Effect 구현 밸런스
  - 효과 표현 : CSS
  - 효과 동적 제어 : JS