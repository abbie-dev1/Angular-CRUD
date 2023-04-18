import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public total!: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void
  {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.total = this.cartService.getTotalPrice();
    });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptycart() {
    this.cartService.removeAllCart();
  }
}


// removeFromCart(cartItem: CartItem){
//   this.CartService.removeFromCart(cartItem.product.id);
// }
