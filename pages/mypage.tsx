import { RequestGetUserInfo } from "@/Service/UserService/UserService";
import LoginToAction from "@/components/page/mypage/loginToAction";
import Config from "@/configs/config.export";
import { userLoginState } from "@/state/user/atom/userLoginState";
import { UserInfoRes } from "@/state/user/type/UserInfo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Swal from "sweetalert2";

export default function MyPage() {
  const { baseUrl } = Config();
  const isLogin = useRecoilValue(userLoginState);
  const [userInfo, setUserInfo] = useState<UserInfoRes>();
  const router = useRouter();

  useEffect(() => {
    RequestGetUserInfo(isLogin.userId)
      .then((res) => {
        const result: UserInfoRes = res.data;
        setUserInfo(result);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, []);

  return (
    <>
      {isLogin.isLogin ? (
        <>
          <section id="order-status">
            <div>
              <h2>{userInfo?.userNickname} 님 환영합니다.</h2>
            </div>
            {/* <div className="order-status-container">
              <div className="status-item">
                <p className="status-count" id="status-prepared-count">
                  0
                </p>
                <p>상품준비중</p>
              </div>
              <div className="status-item">
                <img
                  className="arrow"
                  src="./assets/images/icons/contents/right-arrow.png"
                />
              </div>
              <div className="status-item">
                <p className="status-count" id="status-prepared-count">
                  0
                </p>
                <p>배송준비중</p>
              </div>
              <div className="status-item">
                <img
                  className="arrow"
                  src="./assets/images/icons/contents/right-arrow.png"
                />{" "}
              </div>
              <div className="status-item">
                <p className="status-count" id="status-prepared-count">
                  0
                </p>
                <p>배송중</p>
              </div>
              <div className="status-item">
                <img
                  className="arrow"
                  src="./assets/images/icons/contents/right-arrow.png"
                />{" "}
              </div>
              <div className="status-item">
                <p className="status-count" id="status-prepared-count">
                  0
                </p>
                <p>배송완료</p>
              </div>
            </div> */}
          </section>
          <section className="management">
            <div id="service">
              <h2>서비스</h2>
              <div className="menu" id="order-details">
                <a onClick={() => router.push("/purchaseList")}>
                  <div className="menu-info">
                    <img
                      className="icon"
                      src="./assets/images/icons/service/shopping-list.png"
                    />
                    <p>주문 내역</p>
                  </div>
                  <img
                    className="arrow"
                    src="./assets/images/icons/arrow-point-to-right.png"
                  />
                </a>
              </div>
              <div className="menu" id="giftbox">
                <a
                  onClick={() => {
                    Swal.fire({
                      icon: "warning",
                      title: "아직 개발되지 않았습니다.",
                      text: "아직 개발중입니다. 다음 버전에서 만나요~",
                    });
                  }}
                >
                  <div className="menu-info">
                    <img
                      className="icon"
                      src="./assets/images/icons/service/present-box.png"
                    />
                    <p>선물함</p>
                  </div>
                  <img
                    className="arrow"
                    src="./assets/images/icons/arrow-point-to-right.png"
                  />
                </a>
              </div>
              <div className="menu">
                <a
                  onClick={() => {
                    Swal.fire({
                      icon: "warning",
                      title: "아직 개발되지 않았습니다.",
                      text: "아직 개발중입니다. 다음 버전에서 만나요~",
                    });
                  }}
                >
                  <div className="menu-info">
                    <img
                      className="icon"
                      src="./assets/images/icons/service/voucher.png"
                    />
                    <p>쿠폰</p>
                  </div>
                  <img
                    className="arrow"
                    src="./assets/images/icons/arrow-point-to-right.png"
                  />
                </a>
              </div>
              <div className="menu" id="shipping-destinations">
                <a onClick={() => router.push("/address")}>
                  <div className="menu-info">
                    <img
                      className="icon"
                      src="./assets/images/icons/service/delivery-truck.png"
                    />
                    <p>배송지 관리</p>
                  </div>
                  <img
                    className="arrow"
                    src="./assets/images/icons/arrow-point-to-right.png"
                  />
                </a>
              </div>
              <div className="menu" id="receiving-notification">
                <a
                  onClick={() => {
                    Swal.fire({
                      icon: "warning",
                      title: "아직 개발되지 않았습니다.",
                      text: "아직 개발중입니다. 다음 버전에서 만나요~",
                    });
                  }}
                >
                  <div className="menu-info">
                    <img
                      className="icon"
                      src="./assets/images/icons/service/bell.png"
                    />
                    <p>입고 알림 내역</p>
                  </div>
                  <img
                    className="arrow"
                    src="./assets/images/icons/arrow-point-to-right.png"
                  />
                </a>
              </div>
            </div>
            <div id="policy">
              <h2>약관 및 정책</h2>
              <div className="menu" id="consent">
                <a
                  onClick={() => {
                    Swal.fire({
                      icon: "warning",
                      title: "아직 개발되지 않았습니다.",
                      text: "아직 개발중입니다. 다음 버전에서 만나요~",
                    });
                  }}
                >
                  <div className="menu-info">
                    <img
                      className="icon"
                      src="./assets/images/icons/service/megaphone.png"
                    />
                    <p>배송지 정보 수집 및 이용 동의</p>
                  </div>
                  <img
                    className="arrow"
                    src="./assets/images/icons/arrow-point-to-right.png"
                  />
                </a>
              </div>
            </div>
          </section>
        </>
      ) : (
        <LoginToAction />
      )}
    </>
  );
}
