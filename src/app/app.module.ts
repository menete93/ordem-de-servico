import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import {ChangeDetectionStrategy, inject} from '@angular/core';
import {
  
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource,} from '@angular/material/table';
import { TecnicoCreateComponent } from './views/components/tecnicos/tecnico-read/tecnico-create/tecnico-create.component';
import { TecnicoReadComponent } from './views/components/tecnicos/tecnico-read/tecnico-read.component';
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
import { MatMenuModule } from '@angular/material/menu';
import { OsClosedComponent } from './views/components/os/os-closed/os-closed.component';
import { LoginComponent } from './pages/login/login.component';
import { DefaultLoginLayoutComponent } from './views/components/default-login-layout/default-login-layout.component';
import { PrimaryInputComponent } from './components/primary-input/primary-input.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CustumInterceptor } from './services/custum-interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent,
    TecnicoDeleteComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    OsCreateComponent,
    OsUpdateComponent,
    OsViewComponent,
    //SignupComponent,
    //PrimaryInputComponent,
    // DefaultLoginLayoutComponent,
    // LoginComponent,
    

 
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    DefaultLoginLayoutComponent
],
  providers: [{
  provide:HTTP_INTERCEPTORS,useClass:CustumInterceptor,
  multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
