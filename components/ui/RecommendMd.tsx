import { RecommendInfoRes } from "@/Types/ProdType";
import RecommendMdList from "../widgets/RecommendMdList";

export default function RecommendMd(props: {mdName: string; productList: RecommendInfoRes[]} ) {

  return(
    <>
    <section className="recommand" id="recommand-md-1">
    <div>
      <h2>{props.mdName}</h2>
      <div className="recommand-product-list">
        {props.productList.map( item => (
          <>
            <RecommendMdList key={item.products.id} item={product}/>
          </>
        ))}
      </div>
    </div>
  </section>
    </>
  );
}