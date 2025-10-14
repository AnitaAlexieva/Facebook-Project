import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  standalone:true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  showCart = false;
  showPayment = false;
  paymentSuccess = false;

  toggleCart() {
    this.showCart = !this.showCart;
  }

  togglePayment(){
    this.showPayment = !this.showPayment
  }

  confirmPayment() {
    this.paymentSuccess = true;
    this.showPayment = false; 
    setTimeout(() => {
      this.paymentSuccess=false
    }, 5000);
  }   
}
