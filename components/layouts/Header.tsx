import { useRouter } from "next/router";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

function Header() {
  const { pathname } = useRouter();
  const productPath = pathname.split("/")[1];

  return (
    <header>
      <HeaderTop/>
      {productPath === "product" ? null : (
        
        <HeaderBottom />
        
      )}
    </header>
  );
}

export default Header;
