// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '../shared/shared.module';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Pagination
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


// Components
import { DashboardComponent } from './dashboard/dashboard.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { PerfilComponent } from './perfil/perfil.component';





@NgModule({
  declarations: [
    DashboardComponent,
    UsuarioComponent,
    PerfilComponent,
    

  
   
   
  
  ],  
  imports: [
    CommonModule,
    NgbModule,
    PAGES_ROUTES,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
    
    
  ]
})
export class PagesModule { }
