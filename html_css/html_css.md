# HTML

- Contents

  - Text
  - Media
    - Image, Video, Audio

- Structure
  - Semantic : 의미있는 구조
  - Layout

## HTML basic

- HTML : Hyper Text Markup Language

  - Hyper Text : 하이퍼링크로 연견된 문서 => 웹페이지(콘텐츠,구조)
  - Markup : 표시
  - Language : 언어

- HTML 문법
  - 명칭 : Tag / Element
  - 구성 : 시작태그 ~ 종료태그
  - 종료태그가 없는 태그 : 빈태그(Empty Element)

```
<tag> content </tag> : Element

<tag ...> : Empty Element
```

- HTML Attribues
  - HTML Element 를 표시할 때 필요한 추가정보 입력
  - name="value"
  - Attributes usually come in name/value pairs like: name="value"

```
<a href="https://www.naver.com/">네이버</a>

<img src="photo.jpg">
```

## HTML Basic Structure

```
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body></body>
</html>
```

### DOCTYPE

- HTML 문서타입
  - HTML 버전
  - HTML5 표준

### Head - 웹사이트 기본정보

- meta : 웹사이트 관련 정보(검색엔진)
- title : 웹사이트 제목

### Body - 웹사이트 컨텐츠

- 웹사이트에 contents, structure... 표시하는 모든 태그

## HTML Contents

### Text

#### heading(제목)

- h(heading) : 제목태그
- 1~6 단계로 표시됨

#### paragraphs(단락)

- p(paragraphs) : 단락태그
- 강제 줄바꿈(enter), 강제 공백(space)은 인식되지 않고 공백 한 칸으로만 인식
  - line break : br(강제 줄바꿈 tag)
  - space : &nbsp; (강제 공백 엔티티(Entity))
- hr(horizontal rule) : 수평선 긋기
  - 단락을 선의 형태로 구분

#### list(목록)

-순서없는 목록/ 순서있는 목록

- ul(Unordered List) : 순서없는 목록
- ol (Ordered List) : 순서있는 목록
- li (List Item) : 목록 입력

\*\* 포함관계(Nested Structure)

- 태그안에 다른 태그들이 포함되는 것
- 포함하는 요소
  - 조상 요소(Ancestor)
    부모 요소(Parent)
- 포함되는 요소
  - 자식 요소(Child)
  - 자손 요소(Descendant)
- 옆에 나란히 있는 요소
  - 형제 요소(Sibling)

```
(1) <html>
(2)   <body>
(3)     <h1>내용 제목</h1>
(4)     <p>
(5)         단락 내용<br>
      </p>
    </body>
 </html>
```

(1) 조상 요소 | 기준 요소 | 조상 요소
(2) 조상 요소 | 자식 요소 | 부모 요소
(3) | 자손 요소 | 형제 요소
(4) 부모 요소 | 자손 요소 | 기준 요소
(5) 기준 요소 | 자손 요소 | 자식 요소

- Description List(설명 목록)

  - dl(description list)
  - dt(description term): 항목 제목
  - dd(description data): 항목 내용

#### table(표)

- table
- thead (table head) : 표 상단 - 제목
- tbody (table body) : 컨텐츠, 데이터
- tr (table row) : 행
- th (table header) : 제목
- td (table data) : 칸(열)

#### hyper link(하이퍼링크)

- a(anchor)
- 기본 속성: href(hypertext reference) : 연결할 위치(웹페이지)

 <!-- 예제: <a href="https://ko.wikipedia.org/wiki/W3C">W3C</a> -->
 <!-- <a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a> -->

- 링크 이동 위치
  - 외부링크:
  - 내부링크: Bookmark

### Media

#### image(이미지)

<!-- <img src="url" alt="alternatetext"> -->

- image
  - 시작/ 종료 없는 태그 <img src="" alt="">
- 기본 속성
  - src(source): 이미지 파일 이름, 위치
  - alt(alternate text): 대체 텍스트 - 이미지가 화면에 표시되지 않을때, screen reader(가 읽어줄때)

<img src="photo.jpg" alt="제주도 서귀포 바닷가 배경 사진">

#### video(영상)

- video, source
- 속성

  - video tag: on/off 형태 attribute

    - controls: 동영상 제어 버튼
    - autoplay: 자동재생
    - muted: 음소거
    - loop: 반복 재생

  - souce tag
    - src: 파일 이름, 경로
    - type: 미디어 형식

-Youtube 영상

## HTML Structure

### Semantic

- header
  - logo, login ...
- nav(navigation)
  - menu
- section
  - 본문 영역
  - The <section> element defines a section in a document.
- article
  - 본문 영역
  - The <article> element specifies independent, self-contained content.
- aside
  - 본문 영역, 부수적인 컨텐츠
- footer
  - 연락처, 주소, 회사 이름 ...

### Layout

- Block & Inline
  - Block 요소
    - 태그가 브라우저에 표시될 때 각 태그 영역이 새 줄에서 표시
    - 태그 영역이 부모요소에 전체 채워짐
    - A block-level element always starts on a new line
    - And the browsers automatically add some space (a margin) before and after the element.
  - Inline 요소
    - 태그가 브라우저에 표시될 때 각 태그 영역이 같은 줄에서 표시
    - 태그 영역이 콘텐트에 맞춰짐
    - An inline element does not start on a new line.

