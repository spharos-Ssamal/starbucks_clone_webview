export function PurchaseListModal() {
  return (
    <div>
      <div className="flex-between period-button">
        <button>1개월</button>
        <button className="clicked">1년</button>
        <button>기간 설정</button>
      </div>
      <div className="flex-between period-date">
        <input type="date" /> ~ <input type="date" />
      </div>
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
  );
}
