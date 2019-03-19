import {Component} from "@angular/core";

@Component({
    selector: "question-list",
    templateUrl: "questionsList.component.html",
    styleUrls: []
})
export class QuestionList{
    public questions = [{
        content: "Jak mam na imie",
        answers:[{
            content: "Jakub",
            correctness: true
        },{
            content: "Patryk",
            correctness: false
        },{
            content: "Andrzej",
            correctness: false
        }]
    },{
        content: "Ile mamy wojewodztw",
        answers:[{
            content: "10",
            correctness: true
        },{
            content: "12",
            correctness: false
        },{
            content: "11",
            correctness: false
        }]
    }];
}