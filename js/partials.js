/**
 * Embedded header/footer HTML for local file:// preview.
 * Keep in sync with components/header.html and footer.html
 */
window.SITE_PARTIALS = {
  header: `<header class="site-header" id="site-header">
  <div class="header-bar">
    <div class="header-bar__inner">
      <a href="index.html" class="header-logo" aria-label="Prasad Consulting Home">
        <img src="assets/images/logo.png" alt="Prasad Consulting — Hyd (India)" class="header-logo__img" width="180" height="48" decoding="async" fetchpriority="high">
      </a>
      <nav class="header-nav" id="header-nav" aria-label="Main navigation">
        <div class="header-nav__inner">
          <ul class="header-nav__list">
            <li><a href="index.html" class="header-nav__link" data-nav="home">Home</a></li>
            <li><a href="about.html" class="header-nav__link" data-nav="about">About Us</a></li>
            <li class="header-nav__dropdown header-nav__dropdown--mega">
              <button type="button" class="header-nav__link header-nav__link--dropdown" data-nav="services" aria-expanded="false">
                Services
                <svg class="header-nav__chevron" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
              </button>
              <ul class="header-nav__submenu header-nav__mega">
                <li class="header-nav__mega-item"><a href="services.html#service-01" data-nav="services">
                  <span class="header-nav__mega-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 18V6M8 18V10M12 18V4M16 18V13M20 18V8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>
                  <span class="header-nav__mega-label">Strategic Business Advisory &amp; Corporate Growth</span>
                </a></li>
                <li class="header-nav__mega-item"><a href="services.html#service-02" data-nav="services">
                  <span class="header-nav__mega-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l7 12H5l7-12z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9.5 15h5M12 15v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>
                  <span class="header-nav__mega-label">Growth, Diversification &amp; New Venture Development</span>
                </a></li>
                <li class="header-nav__mega-item"><a href="services.html#service-03" data-nav="services">
                  <span class="header-nav__mega-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="5.5" stroke="currentColor" stroke-width="1.6"/><path d="M14.5 14.5L20 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M8 10h4M10 8v4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></span>
                  <span class="header-nav__mega-label">Due Diligence, Investments &amp; Corporate Transactions</span>
                </a></li>
                <li class="header-nav__mega-item"><a href="services.html#service-04" data-nav="services">
                  <span class="header-nav__mega-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2 13h6l2-3 5 1.5-1 2.5 2.5.8-3.5 3.5-1L15 8l-2-3-3.5 1 1 3.5-3.5.8 2.5 2.5-1-2.5 5-1.5 2 3H2v2z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg></span>
                  <span class="header-nav__mega-label">Defence, Aerospace &amp; Homeland Security Consulting</span>
                </a></li>
                <li class="header-nav__mega-item"><a href="services.html#service-05" data-nav="services">
                  <span class="header-nav__mega-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l7 4v5c0 4.2-3 7.8-7 9-4-1.2-7-4.8-7-9V7l7-4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M10 12l1.5 1.5L14.5 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                  <span class="header-nav__mega-label">Surveillance, Security &amp; Cyber Defence Solutions</span>
                </a></li>
                <li class="header-nav__mega-item"><a href="services.html#service-06" data-nav="services">
                  <span class="header-nav__mega-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 12.5l2.2 2.2L16 9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                  <span class="header-nav__mega-label">Quality Systems, Certifications &amp; Regulatory Facilitation</span>
                </a></li>
                <li class="header-nav__mega-item"><a href="services.html#service-07" data-nav="services">
                  <span class="header-nav__mega-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="8" cy="9" r="2.2" stroke="currentColor" stroke-width="1.5"/><circle cx="16" cy="9" r="2.2" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="7" r="2.2" stroke="currentColor" stroke-width="1.5"/><path d="M5 18c0-2.8 2.7-4 7-4s7 1.2 7 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>
                  <span class="header-nav__mega-label">Corporate Transformation &amp; Organisational Excellence</span>
                </a></li>
                <li class="header-nav__mega-item"><a href="services.html#service-08" data-nav="services">
                  <span class="header-nav__mega-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M4 12h16M12 4c2.5 2.2 4 5.2 4 8s-1.5 5.8-4 8M12 4c-2.5 2.2-4 5.2-4 8s1.5 5.8 4 8" stroke="currentColor" stroke-width="1.4"/></svg></span>
                  <span class="header-nav__mega-label">Foreign OEM Representation &amp; India Market Enablement</span>
                </a></li>
                <li class="header-nav__mega-item"><a href="services.html#service-09" data-nav="services">
                  <span class="header-nav__mega-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 11.5c1.5-1 3.2-1.5 5-1.5s3.5.5 5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 14.5c1.2.8 2.6 1.2 4 1.2s2.8-.4 4-1.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9.5 9.5L7 7M14.5 9.5L17 7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></span>
                  <span class="header-nav__mega-label">Defence Offsets, Industrial Partnerships &amp; Technology Transfer</span>
                </a></li>
                <li class="header-nav__mega-item"><a href="services.html#service-10" data-nav="services">
                  <span class="header-nav__mega-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 9l8-4 8 4-8 4-8-4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 14l8 4 8-4M12 13v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                  <span class="header-nav__mega-label">Academia&ndash;Industry Collaboration &amp; Innovation Ecosystems</span>
                </a></li>
                <li class="header-nav__mega-item"><a href="services.html#service-11" data-nav="services">
                  <span class="header-nav__mega-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.5L20 8l-8 4.5L4 8l8-4.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 12l8 4.5L20 12" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 16l8 4.5L20 16" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg></span>
                  <span class="header-nav__mega-label">Software Engineering, Systems &amp; Digital Solutions</span>
                </a></li>
              </ul>
            </li>
            <li><a href="partnerships.html" class="header-nav__link" data-nav="partnerships">Partnerships</a></li>
            <li class="header-nav__item--later"><a href="#" class="header-nav__link">Clients</a></li>
            <li><a href="index.html#our-gallery" class="header-nav__link" data-nav="gallery">Gallery</a></li>
            <li><a href="#" class="header-nav__link">Credentials &amp; Recognitions</a></li>
            <li class="header-nav__item--later"><a href="#" class="header-nav__link">News &amp; Updates</a></li>
            <li class="header-nav__item--later"><a href="#" class="header-nav__link">Technical Publications</a></li>
            <li class="header-nav__item--later"><a href="#" class="header-nav__link">Media</a></li>
            <li class="header-nav__item--later"><a href="#" class="header-nav__link">Webinars &amp; Masterclasses</a></li>
            <li><a href="leadership.html" class="header-nav__link" data-nav="leadership">Leadership</a></li>
          </ul>
          <div class="header-nav__cta">
            <a href="contact.html" class="header-cta" data-nav="contact">Contact Us</a>
          </div>
        </div>
      </nav>
      <div class="header-actions">
        <button type="button" class="header-search" aria-label="Search">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="7.5" cy="7.5" r="5.75" stroke="currentColor" stroke-width="1.5"/>
            <path d="M12 12l4.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        <button class="header-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="header-nav">
          <span class="header-toggle__bar"></span>
          <span class="header-toggle__bar"></span>
          <span class="header-toggle__bar"></span>
        </button>
        <a href="contact.html" class="header-cta header-cta--desktop" data-nav="contact">Contact Us</a>
      </div>
    </div>
  </div>
</header>`,

  footer: `<footer class="pc-footer" role="contentinfo">
  <div class="pc-footer__wrap">
    <header class="pc-footer__top">
      <a href="index.html" class="pc-footer__logo" aria-label="Prasad Consulting Home">
        <img
          src="assets/images/logo-white.png"
          alt="Prasad Consulting — Hyd (India)"
          class="pc-footer__logo-img"
          width="220"
          height="76"
          loading="lazy"
        >
      </a>

      <div class="pc-footer__tagline" aria-label="Company tagline">
        <span class="pc-footer__tagline-rule" aria-hidden="true"></span>
        <p class="pc-footer__tagline-text">LET&rsquo;S BUILD WHAT&rsquo;S NEXT. TOGETHER.</p>
        <span class="pc-footer__tagline-rule" aria-hidden="true"></span>
      </div>
    </header>

    <div class="pc-footer__grid">
      <section class="pc-footer__col pc-footer__col--contact" aria-labelledby="pc-footer-contact-heading">
        <h2 class="pc-footer__heading" id="pc-footer-contact-heading">Contact Info</h2>
        <ul class="pc-footer__contact">
          <li class="pc-footer__contact-item pc-footer__contact-item--address">
            <span class="pc-footer__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none"><path d="M10 17s-5-3.5-5-8a5 5 0 1110 0c0 4.5-5 8-5 8z" stroke="currentColor" stroke-width="1.3"/><circle cx="10" cy="9" r="1.8" stroke="currentColor" stroke-width="1.2"/></svg>
            </span>
            <span class="pc-footer__contact-text">Prasad Consulting Hyd (India) Pvt. Ltd<br># 38, GK Pearl Enclave<br>Yellareddyguda, Vemunguta<br>Kapra, Hyderabad - 500094</span>
          </li>
          <li class="pc-footer__contact-item">
            <span class="pc-footer__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none"><path d="M6 4h3l1 3-2 1a9 9 0 004 4l1-2 3 1v3a2 2 0 01-2 2C8.5 16 4 11.5 4 6a2 2 0 012-2z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>
            </span>
            <span class="pc-footer__contact-text">
              <a href="tel:+919550807031">+91 9550807031</a>,
              <a href="tel:+919663835240">+91 9663835240</a>
            </span>
          </li>
          <li class="pc-footer__contact-item">
            <span class="pc-footer__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none"><rect x="4" y="6" width="12" height="9" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M4 7l6 4 6-4" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>
            </span>
            <a href="mailto:info@prasadconsultinghydindia.com" class="pc-footer__contact-text">info@prasadconsultinghydindia.com</a>
          </li>
          <li class="pc-footer__contact-item">
            <span class="pc-footer__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none"><rect x="4" y="6" width="12" height="9" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M4 7l6 4 6-4" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>
            </span>
            <a href="mailto:ceo@prasadconsultinghydindia.com" class="pc-footer__contact-text">ceo@prasadconsultinghydindia.com</a>
          </li>
        </ul>
      </section>

      <section class="pc-footer__col pc-footer__col--links" aria-labelledby="pc-footer-links-heading">
        <h2 class="pc-footer__heading" id="pc-footer-links-heading">Quick Links</h2>
        <ul class="pc-footer__rows">
          <li>
            <a href="index.html" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 9.5L10 4l6 5.5V16H4V9.5z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M8 16v-4h4v4" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>
              <span class="pc-footer__row-label">Home</span>
              <svg class="pc-footer__row-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </li>
          <li>
            <a href="about.html" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="7" r="2.4" stroke="currentColor" stroke-width="1.3"/><path d="M5 16c.6-2.4 2.6-3.5 5-3.5s4.4 1.1 5 3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
              <span class="pc-footer__row-label">About Us</span>
              <svg class="pc-footer__row-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </li>
          <li>
            <a href="services.html" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="4" y="4" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.3"/><rect x="11" y="4" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.3"/><rect x="4" y="11" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.3"/><rect x="11" y="11" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.3"/></svg>
              <span class="pc-footer__row-label">Services</span>
              <svg class="pc-footer__row-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </li>
          <li>
            <a href="partnerships.html" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M7 11l-2 2a2.2 2.2 0 01-3-3l3-3 2 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 9l2-2a2.2 2.2 0 013 3l-3 3-2-2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12l4-4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
              <span class="pc-footer__row-label">Partnerships</span>
              <svg class="pc-footer__row-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </li>
          <li>
            <a href="index.html#our-gallery" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="4" y="5" width="12" height="10" rx="1.2" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="9" r="1.2" stroke="currentColor" stroke-width="1.2"/><path d="M4.5 14l3.5-3 2.5 2 2-1.5 3 2.5" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>
              <span class="pc-footer__row-label">Gallery</span>
              <svg class="pc-footer__row-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </li>
          <li>
            <a href="#" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3l1.6 3.3 3.6.5-2.6 2.5.6 3.6L10 11.2 6.8 12.9l.6-3.6L4.8 6.8l3.6-.5L10 3z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>
              <span class="pc-footer__row-label">Credentials &amp; Recognitions</span>
              <svg class="pc-footer__row-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </li>
          <li>
            <a href="leadership.html" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="6.5" r="2" stroke="currentColor" stroke-width="1.3"/><circle cx="5.5" cy="8.5" r="1.5" stroke="currentColor" stroke-width="1.2"/><circle cx="14.5" cy="8.5" r="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M7 15.5c.4-1.8 1.6-2.6 3-2.6s2.6.8 3 2.6M3.5 15.5c.3-1.3 1-2 2.2-2M16.5 15.5c-.3-1.3-1-2-2.2-2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
              <span class="pc-footer__row-label">Leadership</span>
              <svg class="pc-footer__row-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </li>
          <li>
            <a href="contact.html" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="4" y="6" width="12" height="9" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M4 7l6 4 6-4" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>
              <span class="pc-footer__row-label">Contact Us</span>
              <svg class="pc-footer__row-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </li>
        </ul>
      </section>

      <section class="pc-footer__col pc-footer__col--legal" aria-labelledby="pc-footer-legal-heading">
        <h2 class="pc-footer__heading" id="pc-footer-legal-heading">Legal Information</h2>
        <ul class="pc-footer__rows">
          <li>
            <a href="#" class="pc-footer__row pc-footer__row--legal">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 22" fill="none" aria-hidden="true"><path d="M10 2l7 3.5v5c0 4.6-3.2 8.6-7 10-3.8-1.4-7-5.4-7-10v-5L10 2z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M7 11l2 2 4-4.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span class="pc-footer__row-label">Privacy Policy</span>
            </a>
          </li>
          <li>
            <a href="#" class="pc-footer__row pc-footer__row--legal">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 22" fill="none" aria-hidden="true"><path d="M10 2l7 3.5v5c0 4.6-3.2 8.6-7 10-3.8-1.4-7-5.4-7-10v-5L10 2z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M7 11l2 2 4-4.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span class="pc-footer__row-label">Copyright Notice</span>
            </a>
          </li>
        </ul>
      </section>

      <section class="pc-footer__col pc-footer__col--social" aria-labelledby="pc-footer-social-heading">
        <h2 class="pc-footer__heading" id="pc-footer-social-heading">Follow Us</h2>
        <div class="pc-footer__social">
          <a href="https://www.linkedin.com/in/commander-prasad-yvv-in-sr-veteran-b39ab020/" class="pc-footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 11v7M8 8v.01M12 18v-5.5a2.5 2.5 0 015 0V18M5 5h14v14H5V5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <a href="https://www.youtube.com/@PrasadConsultinghyd" class="pc-footer__social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="7" width="16" height="10" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M11 10l4 2-4 2v-4z" fill="currentColor"/></svg>
          </a>
          <a href="https://wa.me/919663835240" class="pc-footer__social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4.5a7.2 7.2 0 00-6.2 10.9L5 19.5l4.2-.9A7.2 7.2 0 1012 4.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M9.2 10.4c.2 1.5 1.4 2.9 2.9 3.3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
          </a>
        </div>
      </section>
    </div>
  </div>
</footer>

<a href="contact.html" class="float-consult" aria-label="Schedule a consultation">
  <img src="assets/images/schedule-consultation-fab.png" alt="" width="140" height="140" loading="lazy" decoding="async">
</a>`
};
