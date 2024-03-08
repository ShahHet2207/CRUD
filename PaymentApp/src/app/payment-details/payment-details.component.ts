import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../models/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent implements OnInit {
  paymentdetail: PaymentDetail[] = [];
  paymentdetail1: PaymentDetail = new PaymentDetail();
  constructor(public ser: PaymentDetailService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    this.ser.getlist().subscribe({
      
      next: res => {
        console.log(res);
        this.paymentdetail = res as PaymentDetail[];
      },
      error: err => {
        console.log(err);
      }
    })
  }

  getDataById(id:number){
    this.ser.getDatabyId(id).subscribe({
      next: res => {
        console.log(res);
        debugger
        this.paymentdetail1 = res as PaymentDetail;
        this.cd.detectChanges();
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
