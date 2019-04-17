import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuestionList} from "ClientApp/app/test/questionsList.component";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionList
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
