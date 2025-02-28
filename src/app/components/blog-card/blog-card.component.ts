import {
  IonCard,
  IonIcon,
  IonButton,
  IonCardTitle,
  IonCardHeader,
  IonCardSubtitle,
} from '@ionic/angular/standalone';
import { personCircleOutline, book } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogModel } from 'src/app/model/blog';
import { HttpClientService } from 'src/app/services/http-client-service/http-client.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
  imports: [
    IonCard,
    IonIcon,
    IonButton,
    RouterModule,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    RouterModule,
  ],
})
export class blogCardComponent {
  @Input() blog!: BlogModel;
  private httpClientService = inject(HttpClientService);
  public error = null;
  public isLoading = false;

  constructor() {
    addIcons({
      personCircleOutline,
      book,
    });
  }

  // get single blog
  getBlogDetails = (id: number) => {
    this.httpClientService.getBlogDetails(id).subscribe({
      next: (data) => {
        this.blog = data;
      },
      error: (err) => console.error('Error getting blog details:', err),
    });
  };
}
