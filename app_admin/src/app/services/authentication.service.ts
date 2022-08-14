import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user'
import { AuthResponse } from '../models/auth-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private TOKEN_KEY: string = 'travlr-token';
  private baseUrl = 'http://localhost:3000/api';

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage,
    private client: HttpClient
  ) { }

  
  public getToken(): string | null {
    return this.storage.getItem(this.TOKEN_KEY);
  }

  public saveToken(token: string): void {
    this.storage.setItem(this.TOKEN_KEY, token);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.client.post(this.baseUrl + '/login', user)
      .toPromise()
      .then((response: any) => {
        response as AuthResponse
        this.saveToken(response.token)
      })
      .catch(this.handleError);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.client.post(this.baseUrl + '/register', user)
      .toPromise()
      .then((response: any) => {
        response as AuthResponse
        this.saveToken(response.token)
      })
      .catch(this.handleError);
  }

  public logout(): void {
    this.storage.removeItem(this.TOKEN_KEY);
  }

  public isLoggedIn(): boolean {
    const token: string | null = this.getToken();
    if (token) {
      const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
      return payload.exp > (Date.now() / 1000);
    }

    return false;
  }

  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string | null = this.getToken();
      if (token != null) {
        const { email, name } =
          JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
        return { email, name } as User;
      }
    }
    throw new Error('Authentication Error');
  }

  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }
}
