import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product-filter.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',canActivate:[ProductDetailGuard], component: ProductDetailComponent },
    ]),
    SharedModule

  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    ProductFilterPipe
  ]
})
export class ProductModule { }
