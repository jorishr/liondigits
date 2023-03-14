import Typewriter from "typewriter-effect/dist/core";

export function typewriterEffect() {
  const text = document.querySelector(".typewriter");

  const typewriter = new Typewriter(text, {
    loop: true,
    delay: 75,
    deleteSpeed: 1,
  });

  typewriter
    .pauseFor(1500)
    //.pasteString("<span style='font-size: var(--fs-xl);'>LION </span>")
    .typeString("<span>01101100 01101001</span>")
    .pauseFor(300)
    .deleteAll()
    .typeString("<span>LION DIGITS</span>")
    .pauseFor(3000)
    .start();
}
