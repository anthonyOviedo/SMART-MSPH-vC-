import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CryptoService, UsuarioService } from '../services/service.index';

declare var $: any; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  ingresando: boolean = false;

  constructor(
    private router: Router,
    private _cryptoService: CryptoService,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  ingresar( form: NgForm ) {
    
    if ( form.invalid ) {
      return;
    }

    this.ingresando = true;

    var user = form.value.username;
    var pass = this._cryptoService.encryptPassword( form.value.password );

    this._usuarioService.login( user, pass )
      .subscribe( () => this.router.navigate(['/dashboard']) )
      .add( () => this.ingresando = false );

  }


}
