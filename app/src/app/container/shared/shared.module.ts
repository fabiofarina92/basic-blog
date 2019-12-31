import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdEditorComponent } from './md-editor/md-editor.component';
import { MarkdownModule } from 'ngx-markdown';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MdEditorComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MarkdownModule.forRoot()
  ],
  exports: [
    MdEditorComponent
  ]
})
export class SharedModule {
}
