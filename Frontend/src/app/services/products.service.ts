import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = "https://fakestoreapi.com/products/";

  //URL used for search by category
  urlcategory:string="https://fakestoreapi.com/products/categories";

  constructor(private http : HttpClient) { }

  getProduct()
  {
    return this.http.get<any>(this.url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //Use it only for search
  getProductByCategory(category:any):Observable<any>
  {
    return this.http.get<any>(this.urlcategory+{category})
  }
}
