// main.js

// =========================
// 1. Pure helpers
// =========================

/**
 * Set the textContent of an element if it exists.
 * @param {Element|null} el
 * @param {string} text
 */
const setText = (el, text) => {
  if (!el) return;
  el.textContent = text;
};

/**
 * Add / remove a class safely.
 */
const toggleClass = (el, className, shouldHave) => {
  if (!el) return;
  el.classList.toggle(className, !!shouldHave);
};

// =========================
// 2. Feature: Home Hero
// =========================

/**
 * Finds the hero DOM nodes and wires up the behaviour.
 * This is where your previous hydrateHomeHero logic goes.
 */
const hydrateHomeHero = () => {
  // Grab your elements
  const hero = document.querySelector("[data-hero]");
  const titleEl = hero?.querySelector("[data-hero-title]");
  const subtitleEl = hero?.querySelector("[data-hero-subtitle]");
  const ctaBtn = hero?.querySelector("[data-hero-cta]");

  // Example usage of setText (no error now, setText is already initialized)
  setText(titleEl, "Welcome to the Clan Hearth");
  setText(subtitleEl, "Through the fire we are united.");
  setText(ctaBtn, "Begin Your Journey");

  // Example: toggle a 'is-ready' class
  toggleClass(hero, "is-ready", true);

  // Add any listeners you need:
  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      console.log("CTA clicked – start journey logic here.");
      // your existing click logic…
    });
  }
};

// =========================
// 3. App bootstrap
// =========================

// Make sure we only run after the DOM is parsed.
// hydrateHomeHero will only be called AFTER setText is defined.
document.addEventListener("DOMContentLoaded", () => {
  hydrateHomeHero();
});
