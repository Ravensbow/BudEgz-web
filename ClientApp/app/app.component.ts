import { Component } from '@angular/core';

@Component({
  selector: 'the-test',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent {
  title = 'Moja dupa';
}
export class Range{
  public static Create(range : number):number[]
  {
    let item: number[] = [];
        for(let i =1;i<=range;i++)
        {
            item.push(i);
        }
        return item;
  }
}
