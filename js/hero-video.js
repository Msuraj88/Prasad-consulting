/**
 * Hero: show a static poster immediately, then fade to one viewport video when ready.
 * Loads only desktop OR mobile MP4 (not both). Skips video on Save-Data / reduced-motion.
 */
(function () {
  "use strict";

  var DESKTOP = "assets/images/hero-video.mp4";
  var MOBILE = "assets/images/hero-mobile-vid.mp4";
  var MOBILE_MQ = "(max-width: 991.98px)";

  function prefersLite() {
    try {
      if (navigator.connection && navigator.connection.saveData) return true;
      if (window.matchMedia("(prefers-reduced-data: reduce)").matches) return true;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
    } catch (e) {}
    return false;
  }

  function pickSrc() {
    return window.matchMedia(MOBILE_MQ).matches ? MOBILE : DESKTOP;
  }

  function showPosterOnly(poster, video) {
    if (poster) {
      poster.classList.remove("is-hidden");
      poster.setAttribute("aria-hidden", "false");
    }
    if (video) {
      video.classList.remove("is-ready");
      video.setAttribute("aria-hidden", "true");
    }
  }

  function revealVideo(poster, video) {
    if (!video) return;
    video.classList.add("is-ready");
    video.setAttribute("aria-hidden", "false");
    if (!poster) return;
    /* Keep poster in flow for section height; only fade it out visually */
    poster.classList.add("is-hidden");
    poster.setAttribute("aria-hidden", "true");
  }

  function loadVideo(video, poster, src) {
    if (!video) return;
    if (video.getAttribute("data-src-loaded") === src && video.classList.contains("is-ready")) {
      return;
    }

    showPosterOnly(poster, video);
    video.setAttribute("data-src-loaded", src);
    video.preload = "auto";
    video.src = src;
    video.load();

    var revealed = false;
    function onReady() {
      if (revealed) return;
      revealed = true;
      video.removeEventListener("playing", onReady);
      video.removeEventListener("canplay", onReady);
      revealVideo(poster, video);
    }

    video.addEventListener("playing", onReady);
    if (src !== MOBILE) video.addEventListener("canplay", onReady);

    var playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {
        showPosterOnly(poster, video);
      });
    }
  }

  function init() {
    var video = document.getElementById("heroVideo");
    var poster = document.getElementById("heroPoster");
    if (!video) return;

    showPosterOnly(poster, video);

    if (prefersLite()) {
      video.removeAttribute("autoplay");
      video.preload = "none";
      video.removeAttribute("src");
      video.hidden = true;
      return;
    }

    video.hidden = false;
    loadVideo(video, poster, pickSrc());

    var mq = window.matchMedia(MOBILE_MQ);
    function onChange() {
      if (prefersLite()) return;
      loadVideo(video, poster, pickSrc());
    }
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
