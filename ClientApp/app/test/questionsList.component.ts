import {Component, OnInit} from "@angular/core";

@Component({
    selector: "question-list",
    templateUrl: "questionsList.component.html",
    styleUrls: []
})
export class QuestionList implements OnInit{
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

    public czas:number = 30;
    egzamin: Boolean;
    public indexPytanie:number;

    public coSekunda():void 
    {
        let czasinterwal=setInterval(()=>{
            this.czas--;
            if(this.czas<=0){
                clearInterval(czasinterwal);
                if(this.indexPytanie<this.questions.length-1)
                {
                    this.indexPytanie++;
                    this.czas=30;
                    this.coSekunda();
                }
                else this.egzamin=false;
            }
        },1000)
    }

    ngOnInit(){
        this.indexPytanie=0;
        this.egzamin=true;
        this.czas=30;
        // let czasinterwal=setInterval(()=>{
        //     this.czas--;
        //     if(this.czas<=0){
        //         clearInterval(czasinterwal);
        //         if(this.indexPytanie<this.questions.length-1)
        //         {
        //             this.indexPytanie++;
        //             this.czas=30;
        //             czasinterwal.ref();
        //         }
        //         else this.egzamin=false;

        //     }

        // },1000)
        this.coSekunda();
           
    }

}