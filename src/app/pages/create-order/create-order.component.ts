import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DeliveryMethod} from "../../models/delivery-method";
import {PaymentMethod} from "../../models/payment-method";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  error: boolean = false;

  orderForm = this.fb.group({
    fullName: ['', Validators.required],
    streetAndHouseName: ['', Validators.required],
    zipCode: ['', Validators.required],
    city: ['', Validators.required],
    emailAddress: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    invoice: [false],
    deliveryMethod: ['', Validators.required],
    paymentMethod: ['', Validators.required],
  })

  deliveryMethods: DeliveryMethod[] = [
    {
      name: 'inpost',
      icon: '/assets/delivery-methods/inpost.png',
      label: 'Parcel locker 24/7',
      description: 'Estimated delivery date: tuesday 06.04',
    },
    {
      name: 'dpd',
      icon: '/assets/delivery-methods/dpd.png',
      label: 'DPD',
      description: 'Estimated delivery date: wednesday 07.04',
    },
    {
      name: 'ups',
      icon: '/assets/delivery-methods/ups.png',
      label: 'UPS',
      description: 'Estimated delivery date: wednesday 07.04',
    },
  ];

  paymentMethods: PaymentMethod[] = [
    {
      name: 'credit-card',
      label: 'Credit Card (free)',
      icons: [
        '/assets/payment-methods/visa.png',
        '/assets/payment-methods/mastercard.png',
      ],
      type: 'credit-card-form'
    },
    {
      name: 'blik',
      label: 'Blik (free)',
      icons: [
        '/assets/payment-methods/blik.png',
      ],
      type: 'redirect'
    }
  ]

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  sendForm() {
    console.log(this.orderForm);
    this.error = true;
  }

  hideErrorModal() {
    this.error = false;
  }

}
