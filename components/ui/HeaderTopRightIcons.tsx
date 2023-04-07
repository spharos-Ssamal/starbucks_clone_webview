import Image from "next/image";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "@/state/cart/atom/cartState";
import { SearchModal } from "../modals/SearchModal";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { userLoginState } from "@/state/user/atom/userLoginState";
import Swal from "sweetalert2";
import { UserAuthInfo } from "@/state/user/type/UserInfo";
import { RequestLogout } from "@/Service/AuthService/AuthService";

export default function HeaderTopRightIcons() {
  const cartCnt = useRecoilValue(cartState);
  const [isLogin, setIsLogin] = useRecoilState<UserAuthInfo>(userLoginState);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [loginIcon, setLoginIcon] = useState<string>('');
  const router = useRouter();

  useEffect(()=>{
    if(isLogin.isLogin){
      setLoginIcon('/assets/images/icons/logout.svg');
    }else{
      setLoginIcon('/assets/images/icons/user.svg');
    }
  },[isLogin.isLogin])

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
              text: "로그아웃 되었습니다.",
              toast: true,
              showConfirmButton: false,
              color: "#fff",
              background: "#009b39",
              timerProgressBar: true,
              position: "top",
              timer: 2000,
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
          
          <li onClick={isLogin.isLogin && isLogin.isLogin ? handleLogout : ()=>router.push('/cart')}>
            <Image
              src={loginIcon && loginIcon}
              alt=""
              width={40}
              height={40}
            />
          </li>
          
        </ul>
      </nav>
    </div>
  );
}
