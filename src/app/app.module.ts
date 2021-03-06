import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { PetListComponent } from './pet-list/pet-list.component';
import "angular2-navigate-with-data";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pets', component: PetListComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
