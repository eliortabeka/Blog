import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {PostModel} from "../../interfaces/post";

@Component({
  selector: 'app-blog-hm',
  templateUrl: './blog-hm.component.html',
  styleUrls: ['./blog-hm.component.scss']
})
export class BlogHmComponent implements OnInit, OnDestroy {
  posts:PostModel[] = null;
  postSub;

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.postSub = this.postsService.getPosts().subscribe((posts:PostModel[]) => {
      for (let post of posts) {
        post.image = `https://picsum.photos/200/200?random=${post.id}`
      }
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
