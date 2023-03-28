import { AddressDataType } from "@/Types/address/addressType";
import Link from "next/link";

interface Props {
  isModify: boolean;
  Address?: AddressDataType;
}

export default function AddressRegister(props: Props) {
  const { isModify, Address } = props;

  return (
    <>
      <section id="info-header">
        <div>배송지 정보</div>
      </section>
      <section id="delivery-input">
        <div>
          <input type="text" placeholder="주소 별칭" />
          <input type="text" placeholder="받는 분 *" />
          <div className="post-number">
            <input type="text" placeholder="우편번호 *" />
            <Link href="">
              <div className="search-address">주소검색</div>
            </Link>
          </div>
          <input type="text" placeholder="기본주소 *" />
          <input type="text" placeholder="상세주소 *" />
          <input type="text" placeholder="연락처1 *" />
          <input type="text" placeholder="연락처2" />
          <div className="delivery-memo">
            <p>배송 메모</p>
            <select name="" id="">
              <option value="">배송 메모를 선택해 주세요.</option>
              <option value="">배송 전 연락 바랍니다.</option>
              <option value="">부재 시 경비실에 맡겨주세요.</option>
              <option value="">부재 시 문 앞에 놓아주세요.</option>
              <option value="">부재 시 전화 또는 문자 남겨주세요.</option>
              <option value="">직접 입력</option>
            </select>
          </div>
          <div className="save-delivery">
            <input type="checkbox" />
            <span>기본 배송지로 저장합니다.</span>
          </div>
        </div>
      </section>
      <section className="submit-container">
        {isModify ? (
          <button type="submit">등록하기</button>
        ) : (
          <button type="submit">수정하기</button>
        )}
      </section>
    </>
  );
}
