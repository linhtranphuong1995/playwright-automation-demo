import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
    readonly topBarTitle: Locator;
    
    constructor(page: Page) {
        super(page); // Call constructor of BasePage
        this.topBarTitle = page.locator('.oxd-topbar-header-title');
    }

    // Navigation
    async goto() {
        await this.page.goto('/web/index.php/dashboard/index');
    }
}