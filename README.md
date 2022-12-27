# 멋쟁이 사자처럼
## 자바스크립트 코어에 대해 학습합니다.

---

[JavaScript Core Branch](https://github.com/s-ja/core_js)
[JavaScript Core ](https://productive-printer-b81.notion.site/JavaScript-0d9b4ab4adea4c7980f41a2aa68f4424)

- [ ] Code Structure [코드 구조](https://ko.javascript.info/structure)
- [ ] Variable [변수와 상수](https://ko.javascript.info/variables)
- [ ] Strict Mode [엄격 모드](https://ko.javascript.info/strict-mode)

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