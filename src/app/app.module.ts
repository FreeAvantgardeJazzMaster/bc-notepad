import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEditorModule } from 'ngx-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheEditor } from './the-editor.component';

@NgModule({
  declarations: [
    AppComponent, 
    TheEditor
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
