import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from 'app/models/blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private URL = "http://localhost:9090/api/blogs";

  constructor(private httpClient : HttpClient) { }

  getAllBlog() : Observable<Blog[]> {
    console.log("get all Blobs service");
    return this.httpClient.get<Blog[]>(`${this.URL}`);
  }

  getBlogById(id : number) : Observable<Blog> {
    console.log("get blog by id service");
    return this.httpClient.get<Blog>(`${this.URL}/${id}`);
  }

  saveBlog(object : Blog) : Observable<Blog> {
    console.log("save blog service");
    return this.httpClient.post<Blog>(`${this.URL}`, object);
  }

  upvoteBlog(id : number) : Observable<any> {
    console.log("upvote blog service");
    return this.httpClient.put(`${this.URL}/upvote/${id}`, null);
  }

  downvoteBlog(id : number) : Observable<any> {
    console.log("downvote blog service");
    return this.httpClient.put(`${this.URL}/downvote/${id}`, null);
  }
}
