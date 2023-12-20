# 💛 useEffect

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








