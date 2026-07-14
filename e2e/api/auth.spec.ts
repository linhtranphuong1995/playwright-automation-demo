import { test, expect } from '@playwright/test';
import { AuthAPI } from '../../api/auth.api.js';

test('API - Successful login', async ({ request }) => {
    const authApi = new AuthAPI(request);
    const validPayload = {
        username: "admin",
        password: "password123"
    };

    // Check status 200
    const response = await authApi.login(validPayload);
    expect(response.status()).toBe(200);

    // Check body
    const body = await response.json();
    console.log(body);
    expect(body).toHaveProperty('token');
    expect(typeof body.token).toBe('string');
    expect(body.token.length).toBeGreaterThan(0);
});