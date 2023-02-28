

function Header() {
  return (  
    <header>
      <div className="header-top">
        <div className="header-top-left">
          <img src="assets/images/icons/menu.svg" alt="" />
        </div>

        <div className="header-top-center">
          <h1>온라인 스토어</h1>
        </div>

        <div className="header-top-right">
          <ul>
            <li className="icon"><img src="assets/images/icons/search.svg" alt="search" /></li>
            <li className="icon"><img src="assets/images/icons/shopping-cart.svg" alt="cart" /></li>
            <li className="icon"><img src="assets/images/icons/user.svg" alt="user" /></li>
          </ul>
        </div>
      </div>
      <div className="header-bottom">
        <div className="nav-bar">
          <ul>
            <li className="active"><a href="">메인</a></li>
            <li><a href="">기획전</a></li>
            <li><a href="">베스트</a></li>
            <li><a href="">마이페이지</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;