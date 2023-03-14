import { ProductInfo, RecommendInfoRes } from "@/Types/Products/ProductTypes";
import RecommendMDInfo from "../ui/products/RecommendInfo";

function MdList(props: { mdName: string; productList: RecommendInfoRes[] }) {
  return (
    <section className="recommand" id="recommand-md-1">
      <div>
        <h2>{props.mdName}</h2>
        <div className="recommand-product-list">
          {props.productList.map((product) => (
            <>
              <RecommendMDInfo key={product.products.id} product={product} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MdList;
