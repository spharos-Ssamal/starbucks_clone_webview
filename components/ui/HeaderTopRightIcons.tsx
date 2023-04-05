import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { cartState } from "@/state/cart/atom/cartState";
import { SearchModal } from "../modals/SearchModal";
import { useRouter } from "next/router";

export default function HeaderTopRightIcons() {
  const cartCnt = useRecoilValue(cartState);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const router = useRouter();

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
            <p className="cart-badge">{cartCnt}</p>
            <Image
              onClick={() => router.push("/cart")}
              src="/assets/images/icons/shopping-cart.svg"
              width={20}
              height={20}
              alt={""}
            />
          </li>
          <li onClick={() => router.push("/login")}>
            <Image
              src="/assets/images/icons/user.svg"
              alt=""
              width={20}
              height={20}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}
