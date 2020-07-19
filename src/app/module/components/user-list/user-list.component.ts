import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserTableComponent } from '../../ui/user-table/user-table.component';
import {UserService} from 'src/app/service/user/user.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./styles/userBody.scss']
})
export class UserListComponent implements OnInit {



  constructor(private userService: UserService) {
  }


  applyFilter(event: Event)
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userService.filterSource(filterValue.trim().toLowerCase())
  }

  ngOnInit(): void {
  }

}
