import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-md-editor',
  templateUrl: './md-editor.component.html',
  styleUrls: ['./md-editor.component.scss']
})
export class MdEditorComponent implements OnInit {

  @Input() formTitle: string;
  @Input() control: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
