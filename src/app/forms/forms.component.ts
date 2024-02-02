import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { Category } from '../Shered/Model/category';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import { TranslatedWord } from '../Shered/Model/translatedWord';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule,CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule,MatIconModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit{
 @Input() idString?:string;
  currentCategory : Category = new Category(0,'','','')


 constructor(private categoryService :CategoryService, private router : Router) {}
 
  ngOnInit(): void {
   if (this.idString)  {
    let id:number = parseInt(this.idString);
const category = this.categoryService.get(id);
    if (category) {
    this.currentCategory = category;

    } 
}
  }

  onSubmitRegistration() {
 console.log("Form submitted!");
 if(this.idString) {
  this.categoryService.update(this.currentCategory)
 } else {
  this.categoryService.add(this.currentCategory)
 }
 this.router.navigate(['/']);
}
  
addTranslatedWord() {
  this.currentCategory.words.push(new TranslatedWord("",""));
}
removeTranslatedWord(index :number) {
  this.currentCategory.words.splice(index, 1);

}




}



