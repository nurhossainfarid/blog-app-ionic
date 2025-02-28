import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonContent,
} from '@ionic/angular/standalone';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, HeaderComponent, IonHeader, IonContent],
})
export class AppComponent {
  constructor() {}
}
