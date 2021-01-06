import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../../interfaces/post";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  @Input() post:PostModel;

  constructor() { }

  ngOnInit(): void {
  }

}
