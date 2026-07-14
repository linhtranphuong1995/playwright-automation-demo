import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page.js';
import { InventoryPage } from '../../pages/inventory.page.js';

test('UI - Successful normal user login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  
  // Step 1: Navigate to Login page
  await loginPage.goto();
  
  // Step 2: Enter username & password, then login
  await loginPage.login(process.env.ADMIN_USER!, process.env.ADMIN_PASS!);

  // Expect: User is redirected to Dashboard
  await inventoryPage.goto();
  await expect(inventoryPage.topBarTitle).toBeVisible();
});