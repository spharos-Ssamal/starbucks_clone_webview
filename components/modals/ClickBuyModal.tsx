import styles from './ClickBuyModal.module.css'
export default function ClickBuyModal() {
  return (
    <div className="ClickBuyModal_wrap">
      <div className="grey-bar"></div>
      <div className="greybox">
        <div className="greybox-head">product name</div>
        <div className="count-left">
          <div className="minus">
            <img src="assets/images/icons/minus.png" alt="" />
          </div>
          <div className="qty">1</div>
          <div className="plus">
            <img src="assets/images/icons/plus.png" alt="" />
          </div>
        </div>
        <div className="count-right">20000won</div>
      </div>

      <hr />

      <div className="total">
        <div className="total_small">TOTAL</div>
        <div className="total_amount">TOTAL</div>
        <div className="total_unit">Won</div>
      </div>

      <div className="bottom">
        <div className="bottom-left">
          <img src="" alt="" />
        </div>
        <div className="btn-mid-white">GIFT</div>
        <div className="btn-mid-green">PURCHASE</div>
      </div>
    </div>
  )
}
