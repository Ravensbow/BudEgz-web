export class Question
{
    public answers: Answer[];
    public content: string;

    constructor(content:string,answers: Answer[])
    {
        this.content=content;
        this.answers=answers;
    }

}
export class Answer
{
    public content: string;
    public correctnes: boolean;
    public time:number;

    constructor(_content:string,_corr:boolean,_time:number=0)
    {
        this.content = _content;
        this.correctnes =  _corr;
        this.time=_time;
    }
}
export class TestSummary
{
    public answerTaken: Array<Answer>;
    public questions: Array<Question>;
    public allTIme: number;
    public 

}