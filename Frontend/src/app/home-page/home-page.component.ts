import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public productList : any ;
  public product : any

  constructor(private api : ProductsService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing")
        {
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

  }

  addtocart(item: any)
  {
    this.cartService.addtoCart(item);
  }

  filter(category:string)
  { this.product = this.productList
    .filter((a:any)=>{
      if(a.category == category || category=='')
      {
        return a;
      }
    })
  }

}
