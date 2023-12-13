# react에서는 이 데이터를 변할 수 있는 값이며 값이 변할 때마다 UI를 변경해 달라고 (화면을 다시 그려달라) 알려야한다. 그럴 때 사용하는 것이 useState()이다.
```
const [num,setNum]=useState(0)
```

- 이 데이터를 변할 수 있는 값 >> num
- num을 변하게 하는 함수 >> setNum >> 함수를 이용하여 num을 변경한다.
- useState(0)의 0은 num의 초기값

- ![image](https://github.com/leegowoon/react/assets/145514701/f6eb9f38-99c6-48f3-8041-229d05953c9c)
---
# 12/12(화)
![image](https://github.com/leegowoon/react/assets/145514701/6eb38617-0680-4909-b3ea-171ff8dfed7c)
- 변수는 {}안에
- {`${name}안녕`}
- style은 {}중괄호 두번 >> {{}}
- ul>li 대신 밑에 코드처럼 배열을 쓴다.
- ```
  const list = ["원숭이","호랑이","곰"]
  ```
  
![image](https://github.com/leegowoon/react/assets/145514701/a085c925-be5e-47f7-af04-35a6de7bd22c)

![image](https://github.com/leegowoon/react/assets/145514701/7a3a1dd5-5a4b-40cf-bd51-3c04d1771e0d)
---
- 12월 12일 복습내용
![image](https://github.com/leegowoon/react/assets/145514701/b2cd2d3b-2de3-4a58-931f-01941946696f)
![image](https://github.com/leegowoon/react/assets/145514701/388c03e7-50e9-4cf0-901d-7beb5a56ee1b)

---
# 12/13(수)
- 부분적으로 값 받기
![image](https://github.com/leegowoon/react/assets/145514701/1cf4c4a0-d023-4ea7-84d9-c9bceded38c9)
![image](https://github.com/leegowoon/react/assets/145514701/48cddade-bb32-4f9e-8bf3-4a7d12da99b1)

- 구조분해

```
import React from 'react'

const Profile = ({img,name,title,isNew}) => {
    // || >> 또는 A || B 둘 중에 하나라도 True 이면 True
    // && >> 그리고 A && B 둘 중에 하나라도 false이면 false
  
  //console.log(props)
  // const img = props.img;
  // const name = props.name;
  // const title = props.title;
  // const isNew = props.isNew;

  // 구조분해 destructure
  //const {img,name,title,isNew}=props;

  return (
    <div className='profile'>
        <img src={img} alt="avatar" />
        {/* {isNew?<span className='new'>신입</span>:""} */}
        {isNew && <span className='new'>신입</span>}
        <h2>{name}</h2>
        <p>{title}</p>
    </div>
  )
}

export default Profile
```
![image](https://github.com/leegowoon/react/assets/145514701/2da7c95b-6a07-47c5-bfe2-3d2a0ded38d7)

