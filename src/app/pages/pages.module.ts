import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    ProductsComponent,
    AboutUsComponent,
    NotFoundComponent,
    FormComponent,
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [
    ProductsComponent,
    AboutUsComponent,
    FormsModule,
    NotFoundComponent
  ]
})
export class PagesModule { }
