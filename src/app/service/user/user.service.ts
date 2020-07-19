import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { userElement } from 'src/app/module/models/userElement'


var ELEMENT_DATA: userElement[] = [
  { id: 0, name: 'Sami Güler', position: 'Stajyer', status: true, tc: 15789456782 },
  { id: 1, name: 'Ozan Aslan', position: 'Muhasebeci', status: true, tc: 24863578951, },
];


@Injectable({
  providedIn: 'root'
})
export class UserService {

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }



  addUser(user: userElement) {
    user.id = this.dataSource.data.length;

    console.log(user);
    this.dataSource.data.push(user);
  }



  getUsers() {
    return this.dataSource;

  }

  getUser(index) {
    console.log(this.dataSource.data);
    console.log("getUser: " + this.dataSource.data.find(x => x.id == index));
    return this.dataSource.data.find(x => x.id == index);
  }

  editUser(user: userElement) {
    console.log("girdi " + user);
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      if (value.id == user.id) {
        value.name = user.name;
        value.position = user.position;
        value.tc = user.tc;
        value.status = user.status;
      }
      return true;
    });
  }

  deleteUser(id: any) {
    this.dataSource.data.splice(id, 1);
    this.dataSource._updateChangeSubscription();
    console.log("silme id:" + id);
  }

  filterSource(filterValue) {
    this.dataSource.filter = filterValue;
  }

}
