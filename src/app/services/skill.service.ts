import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private apiService: ApiService) { }

  async GetAll(skip: number = 0) {
    return await this.apiService.get(`/api/v1/Skill?RequireTotalCount=true&Skip=${skip * 10}&Take=10`);
  }

  async AddAsync(model: any, icon: File) {
    const formData: FormData = new FormData();
    formData.append('icon', icon, icon.name);
    Object.keys(model).map(item => {
      formData.append(item, model[item]);
    })

    return await this.apiService.post("/api/v1/Skill", formData)
  }
  async UpdateAsync(model: any, icon: File) {
    const formData: FormData = new FormData();
    formData.append('icon', icon, icon.name);
    Object.keys(model).map(item => {
      formData.append(item, model[item]);
    })
    return await this.apiService.put("/api/v1/Skill", formData)
  }
  async DeleteAsync(id: number) {
    return await this.apiService.delete(`/api/v1/Skill/${id}`)
  }
}
