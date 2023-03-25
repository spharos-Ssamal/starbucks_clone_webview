import { useEffect, useState } from "react";
import axios from "axios";
import Config from "@/configs/config.export";
import { REQUEST_PRODUCT_ALL } from "@/constants/Apis/URL";


export default function best() {
  
  const { baseUrl } = Config();
  const [topCategory, setTopCategory] = useState<[]>([]);
  
  // useEffect (() => {
  //   axios.get(`${baseUrl}/${REQUEST_PRODUCT_ALL}`)
  //   .then(res => {
  //     setTopCategory(res.data.data);
  //     console.log(res.data.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // },[])
  return (
    <>
      <div>
        <div className="header-sub">
          <nav>
            <ul>
              {
                topCategory && topCategory.map((item) => (
                  <li className="active">케이크</li>
                  
                ))
                
              }
              <li>텀블러/보온병</li>
              <li>머그/컵</li>
              <li>라이프스타일</li>
              <li>티/커피용품</li>
              <li>세트</li>
            </ul>
          </nav>
        </div>
      </div>
      <section id="best-cake" className="first-section-sub-one">
        <div className="product-container">
          <div className="product-item">
            <img src="assets/images/best/cake/01.jpg" className="thumbnail"/>
            <div className="product-item-info">
              <p className="item-best">Best</p>
              <p className="item-title">부드러운 티라미수 롤케이크</p>
              <p className="product-item-price">19,900원</p>
            </div>
            <div className="rank-label">
              <p>1</p>
            </div>
          </div>
          <div className="product-item">
            <img src="assets/images/best/cake/02.jpg" className="thumbnail"/>
            <div className="product-item-info">
              <p className="item-best">Best</p>
              <p className="item-title">부드러운 티라미수 롤케이크</p>
              <p className="product-item-price">19,900원</p>
            </div>
            <div className="rank-label">
              <p>2</p>
            </div>
          </div>
          <div className="product-item">
            <img src="assets/images/best/cake/03.jpg" className="thumbnail"/>
            <div className="product-item-info">
              <p className="item-best">Best</p>
              <p className="item-title">부드러운 티라미수 롤케이크</p>
              <p className="product-item-price">19,900원</p>
            </div>
            <div className="rank-label">
              <p>3</p>
            </div>
          </div>
          <div className="product-item">
            <img src="assets/images/best/cake/04.jpg" className="thumbnail"/>
            <div className="product-item-info">
              <p className="item-best hide">Best</p>
              <p className="item-title">부드러운 티라미수 롤케이크</p>
              <p className="product-item-price">19,900원</p>
            </div>
            <div className="rank-label">
              <p>4</p>
            </div>
          </div>
          <div className="product-item">
            <img src="assets/images/best/cake/05.jpg" className="thumbnail"/>
            <div className="product-item-info">
              <p className="item-best hide">Best</p>
              <p className="item-title">부드러운 티라미수 롤케이크</p>
              <p className="product-item-price">19,900원</p>
            </div>
            <div className="rank-label">
              <p>5</p>
            </div>
          </div>
        </div>
      </section>
      <footer>

      </footer>
    </>
  )
}
