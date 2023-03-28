import { PurchaseProductInfo } from "@/Types/purchase/types";
import { StringLiteral } from "typescript";

interface Prop {
  historyId: string;
  date: string;
  purchaseProductInfo: PurchaseProductInfo;
}

export function CardProduct(prop: Prop) {
  const { historyId, date, purchaseProductInfo } = prop;

  return (
    <section id="purchase-card">
      <div className="flex">
        <div className="bold">{date}</div>
        <div className="right">
          주문 상세
          <img
            className="arrow"
            src="./assets/images/icons/arrow-point-to-right.png"
          />
        </div>
      </div>
      <div className="card-product">
        <div>
          <div className="item-info">
            <img
              src={purchaseProductInfo.thumbnail}
              alt=""
              className="product-img"
            />
            <div className="card-info">
              <p className="name">{purchaseProductInfo.productName}</p>
              <span className="bold">{purchaseProductInfo.price}</span>
              <span className="opacity">{purchaseProductInfo.count} 개</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
