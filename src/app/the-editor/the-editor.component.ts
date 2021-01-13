import {Component} from '@angular/core';
import { Editor, Toolbar, toHTML, toDoc } from 'ngx-editor';
import {OnInit, OnDestroy} from '@angular/core';

import schema from "../schema";
import plugins from "./plugin";

@Component({
    selector: 'the-editor',
    templateUrl: './the-editor.component.html'
})

export class TheEditor implements OnInit, OnDestroy {
    editor: Editor = new Editor();
    toolbar: Toolbar = [
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_right', 'align_justify'],
      ];
    html: string = '';

    getHtml(): void {
        const jsonDoc = toDoc(this.html);
        const html = toHTML(jsonDoc);
        console.log(html);
    }

    ngOnInit(): void {
    this.editor = new Editor({schema, plugins});
    }

    ngOnDestroy(): void {
    this.editor.destroy();
    }
}