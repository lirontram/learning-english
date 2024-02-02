import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
 import { MatIconModule } from '@angular/material/icon';
 import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Category } from '../Shered/Model/category';
import { CategoryService } from '../services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryDialogComponent } from '../delete-category-dialog/delete-category-dialog.component';
 
@Component({
  selector: 'app-word-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule,RouterModule, CommonModule, MatButtonModule],
  templateUrl: './word-list.component.html',
  styleUrl: './word-list.component.css',
 
})
export class WordListComponent implements OnInit {
  displayedColums: string[] =['name', 'number', 'last edit', 'actions' ,];

  constructor(private categoryService : CategoryService, private dialog: MatDialog) {}
  categorys : Category[]=[] 

  ngOnInit(): void {
    this.categorys = this.categoryService.list()
  }
 
deleteCategory(id:number, name:string) {
  const dialogRef = this.dialog.open(DeleteCategoryDialogComponent,{data: name,});
  
  dialogRef.afterClosed().subscribe(deletionConfirmed => {
    if(deletionConfirmed){
      this.categoryService.delete(id);
      this.categorys=this.categoryService.list()
    }
  }
    );
}
}


