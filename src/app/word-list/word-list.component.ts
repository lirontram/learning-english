import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { color } from '../Shered/Model/color';
import { nomber } from '../Shered/Model/nomber';
import { MatTableModule } from '@angular/material/table';
 import { MatIconModule } from '@angular/material/icon';
 import { RouterModule } from '@angular/router';
import { Category } from '../Shered/Model/Category';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { services } from '../services/services';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
 
@Component({
  selector: 'app-word-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule,RouterModule, CommonModule, MatButtonModule],
  templateUrl: './word-list.component.html',
  styleUrl: './word-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordListComponent implements OnInit {
  constructor(private services : services) {}
  ngOnInit(): void {
    this.AllCategorys = this.services.list();
  }
  AllCategorys : Category[] =[] ;
  


 displayedColums = ['name', 'no', 'last edit', 'Actions'];

  dataSource = [new Category(0,"","Language","Language")]

}

