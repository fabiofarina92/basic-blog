import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../service/posts/posts.service';
import {
  HtmlEditorService,
  ImageService,
  LinkService,
  TableService,
  ToolbarService
} from '@syncfusion/ej2-angular-richtexteditor';
import { FormBuilder, FormGroup } from '@angular/forms';
import hljs from 'highlight.js';
import { slideFromLeftAnimation, slideFromRightAnimation } from '../../shared/animation/models/slide.animation';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
  providers: [
    ToolbarService, LinkService, ImageService, HtmlEditorService, TableService
  ],
  animations: [
    slideFromLeftAnimation('titleLoadAnimation'),
    slideFromRightAnimation('contentLoadAnimation')
  ]
})

export class ViewPostComponent implements OnInit {

  selectedPostId: string;
  selectedPostData: any;
  serverResponse: any = null;

  viewMode: 'edit' | 'view';
  rteTools: any = {
    items: [
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateLink', 'CreateTable',
      'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen'
    ]
  };
  editPostForm: FormGroup;

  constructor(private route: ActivatedRoute, private postsService: PostsService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.selectedPostId = this.route.snapshot.paramMap.get('id');

    this.postsService.get(this.selectedPostId).subscribe((data: any) => {
      this.selectedPostData = data;
      // this.selectedPostData.post = this.findAndFormatOutput(data.post);
      // this.selectedPostData.post = hljs.highlightAuto(data.post);
      console.log(this.selectedPostData);
    });

    this.editPostForm = this.formBuilder.group({
      title: ['', null],
      content: ['', null],
      post: ['', null]
    });
  }

  delete() {
    this.postsService.delete(this.selectedPostId).subscribe((response) => {
      this.serverResponse = response;
    });
  }

  edit() {
    this.viewMode = 'edit';
    this.editPostForm.get('title').setValue(this.selectedPostData.title);
    this.editPostForm.get('content').setValue(this.selectedPostData.content);
    this.editPostForm.get('post').setValue(this.selectedPostData.post);
  }

  submit() {
    const title = this.editPostForm.get('title').value;
    const content = this.editPostForm.get('content').value;
    const post = this.editPostForm.get('post').value;

    const newPost = {title, content, post};

    this.postsService.edit(this.selectedPostId, newPost).subscribe((response) => {
      this.serverResponse = response;
      console.log('response', response);
      this.selectedPostData = newPost;
      this.viewMode = 'view';
    });
  }

  findAndFormatOutput(content: any) {
    let newContent = content;
    const regex = /<\s*pre[^>]*><\s*code[^>]*>(.*?)<\s*\/\s*code><\s*\/\s*pre>/g;
    const codeBlocks = content.match(regex);
    console.log('blocks', codeBlocks[0]);

    let m;
    const arr = [];

    while ((m = regex.exec(content)) != null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      arr.push(m[1]);
    }

    console.log('arr', arr);
    arr.forEach((val) => {
      newContent = newContent.replace(val, hljs.highlightAuto(val, ['typescript']).value);
    });
    return newContent;
  }
}
