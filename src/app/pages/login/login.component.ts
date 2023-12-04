import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioComponent } from 'src/app/clases/usuario/usuario.component';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Atributos
  public usuario: UsuarioComponent = {
    nombre: '',
    contrasena: '',
    genero: ''
  };
  public mostrarSpinner: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  public handleGeneroChange(event: any): void {
    this.usuario.genero = event?.target?.value || '';
  }

  

  public submit(): void {
    // Muestra el spinner al enviar el formulario
    this.mostrarSpinner = true;

    this.loginService.login(this.usuario).subscribe(
      (data: number) => {
        localStorage.setItem('nombreUsuario', this.usuario.nombre);
        localStorage.setItem('miTokenPersonal', `${data}`);
        this.router.navigate(['/listado']);
      },
      (error: Error) => {
        console.error("Error al realizar el acceso");
      }
    ).add(() => {
      // Oculta el spinner cuando la operación ha terminado
      this.mostrarSpinner = false;
    });
  }
}