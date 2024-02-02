import { TranslatedWord } from "./translatedWord";
import { Word } from "./word";



export class Category {
    constructor(public id : number,
        public name : string,
        public origin : string,
        public target : string) {

}
       
   
        lastUpdateDate = new Date();
    words : TranslatedWord[] = [];
    public word : Word[] = []; 
 

        
       
    
}
