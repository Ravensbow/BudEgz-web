import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuestionList} from "ClientApp/app/test/questionsList.component";

import { AppComponent } from './app.component';
import { WynikComponent } from './wynik/wynik.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionList,
    WynikComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
