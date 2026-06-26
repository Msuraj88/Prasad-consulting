/**
 * gallery.js — Custom 3D layered gallery (Our Gallery section)
 */
(function () {
  "use strict";

  var AUTOPLAY_MS = 5500;
  var TRANSITION_MS = 700;
  var SWIPE_THRESHOLD = 48;

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  function getOffset(slideIndex, activeIndex, total) {
    var diff = slideIndex - activeIndex;
    var half = Math.floor(total / 2);
    if (diff > half) diff -= total;
    if (diff < -half) diff += total;
    return diff;
  }

  function getVisibleRange() {
    var w = window.innerWidth;
    if (w <= 575) return 1;
    if (w <= 991) return 1;
    return 2;
  }

  function Gallery(root) {
    this.root = root;
    this.track = root.querySelector(".our-gallery__slides");
    this.slides = Array.prototype.slice.call(root.querySelectorAll(".our-gallery__slide"));
    this.prevBtn = root.querySelector(".our-gallery__nav--prev");
    this.nextBtn = root.querySelector(".our-gallery__nav--next");
    this.total = this.slides.length;
    this.active = Math.floor(this.total / 2);
    this.autoplayTimer = null;
    this.isAnimating = false;
    this.touchStartX = 0;
    this.touchDeltaX = 0;
    this.isPaused = false;

    this.onPrev = this.goPrev.bind(this);
    this.onNext = this.goNext.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onMouseEnter = this.pause.bind(this);
    this.onMouseLeave = this.resume.bind(this);
    this.onResize = this.update.bind(this);

    this.bind();
    this.update(false);
    this.resume();
  }

  Gallery.prototype.bind = function () {
    if (this.prevBtn) this.prevBtn.addEventListener("click", this.onPrev);
    if (this.nextBtn) this.nextBtn.addEventListener("click", this.onNext);
    this.root.addEventListener("keydown", this.onKeydown);
    this.track.addEventListener("touchstart", this.onTouchStart, { passive: true });
    this.track.addEventListener("touchmove", this.onTouchMove, { passive: true });
    this.track.addEventListener("touchend", this.onTouchEnd);
    this.root.addEventListener("mouseenter", this.onMouseEnter);
    this.root.addEventListener("mouseleave", this.onMouseLeave);
    window.addEventListener("resize", this.onResize);
    this.root.setAttribute("tabindex", "0");
  };

  Gallery.prototype.goPrev = function () {
    this.goTo(this.active - 1);
  };

  Gallery.prototype.goNext = function () {
    this.goTo(this.active + 1);
  };

  Gallery.prototype.goTo = function (index) {
    if (this.isAnimating) return;
    var next = mod(index, this.total);
    if (next === this.active) return;

    this.isAnimating = true;
    this.active = next;
    this.update(true);
    window.setTimeout(
      function (self) {
        self.isAnimating = false;
      },
      TRANSITION_MS,
      this
    );
    this.resetAutoplay();
  };

  Gallery.prototype.update = function () {
    var range = getVisibleRange();
    var self = this;

    this.slides.forEach(function (slide, i) {
      var offset = getOffset(i, self.active, self.total);
      var pos = "hidden";

      if (Math.abs(offset) <= range) {
        pos = String(offset);
      }

      slide.setAttribute("data-pos", pos);
      slide.setAttribute("aria-hidden", offset === 0 ? "false" : "true");

      var img = slide.querySelector("img");
      if (img) {
        img.setAttribute("tabindex", offset === 0 ? "0" : "-1");
      }
    });

    this.root.setAttribute("data-active-index", String(this.active));
  };

  Gallery.prototype.onKeydown = function (e) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      this.goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      this.goNext();
    }
  };

  Gallery.prototype.onTouchStart = function (e) {
    if (!e.changedTouches || !e.changedTouches.length) return;
    this.touchStartX = e.changedTouches[0].clientX;
    this.touchDeltaX = 0;
    this.pause();
  };

  Gallery.prototype.onTouchMove = function (e) {
    if (!e.changedTouches || !e.changedTouches.length) return;
    this.touchDeltaX = e.changedTouches[0].clientX - this.touchStartX;
  };

  Gallery.prototype.onTouchEnd = function () {
    if (this.touchDeltaX > SWIPE_THRESHOLD) {
      this.goPrev();
    } else if (this.touchDeltaX < -SWIPE_THRESHOLD) {
      this.goNext();
    }
    this.touchDeltaX = 0;
    this.resume();
  };

  Gallery.prototype.resetAutoplay = function () {
    if (this.isPaused) return;
    this.pause();
    this.resume();
  };

  Gallery.prototype.pause = function () {
    this.isPaused = true;
    if (this.autoplayTimer) {
      window.clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  };

  Gallery.prototype.resume = function () {
    var self = this;
    this.isPaused = false;
    if (this.autoplayTimer) window.clearInterval(this.autoplayTimer);
    this.autoplayTimer = window.setInterval(function () {
      if (!self.isPaused) self.goNext();
    }, AUTOPLAY_MS);
  };

  Gallery.prototype.destroy = function () {
    this.pause();
    window.removeEventListener("resize", this.onResize);
  };

  function initGalleries() {
    document.querySelectorAll("[data-gallery]").forEach(function (root) {
      if (root._gallery) return;
      root._gallery = new Gallery(root);
    });
  }

  document.addEventListener("DOMContentLoaded", initGalleries);
  document.addEventListener("components:ready", initGalleries);
})();
