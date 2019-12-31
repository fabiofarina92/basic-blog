import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostsService } from '../../../service/posts/posts.service';
import {
  HtmlEditorService,
  ImageService,
  LinkService,
  TableService,
  ToolbarService
} from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  providers: [
    ToolbarService, LinkService, ImageService, HtmlEditorService, TableService
  ]
})
export class NewPostComponent implements OnInit {

  newPostForm: FormGroup;
  serverResponse: any = null;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService) {
  }

  ngOnInit() {
    this.newPostForm = this.formBuilder.group({
      title: ['', null],
      content: ['', null],
      post: ['', null]
    });
  }

  submit() {
    const title = this.newPostForm.get('title').value;
    const content = this.newPostForm.get('content').value;
    const post = this.newPostForm.get('post').value;
    const postFormat = 'MD';

    this.postsService.new({title, content, post, postFormat}).subscribe((response) => {
      this.serverResponse = response;
    });
  }

}
