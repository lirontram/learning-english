import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { color } from './Shered/Model/color';
import {FooterComponent } from './footer/footer.component';
import { FormsComponent } from './forms/forms.component';
import { Category } from './Shered/Model/Category';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, RouterOutlet,FooterComponent,FormsComponent],
})
export class AppComponent {
}
