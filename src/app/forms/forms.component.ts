import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule,CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
CategoryName=''
SourceLanguage=''
TargetLanguage=''

SubmitRegistrationForm () {
  
}


}
