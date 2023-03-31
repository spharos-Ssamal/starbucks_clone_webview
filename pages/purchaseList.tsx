import { getUsersPurchaseHistory } from "@/Service/PurchaseService/PurchaseService";
import {
  PurchaseHistory,
  GetUsersPurchaseHistoryRes,
} from "@/Types/purchase/types";
import { CardProduct } from "@/components/page/purchase/cardProduct";
import { userLoginState } from "@/state/user/atom/userLoginState";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function PurchaseList() {
  const isLogin = useRecoilValue(userLoginState);
  const [purchaseHistory, setPurchaseHistory] = useState<PurchaseHistory[]>([]);

  useEffect(() => {
    if (isLogin.userId !== undefined) {
      getUsersPurchaseHistory(isLogin.userId, "2023-03-01", "2023-03-31").then(
        (res) => {
          const result: PurchaseHistory[] = res.data.histories;
          setPurchaseHistory([...result]);
        }
      );
    }
  }, []);

  return (
    <div>
      <section id="purchase-list-date">
        <h1>주문 내역</h1>
        <div className="purchase-list-period-setting">
          <div className="purchase-list-period-setting-info flex-between">
            <p>전체</p>
            <p id="period">2022.03.03 ~ 2023.03.02</p>
            <button>
              <img
                className="arrow"
                src="./assets/images/icons/arrow-down-sign-to-navigate.png"
              />
            </button>
          </div>
          <div className="flex-between period-button">
            <button>1개월</button>
            <button className="clicked">1년</button>
            <button>기간 설정</button>
          </div>
          <div className="flex-between period-date">
            <input type="date" /> ~ <input type="date" />
          </div>
          <div className="purchase-list-form">
            <div className="flex-between purchase-list-option">
              <div>
                <label htmlFor="purchase-list-category">주문 유형</label>
                <br />
                <select id="purchase-list-category">
                  <option>전체</option>
                  <option>일반주문</option>
                  <option>선물주문</option>
                </select>
              </div>
              <div>
                <label htmlFor="purchase-list-status">주문 상태</label>
                <br />
                <select id="purchase-list-status">
                  <option>전체</option>
                  <option>주문완료</option>
                  <option>주문취소</option>
                  <option>교환/반품</option>
                </select>
              </div>
            </div>
            <section className="purchase-list-submit">
              <button type="submit">조회</button>
            </section>
          </div>
        </div>
      </section>
      <section className="purchase-list-product">주문 내역이 없습니다.</section>
      {purchaseHistory &&
        purchaseHistory.map((element, idx) => (
          <CardProduct
            key={element.historyId}
            historyId={element.historyId}
            date={element.date}
            purchaseProductInfo={element.productInfoList[0]}
          />
        ))}
    </div>
  );
}
