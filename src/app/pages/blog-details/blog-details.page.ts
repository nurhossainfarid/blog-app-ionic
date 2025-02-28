import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { HttpClientService } from 'src/app/services/http-client-service/http-client.service';
import { ActivatedRoute } from '@angular/router';
import { BlogModel } from 'src/app/model/blog';
import { addIcons } from 'ionicons';
import { book, personCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.page.html',
  styleUrls: ['./blog-details.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonBackButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
  ],
})
export class BlogDetailsPage {
  route: ActivatedRoute = inject(ActivatedRoute);
  private httpClientService = inject(HttpClientService);
  public error = null;
  private blogId = this.route.snapshot.params['id'];
  public blog = {} as BlogModel;
  constructor() {
    this.fetchBlogDetails(this.blogId);
    addIcons({
      personCircleOutline,
      book,
    });
  }
  fetchBlogDetails(blogId: number) {
    this.httpClientService.getBlogDetails(blogId).subscribe({
      next: (blog) => {
        this.blog = blog;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Blog details fetched');
      },
    });
  }
}
