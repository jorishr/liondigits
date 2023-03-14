export function setCookie(key, val) {
  document.cookie = `${key}=${val};max-age=${60 * 60 * 24 * 7};Secure`;
}
export function getCookie(key) {
  if (document.cookie) {
    return document.cookie.slice(key.length + 1);
  }
}

export function formatLangStr(str) {
  //some browsers will return 'en-US'; other may return just 'en'
  if (str.length > 2) {
    return str.slice(0, 2);
  }
  return str;
}

export function throttle(fn, delay) {
  let flag = true;
  return function () {
    let args = arguments;
    let context = this;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}
