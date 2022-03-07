import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItem();
 
  constructor(private cartService:CartService,private formBuilder:FormBuilder) { }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  }); 
  ngOnInit(): void {
    
  }
  onSubmit(): void{
    this.items = this.cartService.clearItem();
    console.log('your order has been submitted '+this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
