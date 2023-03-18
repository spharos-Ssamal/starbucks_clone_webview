import React from 'react'

export default function CartHeader() {
  return (
    <div>
      <header id="store-head">
        <div className="store-header-top">
          <div className="menu-icon">
            <img src="assets/images/icons/menu.svg" alt="" />
          </div>
          <h1><a href="">온라인 스토어</a></h1>
          <nav>
            <ul>
              <li><img src="assets/images/icons/close.png" /></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}
