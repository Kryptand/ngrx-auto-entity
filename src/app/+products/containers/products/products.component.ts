import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductFacade } from '../../../facades';
import { Product } from '../../../models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  delayDelete$: Observable<Product[]>;
  constructor(private router: Router, private productFacade: ProductFacade) {}

  ngOnInit() {
    this.productFacade.loadAll();
    this.delayDelete$ = this.productFacade.delayedDelete$;
    this.products$ = this.productFacade.all$;
  }

  bulkDelete() {
    if (this.selectedProducts.length) {
      const ids = this.selectedProducts.map(product => product.id);
      ids.length === 1 ? this.productFacade.deleteByKey(ids[0]) : this.productFacade.deleteManyByKeys(ids);
      this.selectedProducts = [];
    }
  }

  onSelect(products: Product[]) {
    this.selectedProducts = products;
  }

  onDelete(product: Product) {
    this.productFacade.selectDeleteDelay(product);
  }
  onExecute() {
    this.productFacade.synchronizeDelayDelete();
  }
  onEdit(product: Product) {
    this.productFacade.select(product);
    this.router.navigate(['products', product.id]);
  }
}
