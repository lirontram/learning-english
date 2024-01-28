import { TranslatedWord } from "./TranslatedWord";

export class Category {
    id : number;
    name : string;
    origin :"";
    target :"";
    lastUpdateDate = new Date();
    words : TranslatedWord[] = [];

    constructor(
        id: number,
        name : string,
        origin : "",
        target : "", ) 
        {
        this.id = id;
        this.name = name;
        this.origin = origin;
        this.target = target;
    }
}
