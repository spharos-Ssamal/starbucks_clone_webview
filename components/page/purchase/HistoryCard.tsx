import { PurchaseProductInfo } from "@/Types/purchase/types";

export default function HistoryCard(props: {
  purchaseProductInfo: PurchaseProductInfo;
}) {
  return (
    <>
      <div className="item-info">
        <img
          src={props.purchaseProductInfo.thumbnail}
          alt=""
          className="product-img"
        />
        <div className="card-info">
          <p className="name">{props.purchaseProductInfo.productName}</p>
          <span className="bold">{props.purchaseProductInfo.price}</span>
          <span className="opacity">{props.purchaseProductInfo.count} 개</span>
        </div>
      </div>
    </>
  );
}
