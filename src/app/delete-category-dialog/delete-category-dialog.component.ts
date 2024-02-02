import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-category-dialog',
  standalone: true,
  imports: [MatDialogActions,
    MatDialogClose, 
    MatDialogModule,
     MatDialogContent,
     MatButtonModule, 
     MatDialogTitle],
  templateUrl: './delete-category-dialog.component.html',
  styleUrl: './delete-category-dialog.component.css'
})
export class DeleteCategoryDialogComponent {
constructor(
  public dialogRef: MatDialogRef<DeleteCategoryDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public name : string) {}
}
