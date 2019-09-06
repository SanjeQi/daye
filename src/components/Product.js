import React from "react";

const Product = ({ data }) => {
  return (
    <div className="card-parent">
      {data.map(item => {
        return (
          <div className="card" key={item.price}>
            <img src={item.productImage} alt="alt" />

            <h3>Price: {item.price} GPB</h3>
            <h3>Package content :</h3>
            <li>
              <ul>Size: {item.tampons[0].size}</ul>
              <ul>Coating: {item.tampons[0].coating}</ul>
              <ul>Amount: {item.tampons[0].amount}</ul>
            </li>

            <li>
              <ul>Size: {item.tampons[1].size}</ul>
              <ul>Coating: {item.tampons[1].coating}</ul>
              <ul>Amount: {item.tampons[1].amount}</ul>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
