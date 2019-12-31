import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPostComponent } from './view-post/view-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    ViewPostComponent,
    NewPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MarkdownModule.forRoot(),
    RichTextEditorAllModule
  ],
})
export class PostsModule { }
