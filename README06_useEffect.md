

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

