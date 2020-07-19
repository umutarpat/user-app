import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';
import { userElement } from 'src/app/module/models/userElement'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./styles/editBody.scss',]
})
export class EditListComponent implements OnInit {


  index  = this.route.snapshot.paramMap.get('id');
  data: userElement;
  editForm;
  errorFree: boolean = true;

  constructor(private userService: UserService,private router: Router,private route: ActivatedRoute) {
    console.log(this.index);
    this.data = this.userService.getUser(this.index);

  }





  editData(user: userElement) {
    if(this.editForm.valid){
      console.log(user);
      this.errorFree = true;
      this.userService.editUser(user);
      this.router.navigate(['/userlist']);
    }else {
      console.log("başarısız");
      this.errorFree = false;
    }

  }



  ngOnInit(): void {
    this.editForm = new FormGroup({
      id: new FormControl(this.data.id,),
      name: new FormControl(this.data.name, [Validators.required, Validators.maxLength(50)]),
      tc: new FormControl(this.data.tc,[Validators.required,Validators.minLength(11)]

      ),
      position: new FormControl(this.data.position, [Validators.required, Validators.maxLength(50)]),
      status: new FormControl(this.data.status),
    });

    console.log(this.data.status);
  }
}
