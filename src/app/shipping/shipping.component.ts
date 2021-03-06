import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    // console.log(this.shippingCosts);
  }

  shippingCosts = this.cartService.getShippingPrices();

}
