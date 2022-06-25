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

### Layout

# CSS