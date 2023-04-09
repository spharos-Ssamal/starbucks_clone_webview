import { getUsersPurchaseHistory } from "@/Service/HistoryService/HistoryService";
import { PurchaseHistory } from "@/Types/purchase/types";
import { CardProduct } from "@/components/page/purchase/cardProduct";
import { userLoginState } from "@/state/user/atom/userLoginState";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import Swal from "sweetalert2";

export default function PurchaseList() {
  const isLogin = useRecoilValue(userLoginState);
  const [purchaseHistory, setPurchaseHistory] = useState<PurchaseHistory[]>([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onChangeDatePicker = (e: any) => {
    const { name, value } = e.target;
    if (name === "startDate") {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  };

  const onSubmitResult = () => {
    if (isLogin.userId !== undefined) {
      if (startDate === "" || endDate == "") {
        Swal.fire({
          icon: "warning",
          title: "알림",
          text: "시작 날짜와 종료 날짜를 입력 해 주세요.",
        });
      } else {
        getUsersPurchaseHistory(isLogin.userId, startDate, endDate).then(
          (res) => {
            const result: PurchaseHistory[] = res.data.histories;
            setPurchaseHistory([...result]);
          }
        );
      }
    }
  };

  return (
    <div>
      <section id="purchase-list-date">
        <h1>주문 내역</h1>
        <div className="purchase-list-period-setting">
          {/* <div className="purchase-list-period-setting-info flex-between">
            <p>전체</p>
            <p id="period">2022.03.03 ~ 2023.03.02</p>
            <button>
              <img
                className="arrow"
                src="./assets/images/icons/arrow-down-sign-to-navigate.png"
              />
            </button>
          </div> */}
          {/* <div className="flex-between period-button">
            <button name={DATE_OPTION_MONTH}>1개월</button>
            <button name={DATE_OPTION_YEAR} className="clicked">
              1년
            </button>
            <button name={DATE_OPTION_OPTIONAL}>기간 설정</button>
          </div> */}
          <div className="flex-between period-date">
            <input name="startDate" type="date" onChange={onChangeDatePicker} />{" "}
            ~ <input name="endDate" type="date" onChange={onChangeDatePicker} />
          </div>
          {/* <div className="purchase-list-form">
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
          </div> */}
          <section className="purchase-list-submit">
            <button onClick={onSubmitResult}>조회</button>
          </section>
        </div>
      </section>

      {purchaseHistory.length !== 0 ? (
        purchaseHistory.map((element) => (
          <CardProduct
            key={"PurchasedProduct " + element.historyId}
            historyId={element.historyId}
            date={element.date}
            purchaseProductInfo={element.productInfoList}
          />
        ))
      ) : (
        <section className="purchase-list-product">
          주문 내역이 없습니다.
        </section>
      )}
    </div>
  );
}
