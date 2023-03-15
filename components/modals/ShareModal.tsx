import styles from './ShareModal.module.css'

export default function ShareModal() {
  return (
    <div>
      <div className="shareModal">
        <h2>상품 공유하기</h2>
        <hr />
        <p>이 상품 어때요? 다른사람에게 공유해 보세요!</p>
        
        <button className="sharemd-btn">취소</button>
      </div>
    </div>
  )
}
