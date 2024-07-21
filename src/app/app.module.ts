
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import { MaterialModule } from 'src/Material/Material.module';
import { DatePipe } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    FooterPageComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ToastrModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSelectModule,
    MatIconModule,
    NgSelectModule
  ],
  providers: [DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
