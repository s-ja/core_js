# 멋쟁이 사자처럼
## 자바스크립트 학습 저장소
___

학습 주제별로 브랜치를 나눠 수업을 진행합니다.

해당 학습 자료는 해당 브랜치로 이동 후 확인 가능합니다.

---

[링크](https://github.com/s-ja?tab=repositories)
- [x] 체크박스
- [ ] 체크박스

---

[JavaScript Core Branch](https://github.com/s-ja?tab=repositories)

---
### 굳이 패키지를 설치하는 이유, 굳이 d와 devD를 나눠서 설치하는 이유

- 사이트는 혼자 만드는 게 아니기 때문
- -g 는 사용자 컴퓨터에서 안보임. 내 컴퓨터에만 깔려있기 때문
- npm install -D live-server 로 npm에 다시 기록해두는 것
- 내 사이트는 devDependencies에 의존하고 있다고 package.json에 명시해두면, 이전 사용자의 설치환경을 npm install 명령어만으로 설치할 수 있음(다른 사람의 프로그램을 받으면, npm install부터 해야 함. 하지도 않았으면서 clone해서 받아온다고 보이는 게 아님)

-dependencies 에는 애플리케이션 동작과 연관된,
-devDependencies 에는 애플리케이션 동작과 직접적인 연관은 없지만, 이름 그대로 개발할 때 필요한 라이브러리를 설치
-이렇게 구분해주는 이유는 결국 배포할 때 어떤 라이브러리가 포함되냐
-dependencies 에 설치된 라이브러리는 배포할 때 포함되지만

### .gitignore

- npm 내부에 너무 많은 파일들이 있으니, package.json 안에 기록된(장부) 만을 남기고 깃으로 오갈 수 있게끔 함

### npx live-server
- 뒤에 폴더 명을 안붙이면 core_js 자체가 열림
- 뒤에 client/라고 붙여 줘야지만 index.html 이 열림.
[live-server](https://www.npmjs.com/package/live-server)
- --port=NUMBER - select port to use, default: PORT env var or 8080
- --host=ADDRESS - select host address to bind to, default: IP env var or 0.0.0.0 ("any address")
- --host=localhost => http://localhost:8080/ // --host=localhost --port=5500 => 포트넘버가 겹칠 경우를 대비하여 포트넘버를 지정가능 // --no-browser => 브라우저가 바로 열리지 않게끔 하는 명령어


### node server/index.js

### 정리
- 노드 = 내 컴퓨터에 깔려있는 것 (node.js)
- 자바스크립트는 살 수 있는 환경이 두 가지(브라우저환경, 노드환경). 두 가지를 다 실행해본 것.
- main.js에 console.log(); 결과를 브라우저에서 확인 가능했음
- 웹브라우저에서 JS를 돌리고 있는 것!
- 노드환경에서 JS를 돌리고 있는걸 확인하려고
- 터미널에 node client/main.js 로 호출해서 확인한 것
- 지금은 live-server로 넣어놨기에 서버로 구동되는 것..
- 다 지우고 console.log(); 넣으면 그대로 로그 출력됨

### 확장 ESLint / prettier
- lint : 보풀을 치다, 간결하게 하다
- npm init @eslint/config
[ESLint Rules](https://eslint.org/docs/latest/rules/)

### npx add-gitignore
- node window macos vscode
- 단축어 : npx add-gitignore node,window,macos,webstorm,vscode