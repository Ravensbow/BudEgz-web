import {Component, OnInit} from "@angular/core";
import { Range } from 'ClientApp/app/app.component'
import { Question, Answer } from 'ClientApp/app/Models/test'


@Component({
    selector: "question-list",
    templateUrl: "questionsList.component.html",
    styleUrls: []
})

export class QuestionList implements OnInit
{

    public questions1:Question[] = new Array(
        new Question("Jak mam na imie",new Array(
            new Answer("Jakub",true),
            new Answer("Patryk",false),
            new Answer("Andrzej",false))),
        new Question("Ile mamy wojewodzctw?", new Array(
            new Answer("12",false),
            new Answer("23",false),
            new Answer("18",true))),
        new Question("Czy mozna zabic?",new Array(
            new Answer("Jak najbardziej",false),
            new Answer("To zależy",true),
            new Answer("Nie",false)
        )));

    public CZAS:number = 30;

    public czas:number;
    public czasCalosci:number = 0;

    public egzamin: Boolean;
    public indexPytanie:number;

    private czasinterwal:any;
    private czasCalosciInterwal:any;

    public answers:Array<Answer> = new Array<Answer>();

    ngOnInit()
    {
        this.indexPytanie=0;
        this.egzamin=true;
        this.czas=this.CZAS;
        this.coSekunda();
        this.StartMainClock();
    }

    public createRange(number:number)
    {
        Range.Create(number);
    }

    public onEndExam()
    {
        this.egzamin=false;
        clearInterval(this.czasCalosciInterwal);
    }

    public coSekunda():void 
    {
        this.czasinterwal=setInterval(()=>{
            this.czas--;
            if(this.czas<=0){
                clearInterval(this.czasinterwal);
                if(this.indexPytanie<this.questions1.length-1)
                {
                    this.answers.push(new Answer("Pominieto",false));
                    this.indexPytanie++;
                    this.czas=this.CZAS;
                    this.coSekunda();
                }
                else
                {
                    this.answers.push(new Answer("Pominieto",false));
                    this.onEndExam();
                } 
            }
        },1000)
    }

    public StartMainClock()
    {
        this.czasCalosciInterwal=setInterval(()=>{

            this.czasCalosci++;

        },1000)
    }

    public AddAnswerTaken(answer:Answer,czas)
    {
        answer.time=this.CZAS-czas;
        this.answers.push(answer);

        clearInterval(this.czasinterwal);
        
        if(this.indexPytanie<this.questions1.length)
        {
            this.indexPytanie++;
            this.czas=this.CZAS;
            this.coSekunda();
        }
        else
        {
            this.onEndExam();
        }
    }   
}

