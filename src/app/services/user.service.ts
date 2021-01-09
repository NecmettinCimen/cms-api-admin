import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public apiService: ApiService) { }

  Authenticate(model: any) {
    return this.apiService.post("/api/v1/User/Authenticate", model);
  }
}
