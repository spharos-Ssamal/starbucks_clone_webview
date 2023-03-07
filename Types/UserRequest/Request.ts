export interface LoginReq {
  userEmail: string;
  password: string;
}

export interface RegisterReq {
  userEmail: string;
  userName: string;
  userNickname: string;
  password: string;
  birthday: Date;
  phoneNo: string;
  isAgree: boolean;
}

export interface VeriftyEmailReq {
  email: string;
  verifyCode: string;
}
