import { useRouter } from "next/router";

export default function LoginToAction() {
  const router = useRouter();

  return (
    <>
      <div className="loginToActionWrap">
        <div className="toActionMsg">
          <h2>로그인 후</h2>
          <h2>이용할 수 있는 서비스입니다.</h2>
        </div>

        <div className="toActionButton">
          <button className="mainThemeBgWhite" onClick={() => router.push("/")}>
            메인으로 가기
          </button>
          <button
            className="mainThemeBgTheme"
            onClick={() => router.push("/login")}
          >
            로그인
          </button>
        </div>

        <div className="toActionImg">
          <img
            src="./assets/images/starbucksIllustrate/loginToAction.png"
            alt="loginToActionImg"
          />
        </div>
      </div>
    </>
  );
}
