#  Vue.js 와 React.js 를 활용한 프론트엔드 웹개발 과정
- 훈련기관 : 티아이에스정보기술교육센터학원
- 훈련기간 : 2023-06-04 ~ 2023-07-16 (3회차)
- 수업자료 다운로드: <a target="_blank" href="https://drive.google.com/file/d/1xGkjCzlq7qsto_Kf70VBYG1mVEaC6DGA/view?usp=drive_link">drive.google.com</a>

# 프리페어레이션

학습에 앞서 준비해야 할 사항을 안내합니다.


## 선행 학습

아래 나열된 웹 표준 기술은 수업 시간에 별도 설명없이 활용되므로 선행 학습이 필요합니다.

- <a target="_blank" href="https://developer.mozilla.org/ko/docs/Web/HTML">HTML</a>：의미있는 구조화(Semantic Markup)
- <a target="_blank" href="https://developer.mozilla.org/ko/docs/Web/CSS">CSS</a>：모던 레이아웃(Flexbox & CSS Grid 등)
- <a target="_blank" href="https://ko.javascript.info/">JavaScript</a>：DOM 접근/조작, 명령형 프로그래밍(Imperative, Event Handling 등)
- <a target="_blank" href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/">ECMAScript</a>：모던 JavaScript (v6(2015) 이후 매년 릴리스 됨)
- <a target="_blank" href="https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model">DOM</a>：문서 객체 모델
- <a target="_blank" href="https://developer.mozilla.org/ko/docs/Web/API/CSS_Object_Model">CSSOM</a>：CSS 객체 모델

## 권장 학습

아래 나열된 기술은 수업 시간에 다루는 주제입니다. 가능하다면 사전 학습을 권장합니다.

- <a target="_blank" href="https://git-scm.com/">Git</a>：버전 관리 시스템
- <a target="_blank" href="https://eslint.org/">ESLint</a>：JavaScript 린터
- <a target="_blank" href="https://prettier.io/">Prettier</a>：코드 포멧터
- <a target="_blank" href="https://babeljs.io/">Babel</a>：JavaScript 컴파일러
- <a target="_blank" href="https://webpack.js.org/">Webpack</a>：모듈 번들러
- <a target="_blank" href="https://jestjs.io/">Jest</a>：테스팅 프레임워크


## 학습 준비

학습에 앞서 준비해야 할 사항을 안내합니다.

### 웹 브라우저

강의 중 주로 사용하는 브라우저는 <a target="_blank" href="https://www.google.com/intl/ko/chrome/">Google Chrome</a>입니다.
다른 웹 브라우저를 사용해도 무방합니다. (<a target="_blank" href="https://browsehappy.com/">Mozilla Firefox, Microsoft Edge</a> 등)

#### 웹 브라우저 확장

- <a target="_blank" href="https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg">[Vue.js devtools]</a>
- <a target="_blank" href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko">[React Developer Tools]</a>

### 코드 에디터

강의에서 사용되는 에디터는 Microsoft 사의 <a target="_blank" href="https://code.visualstudio.com/">Visual Studio Code</a> 입니다.

### 런타임 환경

강의에서 <a target="_blank" href="https://nodejs.org/ko/">Node.js</a> 런타임 환경을 사용합니다. (Node v16+ 권장)

```sh
node -v
npm -v
npx -v
```

### 쉘 스크립트

강의 중 명령어 환경에서 사용하는 쉘 스크립트는 <a target="_blank" href="https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%8B%9C_(%EC%9C%A0%EB%8B%89%EC%8A%A4_%EC%85%B8">Bash Shell</a>입니다.

Windows에서 Bash Shell을 사용하려면 Git Bash 에뮬레이터를 사용하세요.

Windows 10 이상 사용자인 경우, <a target="_blank" href="https://docs.microsoft.com/ko-kr/windows/wsl/about">WSL</a>을 설치해 Ubuntu를 사용하는 방법으로 대체할 수 있습니다.



### 수업 영상 자료

[es2015 수업 영상](https://youtu.be/5zBmgLhiIRM)



### 설문 조사

설문에 응답해주세요.
