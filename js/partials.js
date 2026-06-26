/**
 * Embedded header/footer HTML for local file:// preview.
 * Keep in sync with components/header.html and footer.html
 */
window.SITE_PARTIALS = {
  header: `<header class="site-header" id="site-header">
  <div class="header-bar">
    <div class="header-bar__inner">
      <a href="index.html" class="header-logo" aria-label="Prasad Consulting Home">
        <img src="assets/images/logo.png" alt="Prasad Consulting — Hyd (India)" class="header-logo__img" width="180" height="48">
      </a>
      <button class="header-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="header-nav">
        <span class="header-toggle__bar"></span>
        <span class="header-toggle__bar"></span>
        <span class="header-toggle__bar"></span>
      </button>
      <nav class="header-nav" id="header-nav" aria-label="Main navigation">
        <div class="header-nav__inner">
          <ul class="header-nav__list">
            <li><a href="index.html" class="header-nav__link" data-nav="home">Home</a></li>
            <li class="header-nav__dropdown">
              <button type="button" class="header-nav__link header-nav__link--dropdown" data-nav="about" aria-expanded="false">
                About Us
                <svg class="header-nav__chevron" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
              </button>
              <ul class="header-nav__submenu">
                <li><a href="about.html" data-nav="about">Our Story</a></li>
                <li><a href="about.html#leadership" data-nav="about">Leadership</a></li>
                <li><a href="about.html#vision" data-nav="about">Vision &amp; Mission</a></li>
              </ul>
            </li>
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
              </ul>
            </li>
            <li><a href="#" class="header-nav__link">Partnerships</a></li>
            <li><a href="#" class="header-nav__link">Clients</a></li>
            <li><a href="#" class="header-nav__link">Gallery</a></li>
            <li><a href="#" class="header-nav__link">Credentials &amp; Recognitions</a></li>
            <li><a href="#" class="header-nav__link">News &amp; Updates</a></li>
            <li><a href="#" class="header-nav__link">Technical Publications</a></li>
            <li><a href="#" class="header-nav__link">Media</a></li>
            <li><a href="#" class="header-nav__link">Webinars &amp; Masterclasses</a></li>
            <li><a href="contact.html" class="header-nav__link" data-nav="contact">Contact Us</a></li>
          </ul>
        </div>
      </nav>
      <div class="header-actions">
        <button type="button" class="header-search" aria-label="Search">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="7.5" cy="7.5" r="5.75" stroke="currentColor" stroke-width="1.5"/>
            <path d="M12 12l4.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        <a href="contact.html" class="header-cta" data-nav="contact">Contact Us</a>
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
      <section class="pc-footer__col pc-footer__col--links" aria-labelledby="pc-footer-links-heading">
        <h2 class="pc-footer__heading" id="pc-footer-links-heading">Quick Links</h2>
        <ul class="pc-footer__rows">
          <li>
            <a href="services.html" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.3"/><path d="M4 10h12M10 4c2 2 3 4 3 6s-1 4-3 6M10 4c-2 2-3 4-3 6s1 4 3 6" stroke="currentColor" stroke-width="1.1"/></svg>
              <span class="pc-footer__row-label">Service Domains</span>
              <svg class="pc-footer__row-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </li>
          <li>
            <a href="#" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 4h10v12H6V4zM4 6h2v12H4V6z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>
              <span class="pc-footer__row-label">Technical Publications</span>
              <svg class="pc-footer__row-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </li>
          <li>
            <a href="#" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 6c2 0 3 2 6 2s4-2 6-2v8c-2 0-3 2-6 2s-4-2-6-2V6z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>
              <span class="pc-footer__row-label">Social Media Links</span>
              <svg class="pc-footer__row-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </li>
          <li>
            <a href="contact.html" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 4h10v12H5V4z" stroke="currentColor" stroke-width="1.3"/><path d="M8 8h4M8 11h4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
              <span class="pc-footer__row-label">Contact Information</span>
              <svg class="pc-footer__row-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </li>
          <li>
            <a href="mailto:business@prasadconsulting.com" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="4" y="6" width="12" height="9" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M4 7l6 4 6-4" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>
              <span class="pc-footer__row-label">Email Address</span>
              <svg class="pc-footer__row-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </li>
          <li>
            <a href="tel:+912243111200" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 4h3l1 3-2 1a9 9 0 004 4l1-2 3 1v3a2 2 0 01-2 2C8.5 16 4 11.5 4 6a2 2 0 012-2z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>
              <span class="pc-footer__row-label">Phone Numbers</span>
              <svg class="pc-footer__row-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </li>
          <li>
            <a href="contact.html" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 17s-5-3.5-5-8a5 5 0 1110 0c0 4.5-5 8-5 8z" stroke="currentColor" stroke-width="1.3"/><circle cx="10" cy="9" r="1.8" stroke="currentColor" stroke-width="1.2"/></svg>
              <span class="pc-footer__row-label">Office Address</span>
              <svg class="pc-footer__row-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </li>
          <li>
            <a href="index.html" class="pc-footer__row">
              <svg class="pc-footer__row-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M8 4h9v9M6 14l-2 2 2-2zM4 16l2-2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span class="pc-footer__row-label">Website Links</span>
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

      <section class="pc-footer__col pc-footer__col--contact" aria-labelledby="pc-footer-contact-heading">
        <h2 class="pc-footer__heading" id="pc-footer-contact-heading">Contact Info</h2>
        <ul class="pc-footer__contact">
          <li class="pc-footer__contact-item">
            <span class="pc-footer__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none"><path d="M6 4h3l1 3-2 1a9 9 0 004 4l1-2 3 1v3a2 2 0 01-2 2C8.5 16 4 11.5 4 6a2 2 0 012-2z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>
            </span>
            <a href="tel:+912243111200" class="pc-footer__contact-text">+91 22 43111200</a>
          </li>
          <li class="pc-footer__contact-item">
            <span class="pc-footer__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none"><rect x="5" y="4" width="10" height="12" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M8 14h4M7 8h6M7 10h4" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg>
            </span>
            <a href="tel:+912243111210" class="pc-footer__contact-text">+91 22 43111210</a>
          </li>
          <li class="pc-footer__contact-item">
            <span class="pc-footer__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none"><rect x="4" y="6" width="12" height="9" rx="1" stroke="currentColor" stroke-width="1.3"/><path d="M4 7l6 4 6-4" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>
            </span>
            <a href="mailto:business@larsentoubro.com" class="pc-footer__contact-text">business@larsentoubro.com</a>
          </li>
          <li class="pc-footer__contact-item pc-footer__contact-item--address">
            <span class="pc-footer__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none"><path d="M10 17s-5-3.5-5-8a5 5 0 1110 0c0 4.5-5 8-5 8z" stroke="currentColor" stroke-width="1.3"/><circle cx="10" cy="9" r="1.8" stroke="currentColor" stroke-width="1.2"/></svg>
            </span>
            <span class="pc-footer__contact-text">L&amp;T House, Ballard Estate, Mumbai &ndash; 400 001, Maharashtra, India</span>
          </li>
        </ul>
      </section>

      <section class="pc-footer__col pc-footer__col--social" aria-labelledby="pc-footer-social-heading">
        <h2 class="pc-footer__heading" id="pc-footer-social-heading">Follow Us</h2>
        <div class="pc-footer__social">
          <a href="#" class="pc-footer__social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 11v7M8 8v.01M12 18v-5.5a2.5 2.5 0 015 0V18M5 5h14v14H5V5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <a href="#" class="pc-footer__social-link" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.5l.5-3H13V9c0-.6.4-1 1-1z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
          </a>
          <a href="#" class="pc-footer__social-link" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="7" width="16" height="10" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M11 10l4 2-4 2v-4z" fill="currentColor"/></svg>
          </a>
        </div>
      </section>
    </div>
  </div>
</footer>`
};
