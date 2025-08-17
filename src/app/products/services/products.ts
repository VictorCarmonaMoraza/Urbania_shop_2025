import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductsAPI } from '../interfaces/product.interface';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Products {
  readonly #httpClient = inject(HttpClient);

  //readonly #BASE_URL = 'http://localhost:3000/api/products';
  readonly #BASE_URL = environment.baseUrl;

getProducts(options: ProductsAPI.Options ={}):Observable<ProductsAPI.Response> {
 const { limit =9, offset=0, gender =''} = options;
  return this.#httpClient.get<ProductsAPI.Response>(`${this.#BASE_URL}/products`, {
    params: {
      limit,
      offset,
      gender
    }
  }).pipe(tap((resp)=> console.log(resp)));
}


}
