import { Component } from '@angular/core';
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  IonLabel,
  IonSegment,
  IonSegmentButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  searchOutline,
  moonOutline,
  personCircleOutline,
  logoInstagram,
  logoTwitter,
  logoFacebook,
  logoLinkedin,
  logoYoutube,
  logoX,
  logoGithub,
  logoSkype,
  logoPinterest,
  mailOutline,
  personAddOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
    IonLabel,
    IonSegment,
    IonSegmentButton,
  ],
})
export class HeaderComponent {
  constructor() {
    addIcons({
      searchOutline,
      moonOutline,
      personCircleOutline,
      logoX,
      logoInstagram,
      logoTwitter,
      logoFacebook,
      logoLinkedin,
      logoYoutube,
      logoPinterest,
      logoGithub,
      logoSkype,
      mailOutline,
      personAddOutline,
    });
  }
}
