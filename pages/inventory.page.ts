import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page.js';

export class InventoryPage extends BasePage {
    readonly topBarTitle: Locator;
    
    constructor(page: Page) {
        super(page); // Call constructor of BasePage
        this.topBarTitle = page.getByText('Products');
    }

    // Navigation
    async goto() {
        await this.page.goto('/inventory.html');
    }
}