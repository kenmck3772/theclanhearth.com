import { test, expect } from '@playwright/test';

test('homepage loads and key elements render', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page).toHaveTitle(/Clan Hearth/i);
  // Header and main sections
  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('#clans-section')).toBeVisible();
  await expect(page.locator('#trip-builder-section')).toBeVisible();
});
