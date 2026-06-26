/**
 * main.js — Global site behaviour
 * Runs after components are loaded (components:ready event)
 */
(function () {
  "use strict";

  const PAGE_NAV = {
    "": "home",
    "index.html": "home",
    "about.html": "about",
    "services.html": "services",
    "contact.html": "contact",
  };

  function getPageFile() {
    const path = window.location.pathname || "";
    return path.substring(path.lastIndexOf("/") + 1) || "index.html";
  }

  /* ---------- Active navigation ---------- */
  function setActiveNav() {
    const key = PAGE_NAV[getPageFile()];
    if (!key) return;

    const header = document.getElementById("site-header");
    if (!header) return;

    header.querySelectorAll(".active").forEach((el) => el.classList.remove("active"));
    header.querySelectorAll('[data-nav="' + key + '"]').forEach((el) => {
      el.classList.add("active");
    });
  }

  /* ---------- Mobile menu & dropdowns ---------- */
  function initMobileMenu() {
    const header = document.getElementById("site-header");
    if (!header) return;

    const toggle = header.querySelector(".header-toggle");
    const nav = header.querySelector(".header-nav");
    const dropdowns = header.querySelectorAll(".header-nav__dropdown");
    const links = header.querySelectorAll(
      ".header-nav__link:not(.header-nav__link--dropdown), .header-nav__submenu a"
    );

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        const open = nav.classList.toggle("is-open");
        toggle.classList.toggle("is-active", open);
        toggle.setAttribute("aria-expanded", String(open));
        document.body.classList.toggle("nav-open", open);
      });
    }

    dropdowns.forEach(function (dropdown) {
      const btn = dropdown.querySelector(".header-nav__link--dropdown");
      if (!btn) return;

      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const open = dropdown.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
        dropdowns.forEach(function (other) {
          if (other !== dropdown) {
            other.classList.remove("is-open");
            var b = other.querySelector(".header-nav__link--dropdown");
            if (b) b.setAttribute("aria-expanded", "false");
          }
        });
      });
    });

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        if (nav) nav.classList.remove("is-open");
        if (toggle) {
          toggle.classList.remove("is-active");
          toggle.setAttribute("aria-expanded", "false");
        }
        document.body.classList.remove("nav-open");
      });
    });

    document.addEventListener("click", function (e) {
      if (!header.contains(e.target)) {
        dropdowns.forEach(function (dropdown) {
          dropdown.classList.remove("is-open");
          var b = dropdown.querySelector(".header-nav__link--dropdown");
          if (b) b.setAttribute("aria-expanded", "false");
        });
      }
    });
  }

  /* ---------- Sticky header shadow ---------- */
  function initStickyHeader() {
    const bar = document.querySelector(".header-bar");
    if (!bar) return;

    function onScroll() {
      bar.classList.toggle("is-scrolled", window.scrollY > 20);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Footer year ---------- */
  function initFooter() {
    var year = new Date().getFullYear();
    document.querySelectorAll(".footer-year").forEach(function (el) {
      el.textContent = year;
    });
  }

  /* ---------- Scroll fade-in animations ---------- */
  function initScrollAnimations() {
    var items = document.querySelectorAll(".fade-up");
    if (!items.length || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  function init() {
    setActiveNav();
    initMobileMenu();
    initStickyHeader();
    initFooter();
    initScrollAnimations();
  }

  document.addEventListener("components:ready", init);
})();
