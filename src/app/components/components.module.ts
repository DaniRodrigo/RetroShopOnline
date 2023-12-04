import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { HeaderComponent } from './header/header.component';
import { AvatarComponent } from './avatar/avatar.component';
import { TitleComponent } from './title/title.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductCardComponent,
    HeaderComponent,
    AvatarComponent,
    TitleComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    ProductCardComponent,
    HeaderComponent,
    FormsModule
  ]
})
export class ComponentsModule { }
