import { CustomersService } from '../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  data:FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private customersService:CustomersService) { }

  ngOnInit(): void {
    this.data = new FormGroup(
      {
        nom: new FormControl('',[Validators.required]),
        prenom: new FormControl('',[Validators.required]),
        telephone: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required]),
        //role: new FormControl('CLIENT',[Validators.required]),
      }
    )
  }

  add(){
    console.log(this.data.value);
    this.customersService.add(this.data.value).toPromise().then((res:any)=>{
      if (res.user_id) {
        alert('Added successfully !');
        this.data.reset();
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      }else{
        alert('Something went wrong');
      }
    },
    err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
      }

    )}
}
