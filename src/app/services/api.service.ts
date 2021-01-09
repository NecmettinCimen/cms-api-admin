import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonApiResponse } from '../models/commonApiResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient: HttpClient) { }

  async post(url: string, model: any) {
    var response = await this.httpClient.post<CommonApiResponse>(url, model).toPromise();
    if (response.Success) {
      return response.Result
    } else {
      alert(response.ErrorMessage);
      return null;
    }
  }
}
