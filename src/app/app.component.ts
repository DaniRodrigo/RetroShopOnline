import { Component, OnInit } from '@angular/core';
import { products } from './pages/products/products.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SegundoBlog';
  styles = {
    display: 'flex',
    'flex-direction': 'column',
    'align-item': 'center',
    padding: '20px',
    width: '200px'
  };

  products: any[] = []; 

  public miToken: number;

  public nombreUsuario: string | null;

  constructor() {

  this.miToken = 0;

  this.nombreUsuario = "";
  }

  ngOnInit(): void {
    this.products = products;
  

    if (localStorage.getItem('miTokenPersonal')) {

    this.miToken = +localStorage.getItem('miTokenPersonal')!;
    
    }
    
    if (localStorage.getItem('miTokenPersonal')) {
    
    this.nombreUsuario = localStorage.getItem('nombreUsuario');
    
    }
    
    }
    
    public logout(): void {
    
    if (localStorage.getItem('miTokenPersonal')) {
    
    localStorage.removeItem('miTokenPersonal');
    
    }
    
    }
}
