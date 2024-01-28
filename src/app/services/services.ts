import { Injectable } from "@angular/core";
import { Category } from "../Shered/Model/Category";

@Injectable({
    providedIn: 'root'
})
export class services {
category= new Map<number, Category>();
nextId = 1;
  
constructor() {}

list() :Category[] {
return Array.from(this.category.values());
}
get(id:number) : Category | undefined {
    return this.category.get(id);
}
add(newCategoryData: Category) {
    newCategoryData.id =this.nextId
    this.category.set(this.nextId, newCategoryData);
    this.nextId++;

  //  update(existingCategory : Category) : void {
    //    if (this.category.has(existingCategory.id)) {
       //     this.category.set(existingCategory.id, existingCategory)
      //  }
    }
}





