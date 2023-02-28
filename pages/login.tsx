import Head from "next/head";

function Login() {
  return ( 
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="header-login">
        <a href="index.html" className="back">
          <img src="assets/images/icons/left-chevron.svg" alt="" width="20px;" />
        </a>
        <h1>로그인</h1>
      </div>

      <section id="greeting">
        <a href="#">
          <img src="assets/images/icons/logo.png" alt="logo" />
        </a>
        <h2 className="hello">
          <p>안녕하세요.</p>
          <p>스타벅스입니다</p>
        </h2>
        <p className="text7">회원 서비스 이용을 위해 로그인 해주세요</p>
      </section>

      <section id="login_func">
        <form >
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>아이디</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>비밀번호</label>
          </div>
          
          <div className="signup_link">
            <a href="#">아이디 찾기</a>
            <span className="pass">|</span>
            <a href="#">비밀번호 찾기</a>
            <span className="pass">|</span>
            <a href="#">회원가입</a>
          </div>

          <div className="btn">
            <input type="submit" value="로그인하기" />
          </div>
        </form>

      </section>
      </>
   );
}

export default Login;