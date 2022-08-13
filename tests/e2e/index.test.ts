import { test, expect } from '@playwright/test';

test.describe('The index Page', () => {
  test('loads the page', async ({ page }) => {
    await page.goto('./');
    await expect(page).toHaveTitle('Vite App');
  });
});
