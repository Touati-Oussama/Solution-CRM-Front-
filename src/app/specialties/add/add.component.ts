import { SpecialtyService } from './../../services/specialty.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  data:FormGroup;
  constructor(private specialtyService:SpecialtyService) { }

  ngOnInit(): void {
    this.data = new FormGroup(
      {
        nom: new FormControl('',[Validators.required])
      }
    )
  }

  add(){
    console.log(this.data.value);
    this.specialtyService.add(this.data.value).toPromise().then((res:any)=>{
      if (res.spec_id) {
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
