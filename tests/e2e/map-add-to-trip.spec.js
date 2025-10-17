import { test, expect } from '@playwright/test';

test('map popup Add to Trip adds an item to the trip list', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  // Ensure map exists
  await expect(page.locator('#clanMap')).toBeVisible();
  // Wait for markers to be added. Markers are Leaflet elements; find a popup trigger via marker class
  // Click on first marker's icon (Leaflet creates div.leaflet-marker-icon)
  const marker = page.locator('.leaflet-marker-icon').first();
  await marker.click();
  // The popup content has .add-to-trip-btn
  const addBtn = page.locator('.add-to-trip-btn').first();
  await expect(addBtn).toBeVisible();
  await addBtn.click();
  // Trip count element should increment (id trip-count may exist)
  const tripCount = page.locator('#trip-count');
  await expect(tripCount).toBeVisible();
  await expect(tripCount).toHaveText(/1/);
});
