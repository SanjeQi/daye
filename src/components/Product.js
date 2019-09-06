import React from "react";

const Product = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map(item => {
          return (
            <li key={item.price}>
              <h2>Package Details</h2>
              <img src={item.productImage} />
              <h3>Price</h3>
              <p>{item.price}</p>
              <h3>Package contents</h3>
              <p>
                {" "}
                {item.tampons[0].size} - coating: {item.tampons[0].coating} -{" "}
                {item.tampons[0].amount}
              </p>
              <p>
                {" "}
                {item.tampons[1].size} - coating: {item.tampons[1].coating} -{" "}
                {item.tampons[1].amount}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Product;
