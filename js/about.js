/**
 * about.js — Accordion toggle for About Us sections E–L
 */
(function () {
  "use strict";

  function initAboutAccordion() {
    var items = document.querySelectorAll(".about-acc__item");
    if (!items.length) return;

    items.forEach(function (item) {
      var trigger = item.querySelector(".about-acc__trigger");
      var panel = item.querySelector(".about-acc__panel");
      if (!trigger || !panel) return;

      trigger.addEventListener("click", function () {
        var isOpen = item.classList.contains("is-open");

        // Close others (single-open accordion)
        items.forEach(function (other) {
          if (other === item) return;
          other.classList.remove("is-open");
          var t = other.querySelector(".about-acc__trigger");
          var p = other.querySelector(".about-acc__panel");
          if (t) t.setAttribute("aria-expanded", "false");
          if (p) p.hidden = true;
        });

        if (isOpen) {
          item.classList.remove("is-open");
          trigger.setAttribute("aria-expanded", "false");
          panel.hidden = true;
        } else {
          item.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
          panel.hidden = false;
        }
      });
    });

    // Open section from hash (e.g. about.html#leadership)
    var hash = (window.location.hash || "").replace("#", "");
    if (hash) {
      var target = document.getElementById(hash);
      if (target && target.classList.contains("about-acc__item")) {
        var btn = target.querySelector(".about-acc__trigger");
        if (btn) btn.click();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAboutAccordion);
  } else {
    initAboutAccordion();
  }
})();
