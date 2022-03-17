import { SpecialtyService } from './../../services/specialty.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  durationInSeconds = 5;
  data:FormGroup;
  specialitiess = [];
  constructor(private customersService:CustomersService,
              private fb: FormBuilder,
              private specialiteService:SpecialtyService) {

               }

  ngOnInit(): void {
    /*this.data = new FormGroup(
      {
        nom: new FormControl('',[Validators.required]),
        prenom: new FormControl('',[Validators.required]),
        telephone: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required]),      
      }
    )*/
    this.specialiteService.listeSpecialties().toPromise().then((res:any[])=>{
      this.specialitiess = res;
    })
    this.data = this.fb.group({
      nom: new FormControl('',[Validators.required]),
      prenom: new FormControl('',[Validators.required]),
      telephone: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      specialites: this.fb.array([])
    })
  }

  onCheckboxChange(e:any){
    const specialites: FormArray = this.data.get('specialites') as FormArray;
    if(e.target.checked){
      specialites.push(new FormControl(e.target.value));
    }  
  }
  add(){
    console.log(this.data.value);
    this.customersService.addStaff(this.data.value).toPromise().then((res:any)=>{
      if (res.user_id) {
        alert('Added successfully !');
        this.data.reset();
      }else{
        alert('Something went wrong');
      }
    }).catch((err)=>{
        alert('Something went wrong, plase try again');
    })

    }

}
