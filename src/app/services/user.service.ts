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
  async GetAll(skip:number = 0) {
    return await this.apiService.get(`/api/v1/User?RequireTotalCount=true&Skip=${skip*10}&Take=10`);
  }

  async AddAsync(model:any){
    return await this.apiService.post("/api/v1/User",model)
  }
  async UpdateAsync(model:any){
    return await this.apiService.put("/api/v1/User",model)
  }
  async DeleteAsync(id:number){
    return await this.apiService.delete(`/api/v1/User/${id}`)
  }
}
