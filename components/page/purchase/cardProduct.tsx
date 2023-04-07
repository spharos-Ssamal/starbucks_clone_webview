import { PurchaseProductInfo } from "@/Types/purchase/types";
import { useRouter } from "next/router";
import { StringLiteral } from "typescript";
import HistoryCard from "./HistoryCard";

interface Prop {
  historyId: string;
  date: string;
  purchaseProductInfo: PurchaseProductInfo[];
}

export function CardProduct(prop: Prop) {
  const router = useRouter();
  const { historyId, date, purchaseProductInfo } = prop;

  return (
    <section id="purchase-card">
      <div className="flex">
        <div className="bold">{date}</div>
        <div
          className="right"
          onClick={() => {
            router.push(`/purchaseDetail/${historyId}`);
          }}
        >
          주문 상세
          <img
            className="arrow"
            src="/assets/images/icons/arrow-point-to-right.png"
          />
        </div>
      </div>
      <div className="card-product">
        <div>
          {purchaseProductInfo &&
            purchaseProductInfo.map((element, idx) => (
              <HistoryCard
                key={element.productName + " " + idx}
                purchaseProductInfo={element}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
