import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CommandComponent } from './command/command.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommandComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
