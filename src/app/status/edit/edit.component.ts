import { StatusService } from './../../services/status.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  successMsg = "";
  errorMsg = "";
  data = new FormGroup(
    {
      status: new FormControl('',[Validators.required]),
      id: new FormControl('',[Validators.required]),
      dateCreation: new FormControl('',[Validators.required])
    }
  )
  constructor(private statusService:StatusService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    console.log(id);

    this.statusService.getStatus(id).toPromise().then((res:any)=>{
      console.log(res);
      this.data.setValue(res);
    })
  }

  update(){
    const id = this.route.snapshot.params.id;
    this.statusService.update(this.data.value,id).toPromise().then((res:any)=>{
      if (res.id) {
        alert("Updated Succesfuly !");
        this.router.navigate(['status']);
      }else{
        alert("Something went wrong");
      }
    }).catch((err)=>{
      alert('Something went wrong, plase try again');
    })
  }
}
