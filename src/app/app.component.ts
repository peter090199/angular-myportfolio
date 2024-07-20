import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs/internal/Observable';
import { Subscribable } from 'rxjs/internal/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
toggleSidenav(_t23: MatSidenav) {
throw new Error('Method not implemented.');
}
logout() {
throw new Error('Method not implemented.');
}
  title = 'my-angular-app';
  isMobile$!: Observable<string | boolean | undefined> | Subscribable<string | boolean | undefined> | Promise<string | boolean | undefined>;
selected: any;
}
