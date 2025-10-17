import { test, expect } from '@playwright/test';

test('image fallback works for clan emblems', async ({ page }) => {
  // Intercept requests to an emblem and force a 404 to simulate broken image
  await page.route('**/assets/images/emblems/**', route => route.fulfill({ status: 404, body: '' }));
  await page.goto('http://localhost:5173/');
  // Wait for the clan grid to render
  await expect(page.locator('#clan-index-grid article.card').first()).toBeVisible();
  // Open first clan details (click Details button)
  const detailsBtn = page.locator('.open-drawer').first();
  await detailsBtn.click();
  // The drawer shows images with class img-fallback; ensure at least one exists
  const fallbackImg = page.locator('img.img-fallback').first();
  await expect(fallbackImg).toBeVisible();
  // If the src failed, the script should replace it with data-fallback — check src contains 'fallback' or is different
  const src = await fallbackImg.getAttribute('src');
  const fallback = await fallbackImg.getAttribute('data-fallback');
  expect(fallback).toBeTruthy();
  // If the page script applied fallback, eventually img.src should equal data-fallback
  await page.waitForFunction((imgSel, fb) => {
    const el = document.querySelector(imgSel);
    return el && (el.src.includes(fb) || el.dataset.bad === '1');
  }, {}, 'img.img-fallback', fallback || 'fallback');
});
