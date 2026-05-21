import { APIRequestContext } from '@playwright/test';

export class AuthAPI {
  private request: APIRequestContext; 
  private readonly AUTH_URL = 'https://restful-booker.herokuapp.com/auth';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async login(payload: object) {
    return await this.request.post(this.AUTH_URL, {
      data: payload,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}