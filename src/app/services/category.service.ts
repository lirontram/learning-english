import { Injectable } from '@angular/core';
import { Category } from '../Shered/Model/category';
import { count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
categorys = new Map<number, Category>();
nextId = 1;
  count: any;
 

list() : Category[] {
  return Array.from(this.categorys.values());
}

get(id : number) : Category | undefined {
  return this.categorys.get(id);
}

add(newCategory : Category) : void {
  let newId = this.nextId;
  newCategory.id = newId;
  this.categorys.set(newId, newCategory);
  ++this.nextId;
  ++this.count
}

update(category : Category) : void {
  if (this.categorys.has(category.id)) {
    this.categorys.set(category.id, category);
  }
}


delete(id:number) : void {
    this.categorys.delete(id);
  }
}






