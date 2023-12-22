# 🛍Shopping

# RESTful : Repersentation State Transfer의 약자
- RESTful Routes는 url 패턴을 말한다.
- get : 데이터 가져올 때 사용하는 패턴
- post : 새로운 데이터를 만들 때
- put : 기존 데이터를 수정할 때
- delete : 데이터를 삭제할 때   
![image](https://github.com/leegowoon/react/assets/145514701/4b0ef19e-e81b-435c-a05a-7faa34d15b47)

- 내가 선택한 상품의 상세페이지로 이동하고자 한다면   
  /subjects/:id 방법을 사용하자   
  : 이것은 파라미터라는 뜻 --> url로 파라미터값을 넘긴다.   
  /subjects 는 고정적인 값이나 :id는 가변적인 값이다. --> 어떤 임의의 값을 만들어서 개별 아이템으로 넘길 수 있다.

---

# react router dom 설치
① react router dom 설치
```
npm install react-router-dom
```
② index.js에 BrowserRouter 실행   
- 모든 react UI를 BrowserRouter가 감싸주어야한다.
![image](https://github.com/leegowoon/react/assets/145514701/8bd05472-0b8a-4ae5-843a-dca30df225fa)   
③ page를 만들고 그 페이지의 경로를 router에 등록 --> Routes, Route   
④
