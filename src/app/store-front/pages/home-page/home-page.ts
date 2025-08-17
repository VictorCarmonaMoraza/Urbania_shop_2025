import { ProductCard } from '@/products/components/product-card/product-card';
import { Products } from '@/products/services/products';
import { Component, computed, effect, inject } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage{

  readonly #productService = inject(Products);
  // usamos directamente el valor del recurso
  readonly #productsResource = this.#productService.productListHttpResource;

  readonly productsList = computed(() => {
    const response = this.#productsResource.value();
    return response?.products ?? [];  // ⬅️ ahora sí es un array
  });

  // 👇 Este effect se ejecuta automáticamente cuando cambien los datos
  readonly logProducts = effect(() => {
    const data = this.productsList();
    if (data.length > 0) {
      console.log('📦 Productos cargados (effect):', data);
    }
  });

  constructor() {
    this.#productsResource.reload();
  }

}
