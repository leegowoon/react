# 💛 useEffect -- src4폴더 참조

# 🖤 useEffect(()=>{},[])
- useEffect(()=>{},[]) --> 배열이 비어있을 경우에는 component가 실행될 때 처음 한번만 실행된다.   
![useEffect](https://github.com/leegowoon/react/assets/145514701/c1637933-8b65-45a7-b084-c87652cafaa8)   
![image](https://github.com/leegowoon/react/assets/145514701/aa929964-3ff4-4901-a6be-7f342cd655a6)

- useEffect(()=>{},[products]) --> component가 실행될 때 처음 한번 실행된 후 products의 값이 바뀔 때마다 useEffect가 실행된다.   
![image](https://github.com/leegowoon/react/assets/145514701/1512654d-cf6f-4210-b0f7-66a56aefa6fa)

- useEffect(()=>{},[products, count]) --> component가 실행될 때 처음 한번 실행된 후 products와 count 중 하나라도 값이 바뀌면 useEffect가 실행된다.(2개 다 바뀌어도 한번만 실행된다.)





---

# 12/19(화)
- {showProducts && <Products/>} : showProducts이면서 <Products/> (&&:교집합)
- Toggle키를 안 누르면 true   
![image](https://github.com/leegowoon/react/assets/145514701/5d62d0b9-03cf-4b61-9df8-355edc3e60f6)

- Toggle키를 누르면 false   
![image](https://github.com/leegowoon/react/assets/145514701/3250d20b-1424-4356-8d8e-a348500ca9dc)

```
return (
    <div>
        {products.map((product)=>{
            return(
            <li>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </li>
            )
            
        })}
    </div>
  )

- 간단하게 줄이면
return (
    <div>
        {products.map((product)=>(
            <li>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </li>
            )

      )}
    </div>
  )
```
![image](https://github.com/leegowoon/react/assets/145514701/7348dfa0-bcfd-496c-a440-354ab550bf6e)

---
# 12월 20일(수)   
![image](https://github.com/leegowoon/react/assets/145514701/2422a2d0-59d4-4334-bc96-d83866877bb6)   
![image](https://github.com/leegowoon/react/assets/145514701/840ec332-f9d8-4b19-98ec-113e3a12faeb)

---
# 12월 21일(목)
- useEffect()가 종료되는 시점에 데이타가 변경된다.   
![image](https://github.com/leegowoon/react/assets/145514701/83ceb479-ba9e-48e0-98ee-b210b8bd89dc)

# 12월 22일(금)
- 이전값 prev
- setNum((이전값)=>이전값 + 1)
- 
```
import { useState } from "react";
import "./App.css";

function App() {
  //let num = 0;
  
  // const num = useState(3)[0];
  // const setNum = useState(3)[1]; //구조분해문법

  let [num, setNum] = useState(0); // --> 위 두 코드를 요약하면

  return (
    <div className="counter">
      <span className="number">{num}</span>
      <button className="button" onClick={()=>{

        // 아래 코드 세줄에서는 값이 변화가 없다.
        // 상태값은 함수가 종료 후 다시 함수가 실행될 때 반영되기 때문이다.
        // num은 모두 0이다.
        // setNum(num + 1) //setNum(num++); --> 이 코드는 여기서 한번 더 실행된다. 그래서++을 잘 안 사용한다. 값만 기억한다.
        // setNum(num + 1)
        // setNum(num + 1)

        // prev는 이전값을 가지고 있음
        // setNum((prev)=> {
        //   return prev + 1})

         setNum((prev)=>prev + 1)   //1 //setNum(num + 1)와 값이 같다.
        // setNum((prev)=>prev + 1) //2
        // setNum((prev)=>prev + 1) //3

        // setNum((prev)=>prev + 1); // --> 
        // console.log(prev + 1); // --> console.log(num)이 3일 때 setNum(num+1)는 4인 이유 --> num이 set 한단계 느리다.=3인걸 기억만하고 실행X -->
        }}>1씩증가</button>
    </div>
  );
}

export default App;
```







