import { imageType } from "@/Types/image/imageType";
import { getImageSize } from "react-image-size";
import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  productId: number;
  imageSrc: string;
  productTitle: string;
  productPrice: string;
}

export default function ProductCard(props: Props) {
  const [size, setSize] = useState<imageType>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    getImageSize(props.imageSrc).then((size: SetStateAction<imageType>) => {
      setSize(size);
    });
  }, [props]);

  return (
    <div className="product-item">
      <div className="thumbnail">
        <Link href={`/product/${props.productId}`}>
          <Image
            src={props.imageSrc}
            alt={props.productTitle}
            width="160"
            height="160"
          />
        </Link>
      </div>
      <div className="product-item-info">
        <p className="item-title">{props.productTitle}</p>
        <p className="product-item-price">
          {parseInt(props.productPrice).toLocaleString("KR-kn")} 원
        </p>
      </div>
    </div>
  );
}
