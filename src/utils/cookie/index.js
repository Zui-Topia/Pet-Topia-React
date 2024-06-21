export const setCookie = (accessToken) => {
  try {
    document.cookie = `accessToken=${accessToken};path=/;max-age=300000`;
  } catch (e) {
    console.error(e);
  }
};

export function getCookie(name) {
  const cookieString = document.cookie;
  if (cookieString.length > 0) {
    const cookies = cookieString.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const separatorIndex = cookie.indexOf("=");
      const cookieName = cookie.substring(0, separatorIndex);
      if (cookieName === name) {
        return decodeURIComponent(cookie.substring(separatorIndex + 1));
      }
    }
  }
  return undefined;
}

export const deleteAllCookies = () => {
  try {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
  } catch (e) {
    console.error(e);
  }
};
