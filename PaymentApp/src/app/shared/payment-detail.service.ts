import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetail } from '../models/payment-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }
  
  url:string = "https://localhost:44345/api";

  // formData : PaymentDetail = new PaymentDetail();
  
  getlist(){
    return this.http.get(this.url + "/get")
  }

  postData(formData:PaymentDetail){
    return this.http.post(this.url + "/post", formData)
  }

  getDatabyId(id:number){
    return this.http.get(`${this.url}/getbyid?id=${id}`)
  }

}
