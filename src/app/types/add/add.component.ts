import { TypeService } from './../../services/type.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  data:FormGroup;
  constructor(private typeService:TypeService) { }

  ngOnInit(): void {
    this.data = new FormGroup(
      {
        type: new FormControl('',[Validators.required])
      }
    )
  }


  add(){
    console.log(this.data.value);
    this.typeService.add(this.data.value).toPromise().then((res:any)=>{
      if (res.type_id) {
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
