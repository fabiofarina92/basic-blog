import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/posts/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allPost: any = [];
  allPostGrouped: any = [];
  featuredPost: any = []
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAll().subscribe((data: []) => {
      this.allPost = data;
      this.allPostGrouped = data.map((e, i) => i % 3 === 0 ? data.slice(i, i + 3) : null).filter(e => e);
      this.featuredPost = data[Math.floor(Math.random() * data.length) + 1];
    });
  }

}
