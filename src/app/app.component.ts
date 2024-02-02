import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import {FooterComponent } from './footer/footer.component';
import { DeleteCategoryDialogComponent } from './delete-category-dialog/delete-category-dialog.component';
import { WordListComponent } from './word-list/word-list.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,
         RouterOutlet,
          HeaderComponent,
           RouterOutlet,
           FooterComponent,
    WordListComponent,
           DeleteCategoryDialogComponent,
        ],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
