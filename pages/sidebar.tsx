import { useState } from "react";

export default function Sidebar() {
    const [ sideBar, setSideBar ] = useState<>();
    

  return(
    <>
    

    
    <section className="contents-head">
            <div className= "close-icon">
                <img src="assets/images/icons/menu.svg" alt="" />
            </div>
            <div className="contents-msg">
                <div className="msg-title">
                    Sign in to Online Store
                </div>
                <div>
                    <a href="">로그인</a> 후 이용해 보세요.
                </div>
            </div>
            <hr className="contents-line" />
        </section>
        <section id="category-items">
            <div className="get-all-items">
                <button type="button">
                    <a href=""> 전체상품보기 </a>
                    <span><img src="assets/images/icons/contents/right-arrow.png" alt="" /></span>
                </button>
            </div>
            <div className="contents-container">
                <button type="button" className="category-button">
                    <div className="category">
                        <div className="category-img">
                            <img src="assets/images/products/category/category-cake.jpg" alt="케이크" />
                        </div>
                        <div className="category-name">
                            <p>케이크</p>
                        </div>
                    </div>
                </button>             
            </div>
        </section>
        <section id="nav-event-best">
            <div className="nav-button">
                <button>
                    <div className="nav-container"> 
                        <div>
                            <span className="title">기획전</span>
                            <br />
                            <span>진행중인 기획전을 만나보세요.</span>
                        </div>
                        <img src="assets/images/icons/contents/right-arrow.png" alt="" />
                    </div>
                </button>
                <hr />
            </div>
            <div className="nav-button">
                <button>
                    <div className="nav-container"> 
                        <div>
                            <span className="title">베스트</span>
                            <br />
                            <span>스타벅스의 베스트 상품을 만나보세요.</span>
                        </div>
                        <img src="assets/images/icons/contents/right-arrow.png" alt="" />
                    </div>
                </button>
            </div>
        </section>

    </>
  );
}