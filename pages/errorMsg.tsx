import React from 'react'

export default function errorMsg() {
  return (
    <>
    <div className="errorMsgWrap">
      <div className="errormsg">
        <div className="errorTitle">일시적인 오류가 발생했습니다.</div>
        <p className="errorSorry">서비스 이용에 불편을 드려 죄송합니다.</p>
        <p className="errorSorry">잠시 후 다시 이용해 주세요.</p>
      </div>
      <div>
       <button className="mainThemeBgTheme">다시 시도</button>
      </div>

      <div className="errorBoard">
        오류코드: -0006
      </div>

    </div>
    <div className="errorImg">
      <img src="./assets/images/starbucksIllustrate/errorMsg.PNG" />
    </div>
    
    
    </>
  )
}
