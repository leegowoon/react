import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("실행");
    fetch(`data/products.json`)
      .then((res) => res.json()) //.then --> 위에서(fetch에서) 제대로 가져왔다면 이라는 뜻
      .then((data) => {
        //두줄이상 적어야할 때 {}
        setProducts(data);
        console.log(products);
      });
  }, []);
  // useEffect의 실행이 종료되고, 데이타가 변경된다.
  console.log(products);

  return (
    <div>
      products
      {products.map((product) => {
        return (
          <li>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Products;
