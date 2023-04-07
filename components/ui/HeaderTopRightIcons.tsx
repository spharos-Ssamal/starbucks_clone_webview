import Image from "next/image";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "@/state/cart/atom/cartState";
import { SearchModal } from "../modals/SearchModal";
import { useRouter } from "next/router";
import { useState } from "react";
import { userLoginState } from "@/state/user/atom/userLoginState";
import Swal from "sweetalert2";
import { UserAuthInfo } from "@/state/user/type/UserInfo";
import { RequestLogout } from "@/Service/AuthService/AuthService";

export default function HeaderTopRightIcons() {
  const cartCnt = useRecoilValue(cartState);
  const [isLogin, setIsLogin] = useRecoilState<UserAuthInfo>(userLoginState);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleLogout = () => {
    Swal.fire({
      text: "로그아웃 하시겠습니까?",
      background: "#fff",
      color: "#009b39",
      showDenyButton: true,
      denyButtonColor: "#000",
      showCancelButton: false,
      confirmButtonColor: "#009b39",
      confirmButtonText: `확인`,
      denyButtonText: `취소`,
    }).then((result) => {
      if (result.isConfirmed) {
        RequestLogout()
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "즐거운 시간 보내셨나요?",
              text: "다음에도 찾아주세요~*^^*",
            });
            localStorage.removeItem("ACCESS_TOKEN");
            setIsLogin({
              isLogin: false,
              userId: "",
            });
            router.push("/");
          })
          .catch((ex) => {
            console.log(ex);
          });
      }
    });
  };

  return (
    <div>
      <SearchModal
        isModalOpen={isSearchModalOpen}
        closeModal={() => setIsSearchModalOpen(false)}
      />
      <nav>
        <ul>
          <li onClick={() => setIsSearchModalOpen(true)}>
            <Image
              src="/assets/images/icons/search.svg"
              width={20}
              height={20}
              alt={""}
            />
          </li>
          <li>
            {isLogin.isLogin && cartCnt > 0 ? (
              <p className="cart-badge">{cartCnt}</p>
            ) : (
              ""
            )}

            <Image
              src="/assets/images/icons/shopping-cart.svg"
              width={20}
              height={20}
              alt={""}
            />
          </li>
          {isLogin.isLogin ? (
            <li onClick={handleLogout}>
              <Image
                src="/assets/images/icons/logout.svg"
                alt=""
                width={40}
                height={40}
              />
            </li>
          ) : (
            <li onClick={() => router.push("/login")}>
              <Image
                src="/assets/images/icons/user.svg"
                alt=""
                width={20}
                height={20}
              />
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
