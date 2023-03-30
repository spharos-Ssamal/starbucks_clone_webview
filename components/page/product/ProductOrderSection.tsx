import React, { useState } from 'react'
import styled from 'styled-components'
import myStyle from './ProductOrderSection.module.css'
import Sheet, { SheetRef } from 'react-modal-sheet';

import { useRef } from 'react';
import { OverlayTriggerState, useOverlayTriggerState } from 'react-stately';

import {
  useOverlay,
  useModal,
  OverlayProvider,
  FocusScope,
  useButton,
  useDialog,
} from 'react-aria';


const OrderToggleButton = styled.div`
  width: 40px;
  height: 5px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-bottom: 1rem;
`
const OrderButton = styled.div`
  width: 100%;
  border-radius: 30px;
  background-color: rgb(0, 155, 57);
  color: white;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  padding: 8px 0;
`

const OrderButton35width = styled(OrderButton)`
  width: 35%;
`

const OrderInfoSection = styled.div`
  width: 100%;
  padding: 0px 0px 10px 0;
`

const OrderInfo = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: rgb(0, 0, 0, 0.1);
  box-size: border-box;
  height: 100px;
  color: darkgray;
  #wrap {
    padding: 2px;
    
    #space-btw {
      color: #000;
      display: flex;
      justify-content: space-between;
    }
  }
  `

const OrderInfoPrice = styled.div`
  width: 100%;
  padding: 10px 0;
  text-align: right;
  font-size: 1.1rem;
  font-weight: 600;
  #price {
   font-size: 1.3rem;
  }
`

export default function ProductOrderSection() {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<SheetRef>();


  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <div className={isOpen ? myStyle.productOrderSectionOpen : myStyle.productOrderSection}>
      {
        !isOpen ? <OrderToggleButton onClick={handleOpen}/> : null
      }
      
      <OrderButton onClick={handleOpen}>주문하기</OrderButton>
    </div>
    <Sheet
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    detent="content-height"
    style={{
      zIndex: 100,
    }}
    >
    <Sheet.Container
      
    >
      {/**
       * Since `Sheet.Content` is a `motion.div` it can receive motion values
       * in it's style prop which allows us to utilise the exposed `y` value.
       *
       * By syncing the padding bottom with the `y` motion value we introduce
       * an offset that ensures that the sheet content can be scrolled all the
       * way to the bottom in every snap point.
       */}
      <Sheet.Content>
        <div style={{ height: '400px', boxSizing: 'border-box', paddingTop: '1rem'}}>
          <OrderToggleButton onClick={() => setIsOpen(false)}/>
          <div style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            padding: '1rem',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <div style={{
            width: '30%',
            backgroundColor: 'rgb(0, 155, 57)',
            color: 'white',
            borderRadius: '20px',
            padding: '10px 0',

          }}>1</div>
          <div>2</div>
          <div>3</div>
          </div>
         </div>
      </Sheet.Content>
    </Sheet.Container>
  </Sheet>
  </>
  );
}