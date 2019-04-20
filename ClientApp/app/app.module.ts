import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuestionList} from "ClientApp/app/test/questionsList.component";

import { AppComponent } from './app.component';
import { WynikComponent } from './wynik/wynik.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionList,
    WynikComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