### container element

- div (division)
  - block
- span
  - inline

## 경로 지정 방식

- 파일 위치, 인터넷 주소(URL)
- 상대 경로
  - 리소스 파일을 사용하는 HTML 파일 기준
  - html 파일 위치에 따라 주소(URL) 변경
  - root(/) 폴더를 기준으로 주소 적용 => root 상대 경로

```
[root(/)] - [html1] - home.html
          - [html2] - [about] - about.html
          - [images] - photo.jpg

1) home.html -> photo.jpg
- ../images/photo.jpg
- /images/photo.jpg

2) about.html -> photo.jpg
- ../../images/photo.jpg
- /images/photo.jpg
```

- 절대 경로
  - 이미지를 표시하는 HTML 페이지가 기준이 아니고, 해당 서버가 기준
  - 서버부터 주소(URL)를 사용하기 때문에 변동이 없음.

```
image.com

[root(/)] - [html1] - home.html
          - [html2] - [about] - about.html
          - [images] - photo.jpg

1) home.html
- www.image.com/images/photo.jpg
2) about.html
- www.image.com/images/photo.jpg

```

## 강조 태그, 기타 태그

- 텍스트 특정 부분 강조

  - strong : 강한 강조
  - em (emphasize) : 일반 강조
  - mark : html5 버전, block 강조

- 텍스트를 표현할 때 부족한 태그를 보완하는 태그
  - i (italic)
  - b (bold)

# CSS

- content styling

  - text styling
  - media styling

- layout (structure styling)
  - 가로배치(flexbox)

## CSS Basic

- CSS : Cascading Style Sheet

```
h1 {color:blue; font-size:20px; }
h1 {
  color:blue;
  font-size:20px;
}
```

## Selector (선택자)

- 선택자로 HTML 요소를 선택
- HTML 요소 선택 방법
  - Simple Selector(단순 선택자)
    - Tag/Element 이름 사용
    - Class 이름 사용
    - id 이름 사용

```
<a href="https://www.naver.com/" class="naver">네이버</a>
<a href="https://www.daum.net/" id="daum">다음</a>

/* a 태그 두개 모두 red 적용 */
a {
  color:red;
}

/* a 태그 가가 다른 red 적용 */
.naver {
  color:blue;
}

#daum {
  color:green;
}
```

### id, class 이름의 특징

- id

  - 같은 HTML 페이지에서 고유(유일)해야 함
    - 프로그래밍 언어의 변수와 연결 가능성이 있음
  - HTML 요소에 여러개의 id 이름 사용 불가능

- class

  - 같은 HTML 페이지에서 여러번 사용가능 함
  - HTML 요소에 여러개의 class 이름 사용 가능

- naming 규칙
  - https://whales.tistory.com/2

```
<p class="paragraph">단락1</p>
<p class="paragraph">단락2</p> (O)
<p id="content">단락3</p>
<p id="content">단락4</p> (X)

<p class="gnb-list-item">회사소개</p>
```

### CSS 선택자 우선순위

- cascading 규칙

  - 동일한 대상에 여러 스타일이 적용될 때 제일 마지막에 적용된 스타일이 반영

- 선택자 우선순위
  - 선택자 종류에 따라 CSS 적용 우선순위가 다르게 적용
  - cascading 규칙에 따르지 않고 CSS를 적용할 때 사용
  - CSS 우선순위
    - Inline: 1000
    - id: 100
    - class: 10
    - tag: 1

### Text Styling

#### Color

```
h1{
  color:blue;
}
```

#### Text alignment

```
p{
  text-align:center;
}
```

- 정렬 값: left, center, right, justify(양쪽 맞춤)
- 단어 중간에 줄바꿈

  - word-break

  ```
    p{
      word-break:break-all;
    }
  ```

#### Text Decoration

```
h1{
  text-decoration:underline;
  }

h1{
  text-decoration:line-through;
  }

h1{
  text-decoration:overline;
  }

a{
  text-decoration:none;
  }

```

#### Text Spacing

```
p{
  text-indent:16px;
}

h2{
  letter-spacing:5px;
}

p{
  word-spacing:3px;
}

p{
  white-space:nowrap;
}
```

-line-height -텍스트 줄을 포함한 줄 높이

- 값
  - px
  - 배수: 소수점을 포함한 숫자 가능, 폰트 크기를 기준

** 조상요소나 부모요소에 CSS 속성을 적용했을 때, 자식요소도 적용되는것을 상속
  - HTML Element 중에 상속되지 않는 태그 있음
  - CSS 속성중에 상속되지 않는 속성 있음

#### Font Family

- CSS 파일이 브라우저에서 랜더링되기 때문에 폰트 파일을 클라이언트 PC에서 찾음
  - 다수의 클라이언트 pc에 설치될 만한 폰트를 선택(Web Safe)
- font-family  속성에 값으로 정해준 폰트 종류를 차례대로 찾음(Fallback)

- 서버에서 폰트를 사용할 수 있게 하는 기능
  - Web Font

- 구글 폰트

- 폰트 종류(저작권)
  - 폰트 파일 포함 여부


#### Font size

- font-style
- 기울림꼴 설정
- italic 값

#### Font weight

- font-weight
- 굵기
- normal/bold
- 단위없는 100단위 숫자 값 사용