import { RecommendInfoRes } from "@/Types/ProdType";
import MdList from "../widgets/MdList";
import RecommendMdList from "../widgets/RecommendMdList";

export default function RecommendMd(props: {mdName: string; productList: RecommendInfoRes[] } ) {

  return(
    <>
    <section className="recommand" id="recommand-md-1">
    <div>
      <h2>{props.mdName}</h2>
      <div className="recommand-product-list">
        {props.productList.map( item => (
          <>
            <MdList key={item.products.id} product={item}/>
          </>
        ))}
      </div>
    </div>
  </section>
    </>
  );
}