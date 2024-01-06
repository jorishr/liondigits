export function setCookie(key, val) {
  document.cookie = `${key}=${val};max-age=${
    60 * 60 * 24 * 7
  };Secure;SameSite=Strict`;
}

export function getCookie(key) {
  if (document.cookie) {
    const cookieObj = document.cookie.split(";").reduce((acc, curr) => {
      const [key, val] = curr.split("=");
      acc[key.trim()] = val.trim();
      return acc;
    }, {});
    return cookieObj[key];
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

/* snowfall.js animation requires decent hardware */
export function hasHardware() {
  const cpuCores = navigator.hardwareConcurrency || 0;
  const deviceMemory = navigator.deviceMemory || 0;
  //console.log(`Device Memory: ${deviceMemory} GB`);
  //console.log(`Number of CPU Cores: ${cpuCores}`);

  if (deviceMemory >= 4 || cpuCores >= 4) {
    return true;
  } else return false;
}

export function animateClose(target, targetClass) {
  target.classList.add(`${targetClass}--closing`);
  target.addEventListener(
    "animationend",
    () => {
      target.classList.remove(`${targetClass}--active`);
      target.classList.remove(`${targetClass}--closing`);
    },
    { once: true }
  );
}
