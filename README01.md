# 1.node.js 설치
* 자바스크립트를 브라우저 밖에서도 동작할 수 있게 하는 런타임환경
* node.js 제공하는 것이 npm(Node Package Manager)
* npm이란 node.js로 만들어진 필요한 모듈을 다운받고 관리해줌. 다른 개발자가 만들어둔 유용한 node.js로 만들어진 툴로 가져다 쓸 수 있음
* npm을 이용한 유용한 라이브러리를 다운받을 예정(개발을 가져다쓰는게 절반이다.)
* 
* ![image](https://github.com/leegowoon/react/assets/145514701/fc6ac50d-86ae-45c7-b8ad-b856742e66df)

* 윈도우 버튼 옆에 cmd, 관리자권한으로 열기를 하면
* ![image](https://github.com/leegowoon/react/assets/145514701/319ac964-742a-4c8e-87be-6eac64f6affa)

* node.js 사이트에서 설치파일을 다운받고 그것을 설치한다.
* cmd 화면에서
* ```
  node -v
  ```
  을 입력하면 아래 버전이 나오면 설치 완료
  ![image](https://github.com/leegowoon/react/assets/145514701/537befd1-a39f-4f71-8d8f-f14725bcdb6c)
* node.js를 설치하면 npm이 자동으로 설치됨
* ![image](https://github.com/leegowoon/react/assets/145514701/e4d49c1d-0377-4ba9-9865-f159e9efd2ee)
* 
* npx는 npm이 설치될 때 함께 설치가 된다.
* npm >> 외부 라이브러리를 쉽게 설치하고 버전을 관리할 수 있게 한다. >> package.json를 만들게 된다.
* npx >> 라이브러리를 개별적으로 실행하고자 할 때 사용하는 것임

# 1. 폴더 생성
- 프로젝트를 만들 폴더를 만든다. ex)my-react
# 2. react에서 필요한 패키지를 자동으로 설치해주는 명령어를 입력한다.
```
npx create-react-app 리액트가실행될폴더명
아래와 같이 만든다.
npx create-react-app my-app
```
- my-react>my-app 구조가 만들어진다.

- my-app 폴더 안으로 진입한다.
```
cd my-app
```
- my-app안에 소스를 실행한다.
```
npm start
```

# SPA:Single Page Application
- 페이지는 하나인데 여러개인 것처럼 눈속임을 한다. 페이지가 여러개인것처럼 보이지만 사실은 하나!
- 페이지를 매번 새로 가져올 필요가 없음, 웹사이트를 모바일처럼 사용할 수 있음

# react 확장프로그램
- ![image](https://github.com/leegowoon/react/assets/145514701/0cf7aaef-43af-47e9-bd1d-f06855dd10b5)





