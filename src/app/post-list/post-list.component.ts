import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostsService} from '../posts.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService]
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor( private postsService: PostsService ) { }
  getPosts() {
    this.postsService.getPosts().then(posts => {
      this.posts = posts;
    });
  }
  ngOnInit() {
   this.getPosts(); 
  }

}
