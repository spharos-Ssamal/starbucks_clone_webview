import { userLoginState } from "@/state/user/atom/userLoginState";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { searchParams } from "@/Types/filter/filterTypes";
import { storeFilterState } from "@/state/store/atom/storeFilterState";
import { SEARCH_OPTION_STORE } from "@/constants/enums/SearchOption";

interface Iprops {
  isModalOpen: boolean;
  closeModal: () => void;
}

export default function SideMenuModal(props: Iprops) {
  const router = useRouter();
  const isLogin = useRecoilValue(userLoginState);
  const [filterParams, setFilterParams] =
    useRecoilState<searchParams>(storeFilterState);

  const handleStore = () => {
    setFilterParams({
      searchOption: SEARCH_OPTION_STORE,
      searchName: "",
      category: 1,
      subCategories: [],
      seasons: [],
      productSize: [],
      priceValue: {
        id: 0,
        priceStart: -1,
        priceEnd: -1,
      },
    });
    props.closeModal();
    router.push("/productSearch/store?category=1");
  };

  const handleOpenEventPage = () => {
    props.closeModal();
    router.push("/event");
  };

  const handleOpenBestPage = () => {
    props.closeModal();
    router.push("/best");
  };

  return (

      <SlidingPane
        className="slide-modalWrap"
        from="left"
        width="100vw"
        isOpen={props.isModalOpen}
        onRequestClose={props.closeModal}
        hideHeader={true}
      >

      <section className="contents-head">
        <div>
          <Image
            src="/assets/images/icons/close.png"
            alt=""
            width={20}
            height={20}
            onClick={props.closeModal}
          />
        </div>
        {isLogin.isLogin ? (
          <div className="contents-msg">
            <div className="msg-title">Welcome</div>
            <div>온라인 스토어에 오신 걸 환영합니다.</div>
          </div>
        ) : (
          <div className="contents-msg">
            <div className="msg-title">Sign in to Online Store</div>
            <div>
              <a href="">로그인</a> 후 이용해 보세요.
            </div>
          </div>
        )}
        <hr className="contents-line" />
      </section>
      <section id="category-items">
        <div className="get-all-items">
          <button type="button" onClick={handleStore}>
            <a> 전체상품보기 </a>
            <span>
              <Image src="/assets/images/icons/contents/right-arrow.png" alt="" width={10} height={10}/>
            </span>
          </button>
        </div>
        <div className="contents-container">
          <button
            type="button"
            className="category-button"
            onClick={() => {
              router.push("/store?category=2");
              props.closeModal();
            }}
          >
            <div className="category">
              <div className="category-img">
                <Image
                  src="/assets/images/products/category/category-cake.jpg"
                  alt="케이크"
                  width={100}
                  height={100}
                />
              </div>
              <div className="category-name">
                <p>케이크</p>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="category-button"
            onClick={() => {
              router.push("/store?category=3");
              props.closeModal();
            }}
          >
            <div className="category">
              <div className="category-img">
                <Image
                  src="/assets/images/products/category/category-tumblr.jpg"
                  alt="텀블러/보온병"
                  width={100}
                  height={100}
                />
              </div>
              <div className="category-name">
                <p>텀블러/보온병</p>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="category-button"
            onClick={() => {
              router.push("/store?category=4");
              props.closeModal();
            }}
          >
            <div className="category">
              <div className="category-img">
                <Image
                  src="/assets/images/products/category/category-cup.jpg"
                  alt="머그컵"
                  width={100}
                  height={100}
                />
              </div>
              <div className="category-name">
                <p>머그컵</p>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="category-button"
            onClick={() => {
              router.push("/store?category=5");
              props.closeModal();
            }}
          >
            <div className="category">
              <div className="category-img">
                <Image
                  src="/assets/images/products/category/category-lifestyle.jpg"
                  alt="라이프스타일"
                  width={100}
                  height={100}
                />
              </div>
              <div className="category-name">
                <p>라이프스타일</p>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="category-button"
            onClick={() => {
              router.push("/store?category=6");
              props.closeModal();
            }}
          >
            <div className="category">
              <div className="category-img">
                <Image
                  src="/assets/images/products/category/category-tea.jpg"
                  alt="티/커피용품"
                  width={100}
                  height={100}
                />
              </div>
              <div className="category-name">
                <p>티/커피용품</p>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="category-button"
            onClick={() => {
              router.push("/store?category=7");
              props.closeModal();
            }}
          >
            <div className="category">
              <div className="category-img">
                <Image
                  src="/assets/images/products/category/category-set.jpg"
                  alt="세트"
                  width={100}
                  height={100}
                />
              </div>
              <div className="category-name">
                <p>세트</p>
              </div>
            </div>
          </button>
        </div>
      </section>
      <section id="nav-event-best">
        <div className="nav-button">
          <button onClick={handleOpenEventPage}>
            <div className="nav-container">
              <div>
                <span className="title">기획전</span>
                <br />
                <span>진행중인 기획전을 만나보세요.</span>
              </div>
              <Image src="/assets/images/icons/contents/right-arrow.png" alt="" width={20} height={20}/>
            </div>
          </button>
          <hr />
        </div>
        <div className="nav-button">
          <button onClick={handleOpenBestPage}>
            <div className="nav-container">
              <div>
                <span className="title">베스트</span>
                <br />
                <span>스타벅스의 베스트 상품을 만나보세요.</span>
              </div>
              <Image src="/assets/images/icons/contents/right-arrow.png" alt="" width={20} height={20}/>
            </div>
          </button>
        </div>
      </section>
    </SlidingPane>
  );
}
