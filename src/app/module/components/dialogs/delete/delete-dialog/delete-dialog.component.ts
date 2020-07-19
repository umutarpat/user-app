import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {userElement} from 'src/app/module/models/userElement'

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./styles/delete-dialog.component.scss']
})
export class DeleteDialogComponent {


  local_data: userElement;

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA)  public data: userElement) {
    console.log(data);
    this.local_data = { ...data };
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  confirmDelete(): void {
    this.dialogRef.close({ event: 'Delete' });

  }

}
