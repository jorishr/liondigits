import { setupCalJs } from "./vendor/cal.js";
import { snowAnimationStart } from "snowfall-js-plugin";
import { snowfallJsPluginParams } from "./vendor/snowfallJsPlugin.js";
import { reRenderTextElementText } from "./modules/language.js";

requestIdleCallback(() => {
  setupCalJs();
  snowAnimationStart(snowfallJsPluginParams);
  /* 
    The language preference check and text translation rendering happens in a different process and will have been triggered before the snow animation switches are appended to the DOM. Thus, re-render the span text element text once the snowAnimationSwitch are present in the DOM.
  */
  const switchesTextElems = document.querySelectorAll(
    ".snow-animation-switch span"
  );
  if (switchesTextElems.length > 0) {
    reRenderTextElementText(switchesTextElems);
  }
});
