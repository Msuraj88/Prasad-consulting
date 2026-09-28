(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var inbox = "info@prasadconsultinghydindia.com";
  var endpoint = "https://formsubmit.co/ajax/" + inbox;
  var fields = form.querySelector(".contact-form__fields");
  var success = document.getElementById("contact-form-success");
  var successText = document.getElementById("contact-form-success-text");
  var statusEl = document.getElementById("contact-form-status");
  var againBtn = document.getElementById("contact-form-again");
  var submitBtn = form.querySelector(".contact-form__submit");
  var submitHtml = submitBtn.innerHTML;
  var deliveredText = "Thank you. Your message has been delivered. We’ll get back to you soon.";

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    var honey = form.querySelector("[name='_honey']");
    if (honey && honey.value) {
      showSuccess(deliveredText);
      return;
    }

    clearStatus();
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    if (location.protocol === "file:") {
      openMailDraft();
      return;
    }

    var name = valueOf("name");
    var email = valueOf("email");
    var phone = valueOf("phone");

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      referrerPolicy: "unsafe-url",
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone || "Not provided",
        message: valueOf("message"),
        _subject: "Website enquiry from " + name,
        _replyto: email,
        _template: "table",
        _captcha: "false"
      })
    })
      .then(function (response) {
        return response.json().then(function (body) {
          return { ok: response.ok, body: body || {} };
        });
      })
      .then(function (result) {
        var sent = result.body.success === true || result.body.success === "true";
        if (!result.ok || !sent) {
          throw new Error(result.body.message || "Could not send your message.");
        }
        showSuccess(deliveredText);
      })
      .catch(function (error) {
        var message = error && error.message ? error.message : "";
        if (/web server|HTML files|activat/i.test(message) || message === "Failed to fetch") {
          openMailDraft();
          return;
        }
        submitBtn.disabled = false;
        submitBtn.innerHTML = submitHtml;
        setStatus(message || "Could not send your message. Check your connection and try again.");
      });
  });

  if (againBtn) {
    againBtn.addEventListener("click", function () {
      form.reset();
      success.hidden = true;
      fields.hidden = false;
      clearStatus();
      var nameInput = form.querySelector("#name");
      if (nameInput) nameInput.focus();
    });
  }

  function openMailDraft() {
    var name = valueOf("name");
    var email = valueOf("email");
    var phone = valueOf("phone");
    var message = valueOf("message");
    var subject = "Website enquiry from " + name;
    var body = [
      "Name: " + name,
      "Email: " + email,
      "Phone: " + (phone || "Not provided"),
      "",
      message
    ].join("\n");
    var link = "mailto:" + inbox
      + "?subject=" + encodeURIComponent(subject)
      + "&body=" + encodeURIComponent(body);

    showSuccess("Thank you. Your email app has this message ready for " + inbox + ". Press Send there to deliver it.");
    window.location.href = link;
  }

  function valueOf(fieldName) {
    var field = form.elements[fieldName];
    return field ? field.value.trim() : "";
  }

  function showSuccess(detail) {
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = submitHtml;
    clearStatus();
    if (successText) successText.textContent = detail;
    fields.hidden = true;
    success.hidden = false;
  }

  function setStatus(message) {
    statusEl.textContent = message;
    statusEl.hidden = false;
  }

  function clearStatus() {
    statusEl.textContent = "";
    statusEl.hidden = true;
  }
})();
