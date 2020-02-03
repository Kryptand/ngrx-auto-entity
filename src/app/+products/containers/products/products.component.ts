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
