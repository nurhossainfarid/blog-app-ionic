import { Component, inject } from '@angular/core';
import {
  IonCol,
  IonRow,
  IonList,
  IonItem,
  IonAlert,
  IonGrid,
  IonAvatar,
  IonContent,
  IonSkeletonText,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { HttpClientService } from '../services/http-client-service/http-client.service';
import { blogCardComponent } from '../components/blog-card/blog-card.component';
import { BlogModel } from '../model/blog';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonCol,
    IonRow,
    IonList,
    IonAlert,
    IonItem,
    IonGrid,
    IonAvatar,
    IonContent,
    IonSkeletonText,
    HeaderComponent,
    blogCardComponent,
  ],
})
export class HomePage {
  private httpClientService = inject(HttpClientService);
  public error = null;
  public isLoading = false;
  public blogList: BlogModel[] = [];
  public dummyArray = new Array(3);
  constructor() {
    this.httpClientService.getAllBlogs().subscribe({
      next: (blogs) => {
        this.isLoading = true;
        this.blogList = blogs;
      },
      error: (error) => {
        this.error = error;
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
