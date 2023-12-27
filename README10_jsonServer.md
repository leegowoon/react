# 💻 json server 사용하기
--> 작은 서버를 만드는 것 --> api소통할 때 제일 많이 쓰이는 파일타입입니다.
![image](https://github.com/leegowoon/react/assets/145514701/37678248-2ab0-4410-9ebf-f0cd5a1e3078)
---
① Install JSON Server
```
npm install -g json-server
```
② 확장명이 .json 파일을 만든다. --> 반드시 Root에 만들어야한다.
Create a db.json file with some data
```
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


③ json서버 실행 --> 기본적으로 3000번에서 시작하는데 react가 
```
json-server --watch db.json
```

```
$ json-server --watch db.json --port 3004
```
