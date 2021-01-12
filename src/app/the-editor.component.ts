import {Component} from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import {OnInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'the-editor',
    templateUrl: './the-editor.component.html'
})

export class TheEditor implements OnInit, OnDestroy {
    editor: Editor = new Editor();
    toolbar: Toolbar = [
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['link', 'image'],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_right', 'align_justify'],
      ];
      html: string = '';

    ngOnInit(): void {
    this.editor = new Editor();
    }

    ngOnDestroy(): void {
    this.editor.destroy();
    }
}