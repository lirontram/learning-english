import { TranslatedWord } from "./translatedWord";


///export class Category {
   
   // lastUpdateDate = new Date();
  //  words : TranslatedWord[] = [];
   
   
   // constructor(public id : number,
      //  public name : string,
      //  public origin : string,
      //  public target : string) {

///}
       
   
export class Category {
    id : number;
    name : string;
    origin : String;
    target : string;
    lastUpdateDate = new Date();
    words : TranslatedWord[] = [];
    
    constructor(id: number,
    name : string,
    origin : string,
    target : string) {
    this.id = id;
    this.name = name;
    this.origin = origin;
    this.target = target;
    }
    }
    
       
 

        
       
    

