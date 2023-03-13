import { ProductInfo, RecommendInfoRes } from "@/Types/Products/ProductTypes";
import Image from "next/image";

function RecommendMDInfo(props: { product: RecommendInfoRes }) {
  return (
    <div className="recommand-product-item">
      <div className="recommand-product-item__img">
        <img
          src={props.product.products.thumbnail}
          alt={props.product.products.name}
        />
      </div>
      <div className="recommand-product-item__info">
        <p className="item-new hide">New</p>
        <p className="item-title">{props.product.products.name}</p>
        <p className="item-price">
          <span>{props.product.products.price}</span>원
        </p>
      </div>
    </div>
  );
}

export default RecommendMDInfo;
