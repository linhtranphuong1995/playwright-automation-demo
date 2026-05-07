import { test, expect } from '@playwright/test';

test('Successful login', async ({ page }) => {
  // Step 1: Navigate to Login page
  await page.goto('',{ 
  waitUntil: 'domcontentloaded' 
  });
  await expect(page.getByRole('heading',{name:'Login'})).toBeVisible();

  // Step 2: Enter username
  await page.getByPlaceholder('Username').fill(process.env.ADMIN_USER!);

  // Step 3: Enter password
  await page.getByPlaceholder('Password').fill(process.env.ADMIN_PASS!);

  // Step 4: Click the Login button
  await page.getByRole('button',{name: 'Login'}).click()

  // Expect: User is redirected to Dashboard
  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
});