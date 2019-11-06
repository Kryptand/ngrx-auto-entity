import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductComponent } from './containers/product/product.component';
import { ProductsComponent } from './containers/products/products.component';
import { routes } from './products.routing';
import { NgrxAutoEntityModule } from 'projects/ngrx-auto-entity/src/lib/module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgrxAutoEntityModule.forFeature()
  ],
  declarations: [ProductComponent, ProductsComponent, ProductFormComponent, ProductsTableComponent]
})
export class ProductsModule {}
