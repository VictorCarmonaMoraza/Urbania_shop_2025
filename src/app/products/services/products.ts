import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsAPI } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class Products {

  readonly #BASE_URL = 'http://localhost:3000/api/products';

get productListHttpResource() {
  return httpResource<ProductsAPI.Response>(
    () => {
      const url = `${this.#BASE_URL}`;
      return url;
    },
    {
      parse: (rawData) => {
        console.log('📦 Productos recibidos en el servicio:', rawData);
        return rawData as ProductsAPI.Response;
      },
    }
  );
}

}
