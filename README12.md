![image](https://github.com/leegowoon/react/assets/145514701/5b4a12dc-59bd-4a8d-b3af-abcdbfca38da)


# navigate 사용방법 -- 어떤 페이지로 강제로 이동(리다이렉트)

![image](https://github.com/leegowoon/react/assets/145514701/02cfa85a-cc34-402d-9f5c-72113c8aa543)

# userParmas
# react-router-dom의 hook

```
http://localhost:3000/product/1
```
# #url 주소에서 파라미터는 제일 뒤에 있는 1이라는 숫자이다. id값이 들어와 있다.
# #파라미터값을 읽어와야할 때 useParmas hook이다.

![image](https://github.com/leegowoon/react/assets/145514701/5ae9f521-18bf-47af-8d96-0a028846f22e)

# #문법 --> ?
```
<img src={product?.img} alt=""/>
```
product?.img

---
# #쿼리 스트링
쿼리스트링(query string)은 웹 주소(URL)에 추가적인 매개변수를 전달하는 방법 중 하나입니다.
쿼리스트링은 URL의 끝에 "?" 문자로 시작하며, 이후에 "이름=값" 형태의 매개변수들이 "&" 문자로 구분되어 나열됩니다.
