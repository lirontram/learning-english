import { Component } from '@angular/core';
import { color } from '../Shered/Model/color';
import { nomber } from '../Shered/Model/nomber';
import { MatTableModule } from '@angular/material/table';
 import { MatIconModule } from '@angular/material/icon';
 import { RouterModule } from '@angular/router';
import { Category } from '../Shered/Model/Category';
 
@Component({
  selector: 'app-word-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule,RouterModule],
  templateUrl: './word-list.component.html',
  styleUrl: './word-list.component.css'
})
export class WordListComponent {
  displayedColumns: string[] = ['name', 'no', 'last edit', 'Actions'];

  dataSource = [new Category(0,"","","")]

}

