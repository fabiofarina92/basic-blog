import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/posts/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allPost: any = [];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAll().subscribe((data) => {
      console.log(data);
      this.allPost = data;
    });
  }

}
