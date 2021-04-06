import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  private username = "tadakoglu"
  
  getCurrentUsername() {
    return this.username
  }

}
