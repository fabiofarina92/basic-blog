import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../service/posts/posts.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  selectedPostId: string;
  selectedPostData: any;
  serverResponse: any = null;
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    this.selectedPostId = this.route.snapshot.paramMap.get('id');

    this.postsService.get(this.selectedPostId).subscribe((data) => {
      this.selectedPostData = data;
      console.log(this.selectedPostData);
    });

  }

  delete() {
    this.postsService.delete(this.selectedPostId).subscribe((response) => {
      this.serverResponse = response;
    });
  }
}
