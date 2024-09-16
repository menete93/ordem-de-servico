import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoReadComponent } from './views/components/tecnicos/tecnico-read/tecnico-read.component';
import { TecnicoCreateComponent } from './views/components/tecnicos/tecnico-read/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './views/components/tecnicos/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './views/components/tecnicos/tecnico-delete/tecnico-delete.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './views/components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './views/components/cliente/cliente-delete/cliente-delete.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
import { OsViewComponent } from './views/components/os/os-view/os-view.component';
import { OsClosedComponent } from './views/components/os/os-closed/os-closed.component';
import { LoginComponent } from './pages/login/login.component';
import { DefaultLoginLayoutComponent } from './views/components/default-login-layout/default-login-layout.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'Tecnico',
    component: TecnicoReadComponent
  },
  {
    path: 'Tecnico/create',
    component: TecnicoCreateComponent
  },
  {
    path: 'Tecnico/update/:id',
    component: TecnicoUpdateComponent
  },
  {
    path: 'Tecnico/delete/:id',
    component: TecnicoDeleteComponent
  },

  {
    path: 'os',
    component: OsReadComponent
  },
  {
    path: 'os/closed',
    component: OsClosedComponent
  },
  {
    path: 'os/create',
    component: OsCreateComponent
  },
 
  {
    path: 'Cliente',
    component: ClienteReadComponent
  },
  {
    path: 'Cliente/create',
    component: ClienteCreateComponent
  },
  {
    path: 'Cliente/update/:id',
    component: ClienteUpdateComponent
  },
  {
    path: 'Cliente/delete/:id',
    component: ClienteDeleteComponent
  },
  {
    path: 'os/update/:id',
    component: OsUpdateComponent
  },
  {
    path: 'os/view/:id',
    component: OsViewComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    //canActivate:[AuthGuardService]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
