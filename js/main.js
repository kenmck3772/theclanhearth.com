// main.js

// =========================
// 1. App bootstrap
// =========================

document.addEventListener("DOMContentLoaded", () => {
  hydrateHomeHero();
});

// =========================
// 2. Feature: Home Hero
// =========================

function hydrateHomeHero() {
  const hero = document.querySelector("[data-hero]");
  const titleEl = hero?.querySelector("[data-hero-title]");
  const subtitleEl = hero?.querySelector("[data-hero-subtitle]");
  const ctaBtn = hero?.querySelector("[data-hero-cta]");

  setText(titleEl, "Welcome to the Clan Hearth");
  setText(subtitleEl, "Through the fire we are united.");
  setText(ctaBtn, "Begin Your Journey");

  toggleClass(hero, "is-ready", true);

  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      console.log("CTA clicked – start journey logic here.");
      // your existing click logic…
    });
  }
}

// =========================
// 3. Helpers
// =========================

function setText(el, text) {
  if (!el) return;
  el.textContent = text;
}

function toggleClass(el, className, shouldHave) {
  if (!el) return;
  el.classList.toggle(className, !!shouldHave);
}
