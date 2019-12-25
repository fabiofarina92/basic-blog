import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostsService } from '../../../service/posts/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newPostForm: FormGroup;
  serverResponse: any = null;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService) { }

  ngOnInit() {
    this.newPostForm = this.formBuilder.group({
      title: ['', null],
      content: ['', null]
    });
  }

  submit() {
    const title = this.newPostForm.get('title').value;
    const content = this.newPostForm.get('content').value;
    this.postsService.new( { title, content }).subscribe((response) => {
      this.serverResponse = response;
    });
  }

}
