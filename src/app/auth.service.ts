import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  success: boolean,
  message: string
}
interface registerResponse{
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(username, password) {
    // post these details to API server return user info if correct
    return this.http.post<registerResponse>('/register', {
      username,
      password
    })
  }

  
}
