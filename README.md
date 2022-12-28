# 멋쟁이 사자처럼
## 자바스크립트 코어에 대해 학습합니다.

---

[JavaScript Core Branch](https://github.com/s-ja/core_js)
[JavaScript Core ](https://productive-printer-b81.notion.site/JavaScript-0d9b4ab4adea4c7980f41a2aa68f4424)

- [x] Code Structure [코드 구조](https://ko.javascript.info/structure)
- [x] Variable [변수와 상수](https://ko.javascript.info/variables)
- [x] Strict Mode [엄격 모드](https://ko.javascript.info/strict-mode)
- [x] Global This
- [x] Data Type
- [x] Type Conversion
- [ ] operation

---

### 확장 프로그램 comment devider
- [링크](https://marketplace.visualstudio.com/items?itemName=stackbreak.comment-divider)
### 확장 프로그램 nested comment
- [링크](https://marketplace.visualstudio.com/items?itemName=stackbreak.comment-divider)
### 확장 프로그램 color blocks
- [링크](https://marketplace.visualstudio.com/items?itemName=zimonitrome.color-blocks)
### 확장 프로그램 Hide Comments
- [링크](https://marketplace.visualstudio.com/items?itemName=eliostruyf.vscode-hide-comments)

### 확장 프로그램 Color Manager
- [링크](https://marketplace.visualstudio.com/items?itemName=RoyAction.color-manager)

---
### '전역을 오염시키지 말라.' - var/let/const

```
var a = 'a'
undefined
a
'a'
let b = 'b'
undefined
b
'b'
window.b
undefined
window.a
'a'
```

- 가비지 콜렉터(?)

### 맥 윈키리스 키보드 사용시 node.js 종료 방법
- 윈키리스 키보드에서 컨트롤 키에 커맨드(윈도우)키를 매핑한 경우 터미널에서 node.js를 종료하는 방법.
1. killall node = 실행중인 모든 노드 프로세스를 종료한다.
2. ```lsof -i tcp:****``` + ```kill -9 PID번호``` = ****에 현재 사용중인 포트 번호를 기입, 현재 사용중인 포트번호의 PID번호를 확인 + kill -9 뒤에 입력하여 해당 프로세스를 종료할 수 있음.
[참고1](https://yceffort.kr/2021/07/kill-a-nodejs-process)
[참고2](https://www.inflearn.com/questions/183092/npm-run-serve-%EC%A2%85%EB%A3%8C%EB%B2%95)

### 수업 시간 작업 내용중 기억 안나는 부분
![캡처](./images/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202022-12-27%20%EC%98%A4%ED%9B%84%2011.22.07.png)
- cmd + p -> settingGUI 진입후 association 검색, Files:Association 에 새로운 값으로 설정
- js애서 리액트 코드를 자유롭게 사용할 수 있게끔 하는 설정, 혹은 주석 관련 확장 프로그램 오류로 인해 설정한 것으로 기억(예상)
- 이후 확인 필요