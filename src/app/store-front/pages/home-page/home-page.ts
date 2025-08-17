import { ProductCard } from '@/products/components/product-card/product-card';
import { ProductsAPI } from '@/products/interfaces/product.interface';
import { Products } from '@/products/services/products';
import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-home-page',
  imports: [ProductCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

  readonly #productService = inject(Products);


productsResource = rxResource<ProductsAPI.Response, ProductsAPI.Options>({
  // 👇 aquí defines los parámetros que quieres mandar al servicio
  params: () => ({}),

  // 👇 aquí defines cómo cargar los datos usando esos parámetros
  stream: ({ params }) => this.#productService.getProducts({ limit: 1,gender:'women' }),

  // 👇 valor inicial que cumple con la interfaz Response
  defaultValue: { products: [], count: 0, pages: 0 },
});











}

