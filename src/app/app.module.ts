import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheEditor } from './the-editor/the-editor.component';

@NgModule({
  declarations: [
    AppComponent, 
    TheEditor
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxEditorModule.forRoot({
      locals: {
        bold: 'Wytłuszczony',
        italic: 'Kursywa',
        code: 'Kod',
        blockquote: 'Blockquote',
        underline: 'Podkreślenie',
        strike: 'Strike',
        bullet_list: 'Bullet List',
        ordered_list: 'Ordered List',
        heading: 'Nagłówek',
        h1: 'Nagłówek 1',
        h2: 'Nagłówek 2',
        h3: 'Nagłówek 3',
        h4: 'Nagłówek 4',
        h5: 'Nagłówek 5',
        h6: 'Nagłówek 6'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
