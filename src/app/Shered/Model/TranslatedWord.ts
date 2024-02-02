import { Category } from "./category";


export class TranslatedWord {
    constructor(
        public origin : string,
        public target: Category) 
        {}
}
