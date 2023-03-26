interface ProductProps {
  imageSrc: string;
  productTitle: string;
  productPrice: string;
}

export default function Product(props: ProductProps) {
  return (
    <div className="product-item">
      <img src={props.imageSrc} alt="" className="thumbnail" />
      <div className="product-item-info">
        <p className="item-title">{props.productTitle}</p>
        <p className="product-item-price">{props.productPrice}</p>
      </div>
    </div>
  );
}
