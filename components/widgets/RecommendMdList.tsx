import { RecommendInfoRes } from "@/Types/ProdType";

function RecommandMdList(props: {mdName: string, productList: RecommendInfoRes}) {
  return (
    <section className="recommand" id="recommand-md-1">
    <div>
      <h2>Cherry Blossom🌸</h2>
      <div className="recommand-product-list">
        <div className="recommand-product-item">
          <div className="recommand-product-item__img">
            <img src="assets/images/products/01.png" alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
          </div>
          <div className="recommand-product-item__info">
            <p className="item-new">New</p>
            <p className="item-title">23 SS 체리 밸류 로맨틱 텀블러 355ml</p>
            <p className="item-price"><span>32,000</span>원</p>
          </div>
        </div>
        <div className="recommand-product-item">
          <div className="recommand-product-item__img">
            <img src="assets/images/products/01.png" alt="" />
          </div>
          <div className="recommand-product-item__info">
            <p className="item-new hide">New</p>
            <p className="item-title">23 SS 체리 밸류 로맨틱 텀블러 355ml</p>
            <p className="item-price"><span>32,000</span>원</p>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  );
}

export default RecommandMdList;