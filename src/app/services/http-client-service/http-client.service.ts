import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogModel } from 'src/app/model/blog';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private http = inject(HttpClient);
  private blogListSignal = signal<BlogModel[]>([]);
  blogUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  get blogList() {
    return this.blogListSignal;
  }

  // get all blogs
  getAllBlogs(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>(`${this.blogUrl}`);
  }

  // get todo details
  getTodoDetails(id: string): Observable<BlogModel> {
    return this.http.get<BlogModel>(`${this.blogUrl}/${id}`);
  }

  constructor() {}
}
