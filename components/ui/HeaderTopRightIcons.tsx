import Image from "next/image";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "@/state/cart/atom/cartState";
import { SearchModal } from "../modals/SearchModal";
import { useRouter } from "next/router";
import { useState } from "react";
import { userLoginState } from "@/state/user/atom/userLoginState";
import { RequestLogout } from "@/Service/AuthService/AuthService";
import Swal from "sweetalert2";
import { UserAuthInfo } from "@/state/user/type/UserInfo";

export default function HeaderTopRightIcons() {
  const cartCnt = useRecoilValue(cartState);
  const [isLogin, setIsLogin] = useRecoilState<UserAuthInfo>(userLoginState);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const onClickLogout = () => {
    RequestLogout().then((res) => {
      Swal.fire({
        icon: "success",
        title: "로그아웃!",
        text: "로그아웃 되었습니다.",
      });

      setIsLogin({ userId: "", isLogin: false });
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
          <li onClick={() => router.push("/cart")}>
            <p className="cart-badge">{cartCnt}</p>
            <Image
              src="/assets/images/icons/shopping-cart.svg"
              width={20}
              height={20}
              alt={""}
            />
          </li>
          {isLogin.isLogin ? (
            <>
              <li onClick={onClickLogout}>
                <Image
                  src="/assets/images/icons/close.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </li>
            </>
          ) : (
            <>
              <li onClick={() => router.push("/login")}>
                <Image
                  src="/assets/images/icons/user.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
