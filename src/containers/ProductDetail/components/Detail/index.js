import React, { Component } from "react";
import "./style.css";

class Detail extends Component {
  render() {
    const {
      detail: { category, products, remark },
      currentPrice,
      oldPrice
    } = this.props.data;
    return (
      <div className="detail">
        <div className="detail__header">
          <span>More details</span>
          <i className="detail__headerIcon" />
        </div>
        <table cellPadding="0" cellSpacing="0" className="detail__table">
          <tbody>
            <tr className="detail__row">
              <th colSpan="3" className="detail__category">
                {category}
              </th>
            </tr>
            {products.map((item, index) => {
              return (
                <tr key={index} className="detail__row">
                  <td>{item.name}</td>
                  <td className="detail__td--alignRight">{item.quantity}</td>
                  <td className="detail__td--alignRight">{item.price}</td>
                </tr>
              );
            })}

            <tr className="detail__row">
              <td />
              <td className="detail__td--price">
                Highest price
                <br />
                <strong className="detail__td--priceNew">Group buying price</strong>
              </td>
              <td className="detail__td--price">
                {oldPrice}
                <br />
                <strong className="detail__td--priceNew">
                  {currentPrice}
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="detail__remark">{remark}</div>
        <div className="detail__more">
          <span>More description</span>
          <span className="detail__notice">
            (Under wifi condition recommended)
          </span>
          <i className="detail__arrow" />
        </div>
      </div>
    );
  }
}

export default Detail;
