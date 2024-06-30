// accessToken을 설정하는 함수
export const setCookie = (accessToken) => {
  try {
    // 쿠키에 accessToken을 설정하고, 경로를 루트(/)로 설정
    document.cookie = `accessToken=${accessToken};path=/`;
  } catch (e) {
    // 에러 발생 시 콘솔에 에러 로그 출력
    console.error(e);
  }
};

// 쿠키 값을 가져오는 함수
export function getCookie(name) {
  // 현재 문서의 쿠키 문자열을 가져옴
  const cookieString = document.cookie;
  if (cookieString.length > 0) {
    // 쿠키 문자열을 개별 쿠키로 분리
    const cookies = cookieString.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      // 쿠키 이름과 값을 분리하는 등호(=)의 인덱스를 찾음
      const separatorIndex = cookie.indexOf("=");
      // 쿠키 이름을 추출
      const cookieName = cookie.substring(0, separatorIndex);
      // 찾고자 하는 쿠키 이름과 일치하는지 확인
      if (cookieName === name) {
        // 일치하는 경우 쿠키 값을 디코딩하여 반환
        return decodeURIComponent(cookie.substring(separatorIndex + 1));
      }
    }
  }
  // 일치하는 쿠키가 없는 경우 undefined 반환
  return undefined;
}

// 모든 쿠키를 삭제하는 함수
export const deleteAllCookies = () => {
  try {
    // 현재 문서의 쿠키 문자열을 가져와 개별 쿠키로 분리
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      // 쿠키 이름과 값을 분리하는 등호(=)의 인덱스를 찾음
      const eqPos = cookie.indexOf("=");
      // 쿠키 이름을 추출
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      // 쿠키를 삭제하기 위해 만료 날짜를 과거로 설정
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
  } catch (e) {
    // 에러 발생 시 콘솔에 에러 로그 출력
    console.error(e);
  }
};
