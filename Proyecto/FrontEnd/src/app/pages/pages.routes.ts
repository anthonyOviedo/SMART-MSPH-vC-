import { Routes, RouterModule } from "@angular/router";

// Components
import { DashboardComponent } from './dashboard/dashboard.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { PerfilComponent } from './perfil/perfil.component';





const pagesRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard', submenu: '' } },
    
    { path: 'usuario', component: UsuarioComponent, data: { titulo: 'Usuarios', submenu: 'Catálogos' } },
    { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil', submenu: '' } },  

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);