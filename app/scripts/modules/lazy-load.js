/*
  Lazy loading video's: https://web.dev/articles/lazy-loading-video
  - Iterate through all of the child <source> elements and flip their data-src attributes to src attributes.
  - Trigger loading of the video by calling the element's load method.
*/
export default () => {
  const lazyVideos = [...document.querySelectorAll("video.lazy")];

  if ("IntersectionObserver" in window) {
    let lazyVideoObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (video) {
        if (video.isIntersecting) {
          for (let source in video.target.children) {
            let videoSource = video.target.children[source];
            if (
              typeof videoSource.tagName === "string" &&
              videoSource.tagName === "SOURCE"
            ) {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function (lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
};
