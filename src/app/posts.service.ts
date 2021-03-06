import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from './post';

@Injectable()
export class PostsService {
  private postsUrl = "https://public-api.wordpress.com/wp/v2/sites/blog.moon.co.nz/";
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) { }
  getPosts(): Promise<Post[]> {
    return this.http.get(this.postsUrl + 'posts?per_page=12')
      .toPromise()
      .then(response => {
        return response.json()
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any>{
      console.error('An error occurred', error); 
      return Promise.reject(error.message || error);
  }
}
