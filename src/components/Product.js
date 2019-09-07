import React from "react";

const Product = ({ data }) => {
  return (
    <div className="prod">
      {data.map(item => {
        return (
          <div className="parent-card">
            <li>
              <div className="card" key={item.price}>
                <img src={item.productImage} alt="alt" />

                <h3>Package Price: {item.price} GPB</h3>
                <h3>Package content :</h3>
                <ul>
                  <li>Size: {item.tampons[0].size}</li>
                  <li>Coating: {item.tampons[0].coating}</li>
                  <li>Amount: {item.tampons[0].amount}</li>
                </ul>

                <ul>
                  <li>Size: {item.tampons[1].size}</li>
                  <li>Coating: {item.tampons[1].coating}</li>
                  <li>Amount: {item.tampons[1].amount}</li>
                </ul>
              </div>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
