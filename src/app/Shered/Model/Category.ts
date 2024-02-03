import { TranslatedWord } from "./translatedWord";
   
export class Category {
    id : number;
    name : string;
    origin : String;
    target : string;
    caunt : number | undefined;
    lastUpdateDate = new Date();
   words : TranslatedWord[] = [];
    
    constructor(id: number,
    name : string,
    origin : string,
    target : string,) {
    this.id = id;
    this.name = name;
    this.origin = origin;
    this.target = target;
    this.caunt = this.caunt;
    }
    }
    
       
 

        
       
    

