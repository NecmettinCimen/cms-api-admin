import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private apiService: ApiService) { }

  async GetAll(skip: number = 0, id: string = "") {
    var url = `/api/v1/Content?RequireTotalCount=true&Skip=${skip * 10}&Take=10`
    if (id != "")
      url += `&filter=${encodeURI('["Id",=,"' + id + '"]')}`

    return await this.apiService.get(url);
  }

  async AddAsync(model: any) {
    return await this.apiService.post("/api/v1/Content", model)
  }
  async UpdateAsync(model: any) {
    return await this.apiService.put("/api/v1/Content", model)
  }
  async DeleteAsync(id: number) {
    return await this.apiService.delete(`/api/v1/Content/${id}`)
  }
}
