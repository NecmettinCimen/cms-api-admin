import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private apiService: ApiService) { }

  async GetAll(skip:number = 0) {
    return await this.apiService.get(`/api/v1/Experience?RequireTotalCount=true&Skip=${skip*10}&Take=10`);
  }

  async AddAsync(model:any){
    return await this.apiService.post("/api/v1/Experience",model)
  }
  async UpdateAsync(model:any){
    return await this.apiService.put("/api/v1/Experience",model)
  }
  async DeleteAsync(id:number){
    return await this.apiService.delete(`/api/v1/Experience/${id}`)
  }
}
