import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';

test('Successful login', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  
  // Step 1: Navigate to Login page
  await loginPage.goto();
  
  // Step 2: Enter username & password, then login
  await loginPage.login(process.env.ADMIN_USER!, process.env.ADMIN_PASS!);

  // Expect: User is redirected to Dashboard
  await dashboardPage.goto();
  await expect(page).toHaveURL(/.*dashboard/);
  await dashboardPage.topBarTitle.waitFor({ state: 'visible', timeout: 15000 });
  await expect(dashboardPage.topBarTitle).toHaveText('Dashboard');
});