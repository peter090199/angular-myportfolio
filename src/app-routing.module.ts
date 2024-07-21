import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // other routes
  { path: '', redirectTo: '/home', pathMatch: 'full' },// Redirect to home by default
  { path: 'about', component: AboutComponent },
 
];


@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
})

export class AppRoutingModule { }
