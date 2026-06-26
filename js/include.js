/**
 * include.js — Loads reusable HTML components into every page.
 *
 * HTTP/HTTPS (Hostinger): loads components/header.html & footer.html via fetch
 * file:// (local preview): uses js/partials.js fallback (Chrome blocks fetch)
 */
(function () {
  "use strict";

  var COMPONENTS = "components/";

  function usePartial(target, key) {
    if (window.SITE_PARTIALS && window.SITE_PARTIALS[key]) {
      target.innerHTML = window.SITE_PARTIALS[key];
      return true;
    }
    return false;
  }

  async function loadPartial(targetId, file, key) {
    var target = document.getElementById(targetId);
    if (!target) return;

    var url = COMPONENTS + file;
    var isLocalFile = window.location.protocol === "file:";

    // Local preview — use embedded partials (fetch/iframe blocked in Chrome)
    if (isLocalFile) {
      if (!usePartial(target, key)) {
        console.error("[include.js] Missing partial:", key, "— check js/partials.js");
      }
      return;
    }

    // Live server / Hostinger — load .html files
    try {
      var res = await fetch(url);
      if (res.ok) {
        target.innerHTML = await res.text();
        return;
      }
    } catch (err) {
      console.warn("[include.js] fetch failed for", file, "— using partials fallback");
    }

    if (!usePartial(target, key)) {
      target.innerHTML =
        '<p style="padding:1rem;background:#fee;color:#900;text-align:center;">Failed to load ' +
        file + "</p>";
    }
  }

  async function init() {
    await Promise.all([
      loadPartial("header", "header.html", "header"),
      loadPartial("footer", "footer.html", "footer"),
    ]);
    document.dispatchEvent(new CustomEvent("components:ready"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
