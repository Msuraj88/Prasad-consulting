/**
 * services.js \u2014 Services page tabbed explorer
 *
 * Two levels of tabs:
 *   1. Top tabs  = 10 service domains
 *   2. Side tabs = sub-services of the active domain
 * Selecting a sub-service renders a detail template (intro + visuals +
 * Services Include / Deliverables / Client Benefits). Data-driven so the
 * markup stays lean and content lives in one place (the SERVICES array).
 */
(function () {
  "use strict";

  /* ---------- Brand domain icons (inner SVG, viewBox 0 0 24 24) ---------- */
  var ICONS = {
    bars: '<path d="M4 18V6M8 18V10M12 18V4M16 18V13M20 18V8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    venture: '<path d="M12 3l7 12H5l7-12z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9.5 15h5M12 15v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    search: '<circle cx="10" cy="10" r="5.5" stroke="currentColor" stroke-width="1.6"/><path d="M14.5 14.5L20 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M8 10h4M10 8v4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
    gear: '<path d="M2 13h6l2-3 5 1.5-1 2.5 2.5.8-3.5 3.5-1L15 8l-2-3-3.5 1 1 3.5-3.5.8 2.5 2.5-1-2.5 5-1.5 2 3H2v2z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>',
    shieldCheck: '<path d="M12 3l7 4v5c0 4.2-3 7.8-7 9-4-1.2-7-4.8-7-9V7l7-4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M10 12l1.5 1.5L14.5 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
    circleCheck: '<circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 12.5l2.2 2.2L16 9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
    people: '<circle cx="8" cy="9" r="2.2" stroke="currentColor" stroke-width="1.5"/><circle cx="16" cy="9" r="2.2" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="7" r="2.2" stroke="currentColor" stroke-width="1.5"/><path d="M5 18c0-2.8 2.7-4 7-4s7 1.2 7 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    globe: '<circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M4 12h16M12 4c2.5 2.2 4 5.2 4 8s-1.5 5.8-4 8M12 4c-2.5 2.2-4 5.2-4 8s1.5 5.8 4 8" stroke="currentColor" stroke-width="1.4"/>',
    transfer: '<path d="M7 11.5c1.5-1 3.2-1.5 5-1.5s3.5.5 5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 14.5c1.2.8 2.6 1.2 4 1.2s2.8-.4 4-1.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9.5 9.5L7 7M14.5 9.5L17 7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
    cap: '<path d="M4 9l8-4 8 4-8 4-8-4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 14l8 4 8-4M12 13v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'
  };

  /* ---------- Small UI icons ---------- */
  var ARROW =
    '<path d="M9.5 6.5L15 12l-5.5 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>';
  var ICON_GEAR =
    '<circle cx="12" cy="12" r="3.2" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v2.5M12 18.5V21M21 12h-2.5M5.5 12H3M17.6 6.4l-1.8 1.8M8.2 15.8L6.4 17.6M17.6 17.6l-1.8-1.8M8.2 8.2L6.4 6.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';
  var ICON_DOC =
    '<path d="M7 3h7l4 4v14H7z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 3v4h4M10 12h5M10 15.5h5M10 19h3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>';

  function svg(inner, cls) {
    return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"' + (cls ? ' class="' + cls + '"' : "") + ">" + inner + "</svg>";
  }

  /* Neutral image placeholder (data-URI). Replace by setting sub.images = [src1, src2]. */
  function placeholder(label) {
    var s =
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450">' +
        '<rect width="800" height="450" fill="#e9eef5"/>' +
        '<g fill="none" stroke="#9fb1c7" stroke-width="6" stroke-linejoin="round">' +
          '<rect x="300" y="150" width="200" height="135" rx="10"/>' +
          '<circle cx="355" cy="195" r="17"/>' +
        "</g>" +
        '<path d="M305 285l55-55 38 38 47-47 50 50v14z" fill="#9fb1c7"/>' +
        '<text x="400" y="340" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="600" fill="#73849b" text-anchor="middle">' +
          label +
        "</text>" +
      "</svg>";
    return "data:image/svg+xml," + encodeURIComponent(s);
  }

  function figureImg(src, alt) {
    return '<img class="svc-figure__img" src="' + src + '" alt="' + alt + '">';
  }

  /* ==========================================================================
     Service data
     Each domain: { id, num, icon, title, subs: [ ... ] }
     A sub may be a plain string (auto-detailed) or an object with:
       { name, desc, include[], deliverables[], benefits[] }
     ========================================================================== */
  var ICON_LIST = [ICONS.bars, ICONS.venture, ICONS.search, ICONS.gear, ICONS.shieldCheck, ICONS.circleCheck, ICONS.people, ICONS.globe, ICONS.transfer, ICONS.cap];

  // Domain content lives in js/services-data.js (window.SERVICES_DATA); icons attached by index.
  var SERVICES = (window.SERVICES_DATA || []).map(function (d, i) {
    d.icon = ICON_LIST[i];
    return d;
  });

  /* ---------- Normalise a sub into a detailed object ---------- */
  function detailFor(domain, sub) {
    if (typeof sub === "object" && sub.desc) return sub;

    var name = typeof sub === "string" ? sub : sub.name;
    var lower = name.charAt(0).toLowerCase() + name.slice(1);
    // Placeholder detail for sub-services not yet authored \u2014 edit in SERVICES.
    return {
      name: name,
      desc:
        "Prasad Consulting provides specialised " + lower + " support within our " +
        domain.title + " practice, combining deep domain expertise, structured methodology and a clear focus on measurable outcomes.",
      include: [
        "Requirement & needs assessment",
        "Strategy & approach design",
        name + " framework development",
        "Implementation & advisory support",
        "Stakeholder engagement",
        "Review & continuous improvement"
      ],
      deliverables: [
        name + " Strategy",
        "Assessment & Analysis Report",
        "Implementation Roadmap",
        "Advisory Recommendations"
      ],
      benefits: [
        "Clear strategic direction",
        "Reduced risk & complexity",
        "Improved decision-making",
        "Measurable, lasting impact"
      ]
    };
  }

  function subName(sub) {
    return typeof sub === "string" ? sub : sub.name;
  }

  function listHtml(items) {
    return items
      .map(function (it) {
        return "<li>" + it + "</li>";
      })
      .join("");
  }

  /* ==========================================================================
     Rendering
     ========================================================================== */
  var state = { domain: 0, sub: -1, topTabs: [], subTabs: [], listEl: null, detailEl: null };

  /* Domain-level overview shown when a top tab is selected (no sub active) */
  function renderDomainOverview(domain) {
    state.detailEl.innerHTML =
      '<h2 class="svc-detail__title">' + domain.title + "</h2>" +
      '<span class="svc-detail__rule" aria-hidden="true"></span>' +
      '<div class="svc-detail__overview">' +
        domain.desc.map(function (p) { return "<p>" + p + "</p>"; }).join("") +
      "</div>";
  }

  function renderDetail(domain, sub) {
    var d = detailFor(domain, sub);
    // Per-sub images can be supplied as d.images = [src1, src2]; otherwise placeholders.
    var img1 = (d.images && d.images[0]) || placeholder("Image 1");
    var img2 = (d.images && d.images[1]) || placeholder("Image 2");
    state.detailEl.innerHTML =
      '<h2 class="svc-detail__title">' + d.name + "</h2>" +
      '<span class="svc-detail__rule" aria-hidden="true"></span>' +
      '<p class="svc-detail__intro">' + d.desc + "</p>" +
      '<div class="svc-detail__media">' +
        '<figure class="svc-figure">' + figureImg(img1, d.name) + "</figure>" +
        '<figure class="svc-figure">' + figureImg(img2, d.name + " overview") + "</figure>" +
      "</div>" +
      '<div class="svc-detail__cols">' +
        '<div class="svc-col">' +
          '<h3 class="svc-col__head"><span class="svc-col__badge">' + svg(ICON_GEAR) + "</span>Services Include:</h3>" +
          '<ul class="svc-col__list">' + listHtml(d.include) + "</ul>" +
        "</div>" +
        '<div class="svc-col">' +
          '<h3 class="svc-col__head"><span class="svc-col__badge">' + svg(ICON_DOC) + "</span>Deliverables:</h3>" +
          '<ul class="svc-col__list">' + listHtml(d.deliverables) + "</ul>" +
        "</div>" +
        '<div class="svc-col">' +
          '<h3 class="svc-col__head"><span class="svc-col__badge">' + svg(ICONS.people) + "</span>Client Benefits:</h3>" +
          '<ul class="svc-col__list">' + listHtml(d.benefits) + "</ul>" +
        "</div>" +
      "</div>";
  }

  function selectSub(index) {
    var domain = SERVICES[state.domain];
    if (!domain || !domain.subs[index]) return;
    state.sub = index;

    state.subTabs.forEach(function (tab, i) {
      var on = i === index;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", String(on));
    });

    renderDetail(domain, domain.subs[index]);
  }

  function renderSubTabs(domain) {
    state.listEl.innerHTML = "";
    state.subTabs = [];

    domain.subs.forEach(function (sub, i) {
      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "svc-subtab";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", "false");
      btn.innerHTML =
        '<span class="svc-subtab__icon">' + svg(ARROW) + "</span>" +
        '<span class="svc-subtab__label">' + (i + 1) + ". " + subName(sub) + "</span>";
      btn.addEventListener("click", function () {
        selectSub(i);
      });
      li.appendChild(btn);
      state.listEl.appendChild(li);
      state.subTabs.push(btn);
    });
  }

  function scrollActiveTabIntoView(index) {
    if (!window.matchMedia("(max-width: 991.98px)").matches) return;
    var tab = state.topTabs[index];
    if (!tab) return;
    tab.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }

  function initTabsScroll() {
    var wrap = document.getElementById("svcTabsWrap");
    var tabsEl = document.getElementById("svcTabs");
    if (!wrap || !tabsEl) return;

    function updateScrollState() {
      var maxScroll = tabsEl.scrollWidth - tabsEl.clientWidth;
      var scrollable = maxScroll > 4;
      wrap.classList.toggle("is-scrollable", scrollable);
      wrap.classList.toggle("can-scroll-left", scrollable && tabsEl.scrollLeft > 4);
      wrap.classList.toggle("can-scroll-right", scrollable && tabsEl.scrollLeft < maxScroll - 4);
    }

    tabsEl.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    updateScrollState();
    requestAnimationFrame(updateScrollState);
  }

  function selectDomain(index, updateHash) {
    var domain = SERVICES[index];
    if (!domain) return;
    state.domain = index;

    state.topTabs.forEach(function (tab, i) {
      var on = i === index;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", String(on));
    });

    renderSubTabs(domain);
    state.sub = -1;
    renderDomainOverview(domain);
    scrollActiveTabIntoView(index);

    if (updateHash && window.history && window.history.replaceState) {
      window.history.replaceState(null, "", "#" + domain.id);
    }
  }

  function buildTopTabs(tabsEl) {
    SERVICES.forEach(function (svc, i) {
      var tab = document.createElement("button");
      tab.type = "button";
      tab.className = "svc-tab";
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", "false");
      tab.id = "tab-" + svc.id;
      tab.innerHTML =
        '<span class="svc-tab__num">' + svc.num + "</span>" +
        '<span class="svc-tab__icon">' + svg(svc.icon) + "</span>" +
        '<span class="svc-tab__title">' + svc.title + "</span>";
      tab.addEventListener("click", function () {
        selectDomain(i, true);
      });
      tabsEl.appendChild(tab);
      state.topTabs.push(tab);
    });
  }

  function indexFromHash() {
    var hash = (window.location.hash || "").replace("#", "");
    for (var i = 0; i < SERVICES.length; i++) {
      if (SERVICES[i].id === hash) return i;
    }
    return 0;
  }

  function init() {
    var tabsEl = document.getElementById("svcTabs");
    state.listEl = document.getElementById("svcList");
    state.detailEl = document.getElementById("svcDetail");
    if (!tabsEl || !state.listEl || !state.detailEl) return;

    buildTopTabs(tabsEl);
    initTabsScroll();

    var start = indexFromHash();
    selectDomain(start, false);

    if (start > 0 && state.topTabs[start]) {
      scrollActiveTabIntoView(start);
    }

    window.addEventListener("hashchange", function () {
      selectDomain(indexFromHash(), false);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
