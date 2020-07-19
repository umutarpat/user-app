import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { UserService } from 'src/app/service/user/user.service';
import { userElement } from 'src/app/module/models/userElement'
import { DeleteDialogComponent } from '../../components/dialogs/delete/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserListComponent } from '../../components/user-list/user-list.component';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./styles/tableBody.scss']
})
export class UserTableComponent implements OnInit {

  displayedColumns = ['id', 'name', 'tc', 'position', 'status', 'actions'];
  dataSource;



  constructor(public dialog: MatDialog, private userService: UserService, private router: Router) {
    this.dataSource = this.userService.getUsers();

  }



  openDeleteDialog(action, element, id) {
    console.log(element);
    element.action = action;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: element,

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Delete') {
        this.userService.deleteUser(id);
      }
    });
  }

  openEdit(id) {
    this.router.navigate(['../edit', id]);
  }

  ngOnInit(): void {

  }

}
