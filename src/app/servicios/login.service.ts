import { Injectable } from '@angular/core';
import { UsuarioComponent } from '../clases/usuario/usuario.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public login(usuario: UsuarioComponent): Observable<number>{

    return of(Math.random()*(1000-0));
  }
}
