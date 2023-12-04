import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormComponent } from './pages/form/form.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'form', component: FormComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
