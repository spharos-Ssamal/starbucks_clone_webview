import { useState, useRef } from "react";
import myStyle from "./ProductOrderSection.module.css";
import Sheet, { SheetRef } from "react-modal-sheet";
import Separator from "@/components/ui/Separator";
import {
  OrderButton,
  OrderButton35width,
  OrderButton38widthColorReverse,
  OrderToggleButton,
} from "@/components/ui/OrderButtonsPerSize";

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
