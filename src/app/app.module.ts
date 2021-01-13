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
        underline: 'Podkreślenie',
        strike: 'Przekreślenie',
        bullet_list: 'Lista punktowa',
        ordered_list: 'Lista numerowana',
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
