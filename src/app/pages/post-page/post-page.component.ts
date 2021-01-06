import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {PostModel} from "../../interfaces/post";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute,
              private postsService: PostsService) {
  }

  postID: string;
  ngOnInit(): void {
    this.postID = this.activatedRoute.snapshot.paramMap.get('postID');
    this.getPost();
  }

  postSub;
  post;
  getPost() {
    this.postSub = this.postsService.getPost(this.postID).subscribe((post:PostModel) => {
      post.image = `https://picsum.photos/840/300?random=${post.id}`;
      this.post = post;
    })
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }




}
