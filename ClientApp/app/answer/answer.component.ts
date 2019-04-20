import { Component, OnInit, Input } from '@angular/core';
import { Answer } from 'ClientApp/app/Models/test'


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  constructor() { }

  @Input()
  nr : number =0;

  @Input()
  answer : Answer = new Answer("Kuba",true);



  ngOnInit() {
  }

}
