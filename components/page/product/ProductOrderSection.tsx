import { useState, useRef } from "react";
import styled from "styled-components";
import myStyle from "./ProductOrderSection.module.css";
import Sheet, { SheetRef } from "react-modal-sheet";
import Separator from "@/components/ui/Separator";


const OrderToggleButton = styled.div`
  width: 40px;
  height: 5px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-bottom: 1rem;
`;
const OrderButton = styled.div`
  width: 100%;
  border-radius: 30px;
  background-color: rgb(0, 155, 57);
  color: white;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  padding: 8px 0;
`;
const OrderButton35width = styled(OrderButton)`
  width: 40%;
  padding: 9px 0px;
  font-weight: 400;
`;
const OrderButton38widthColorReverse = styled(OrderButton35width)`
  background: white;
  color: rgb(0, 155, 57);
  border: 1px solid rgb(0, 155, 57);
  padding: 7px 0px;
`;

export default function ProductOrderSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<SheetRef>();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={
          isOpen ? myStyle.productOrderSectionOpen : myStyle.productOrderSection
        }
      >
        {!isOpen ? <OrderToggleButton onClick={handleOpen} /> : null}

        {!isOpen ? (
          <OrderButton onClick={handleOpen}>구매하기</OrderButton>
        ) : (
          <div className={myStyle.productOrderSectionOpenBottomWrap}>
            <img src="../assets/images/icons/shopping-cart.svg" />
            <OrderButton38widthColorReverse>
              선물하기
            </OrderButton38widthColorReverse>
            <OrderButton35width>구매하기</OrderButton35width>
          </div>
        )}
      </div>
      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        detent="content-height"
        style={{
          zIndex: 100,
        }}
      >
        <Sheet.Container>
          <Sheet.Content>
            <div
              style={{
                height: "300px",
                boxSizing: "border-box",
                paddingTop: "1rem",
              }}
            >
              <OrderToggleButton onClick={() => setIsOpen(false)} />
              <div className={myStyle.greyWrap}>
                <div className={myStyle.greyboxWrap}>
                  <div className={myStyle.greybox}>
                    <div className={myStyle.title}>
                      그린 사이렌 도트 머그 355ml
                    </div>

                    <div className={myStyle.QtyCountWrap}>
                      <div className={myStyle.QtyCount}>
                        <img src="../assets/images/icons/minus.png" />
                        1
                        <img src="../assets/images/icons/add.png" />
                      </div>
                      <div className={myStyle.priceBold}>13,000원</div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator color="lightgrey" gutter={0.6} />

              <div className={myStyle.bottomPriceWrap}>
                합계{" "}
                <span className={myStyle.rightBottomBoldPrice}>13,000원</span>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
}
