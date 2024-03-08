import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../../models/payment-detail.model';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: ``
})
export class PaymentDetailFormComponent implements OnInit {
  @Input() change: PaymentDetail = new PaymentDetail();
  payementDetail: any;

  constructor(public paymentDetailService: PaymentDetailService, private toster: ToastrService) { }
  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void {
    this.payementDetail = this.change;
  }
  
  postData(formData: NgForm) {
    if (formData.value.id == null) {
      formData.value.id = 0;
    }
    this.paymentDetailService.postData(formData.value).subscribe({
      next: res => {
        formData.reset();
        this.toster.success("Data inserted successfully", "Payment Detail Register")
      },
      error: err => { console.log(err) }
    })
  }


}
