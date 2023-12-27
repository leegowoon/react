# 💻 json server 사용하기
--> 작은 서버를 만드는 것 --> api소통할 때 제일 많이 쓰이는 파일타입입니다.
![image](https://github.com/leegowoon/react/assets/145514701/37678248-2ab0-4410-9ebf-f0cd5a1e3078)
---
① Install JSON Server
```
npm install -g json-server
```
② 확장명이 .json 파일을 만든다. --> 반드시 Root에 만들어야한다.
```
- Create a db.json file with some data

{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```


③ json서버 실행 --> 기본적으로 3000번에서 시작하는데 react가 3000을 사용하기 때문에 다른 포트 번호를 알려줘야 한다.
```
json-server --watch db.json
```
④ 
```
json-server --watch db.json --port 3004
```
- 혹시 안되면
```
npx json-server --watch db.json --port 3004
```
⑤ 새창을 열고 주소창에 입력
```
http://localhost:3004/products
```
⑥ json파일의 내용이 보인다.   
![image](https://github.com/leegowoon/react/assets/145514701/a05a3ced-8f55-4f10-988a-5f96ad7a0c98)



https://www.npmjs.com/package/json-server



---

12/27   
![image](https://github.com/leegowoon/react/assets/145514701/faba8ea8-668f-4e7f-b24d-99a8e8a68a55)

