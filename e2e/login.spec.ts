import { test, expect } from '@playwright/test';

test('Successful login', async ({ page }) => {
  // Step 1: Navigate to Login page
  await page.goto('https://opensource-demo.orangehrmlive.com/',{ 
  waitUntil: 'domcontentloaded' 
  });
  await expect(page.getByRole('heading',{name:'Login'})).toBeVisible();

  // Step 2: Enter username
  await page.getByPlaceholder('Username').fill('Admin');

  // Step 3: Enter password
  await page.getByPlaceholder('Password').fill('admin123');

  // Step 4: Click the Login button
  await page.getByRole('button',{name: 'Login'}).click()

  // Expect: User is redirected to Dashboard
  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
});