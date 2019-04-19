import { Component, OnInit, Input } from '@angular/core';
import { Question, Answer } from 'ClientApp/app/Models/test';
import { Range } from 'ClientApp/app/app.component'

@Component({
  selector: 'app-wynik',
  templateUrl: './wynik.component.html',
  styleUrls: ['./wynik.component.css']
})
export class WynikComponent implements OnInit {

  constructor() { }

  @Input()
  questions : Array<Question> = new Array<Question>();
  @Input()
  answers : Array<Answer> = new Array<Answer>();
  
  public Range(range:number):number[] {
    
    return Range.Create(range)

  }

  ngOnInit() {
    
  }

}
