import ListPeriodStatusModal from "@/components/modals/ListPeriodStatusModal";
import { useState } from "react";
import styles from './purchaseList.module.css'

export default function purchaseList() {

  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const [ backgroundColor , setbackgroundColor ] = useState('white');


  return (
    <>
    
    <div className= {(!isModalOpen) ? 'wrapper' : 'wrapper2'} >
        <section className={styles.purchase_list_date}>
        <h1>주문 내역</h1>
        <div className="purchase-list-period-setting">
            <div className="purchase-list-period-setting-info flex-between">
                <p>전체</p>
                <p id="period">2022.03.03 ~ 2023.03.02</p>
                <button onClick={
                  ()=> {
                    setIsModalOpen(!isModalOpen);
                    }
                    }>
                  <img className="arrow" src="./assets/images/icons/arrow-down-sign-to-navigate.png"/>
                </button>
            </div>
            
            {
            
            <ListPeriodStatusModal
                isModalOpen= { isModalOpen }
                setIsModalOpen= { setIsModalOpen }
            />
            }
        </div>
        </section>
        <section className="purchase-list-product">
            주문 내역이 없습니다.
        </section>
    </div>
    </>
  )
}
