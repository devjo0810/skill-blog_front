// 운영체제 타입
export const OS_TYPE = {
  ANDROID: "android",
  IOS: "ios",
  NOMOBILE: "nomobile",
};

// 디스플레이 가로, 세로 값
export const ORIENTATION = {
  LANDSCAPE: "landscape", // 가로
  PORTRAIT: "portrait", // 세로
};

/** byte 단위 **/
export const KB_TO_BYTE = 1024; // KB
export const MB_TO_BYTE = 1024 * 1024; // MB
export const GB_TO_BYTE = 1024 * 1024 * 1024; // GB

// 프로필 사진 크기
export const PROFILE_SIZE = 3 * MB_TO_BYTE; // 3MB

// cookie 값
export const COOKIES = {
  ID: "login_id",
  TOKEN: "login_token",
};

// Dialog 타입
export const DIALOG_TYPE = {
  ALERT: "alert",
  CONFIRM: "confirm",
};
