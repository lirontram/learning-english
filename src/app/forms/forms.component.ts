import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { Category } from '../Shered/Model/Category';
import { services } from '../services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule,CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule,],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  category: Category = new Category(0,'','','');
 
  

constructor(private services: services, private router: Router) {}

onSubmitRegistration() {
  console.log("Form submitted!");
  this.services.add(this.category);
  this.router.navigate(['/']);
  
}
  
  }



