import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  userForm= new FormGroup({
    'productid':new FormGroup('',Validators.required),
    'productname':new FormGroup('',Validators.required),
    'producttype':new FormGroup('',Validators.required),
    'productcategory':new FormGroup('',Validators.required),
    'productprice':new FormGroup('',Validators.required)
  });

  userSumbit()
  {
    if (this.userForm.valid)
    {
      console.log(this.userForm.value)
    }
    else
    {
      console.log('all field is required');
    }
  }

}
