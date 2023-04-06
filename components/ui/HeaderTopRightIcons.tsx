import React, { useState } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { cartState } from "@/state/cart/atom/cartState";
import { SearchModal } from "../modals/SearchModal";
import { useRouter } from "next/router";
import { userLoginState } from "@/state/user/atom/userLoginState";
import Swal from "sweetalert2";

export default function HeaderTopRightIcons() {
  const cartCnt = useRecoilValue(cartState);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const isLogin = useRecoilValue(userLoginState);
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
        // logout
        router.push("/");
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
            {isLogin.isLogin && cartCnt > 0 ?  <p className="cart-badge">{cartCnt}</p> : ""}
            <Image
              onClick={() => router.push("/cart")}
              src="/assets/images/icons/shopping-cart.svg"
              width={20}
              height={20}
              alt={""}
            />
          </li>
          {
            isLogin.isLogin ? ( <li onClick={handleLogout}>
            <Image
              src="/assets/images/icons/logout.svg"
              alt=""
              width={40}
              height={40}
            />
          </li> ) : ( <li onClick={() => router.push("/login")}>
            <Image
              src="/assets/images/icons/user.svg"
              alt=""
              width={20}
              height={20}
            />
          </li>)
          }
          
        </ul>
      </nav>
    </div>
  );
}
