import HeaderTop from "@/components/layouts/HeaderTop";
import Separator from "@/components/ui/Separator";
import { storeRcmdMenu } from "@/data/starbucksStaticDatas";
import { storeRcmdMenuType } from "@/Types/starbucksTypes";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from 'next/link';

export default function Sidebar() {
    const [ sideBar, setSideBar ] = useState<storeRcmdMenuType[]>(storeRcmdMenu);
    console.log(storeRcmdMenu);

    const router = useRouter();
    console.log(router.pathname);

  return(
    <>
    
    <section className="contents-head">
            <div className= "close-icon">
                <img src="assets/images/icons/menu.svg" alt="" />
            </div>
            <div className="contents-msg">

            {/* isLogin = true 면 인삿말 다르게 하기 */}
                <div className="msg-title">
                    Sign in to Online Store
                </div>
                <div>
                    <Link href="/login">로그인</Link> 후 이용해 보세요.
                </div>
            {/* isLogin = true 면 인삿말 다르게 하기 */}

            </div>
            <Separator borderWidth="thin" opacity={0.3}/>
        </section>
        <section id="category-items">
            <div className="get-all-items">
                <button type="button">
                    <a href=""> 전체상품보기 </a>
                    <span><img src="assets/images/icons/contents/right-arrow.png" alt="" /></span>
                </button>
            </div>
            <div className="contents-container">
                {
                    sideBar && sideBar.map (item => (
                        <Link href="/">
                        <button type="button" className="category-button">
                            <div className="category">
                                <div className="category-img">
                                    <img src={item.imgUrl} alt={item.name} />
                                </div>
                                <div className="category-name">
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        </button>
                        </Link>      
                    ))
                }
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