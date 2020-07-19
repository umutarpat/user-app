import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';
import { userElement } from 'src/app/module/models/userElement'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./styles/addBody.scss']
})
export class AddListComponent implements OnInit {
  public data: userElement;
  errorFree: boolean = true;
  addForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    tc: new FormControl('', [Validators.required, Validators.minLength(11)]),
    position: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    status: new FormControl(true),
  });



  constructor(private userService: UserService, private router: Router) { }






  sendData(newUser: userElement) {

    if (this.addForm.valid) {
      this.errorFree = true;
      console.log(newUser.status);
      console.log('gelen newUser: ' + newUser);



      this.userService.addUser(newUser);
      this.router.navigate(['/userlist']);
    } else {
      this.errorFree = false;
      console.log("başarısız");
    }

  }



  ngOnInit(): void {
  }




}
