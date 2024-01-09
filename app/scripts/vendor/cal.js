/*
###################  
Cal.com plugin code 
###################  
*/
export function calFn(C, A, L) {
  let p = function (a, ar) {
    a.q.push(ar);
  };
  let d = C.document;
  C.Cal =
    C.Cal ||
    function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () {
          p(api, arguments);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        typeof namespace === "string"
          ? (cal.ns[namespace] = api) && p(api, ar)
          : p(cal, ar);
        return;
      }
      p(cal, ar);
    };
}

export function setupCalJs() {
  // Important: Make sure to add `data-cal-link="liondigits/20min"` attribute to the element you want to open Cal on click
  try {
    calFn(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", { origin: "https://app.cal.com" });
    Cal("ui", {
      theme: "dark",
      styles: { branding: { brandColor: "#003F8C" } },
      hideEventTypeDetails: false,
    });
  } catch (e) {
    console.log("Calendar unable to loaded");
  }
}
