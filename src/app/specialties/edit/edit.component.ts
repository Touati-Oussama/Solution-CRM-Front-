import { ActivatedRoute, Router } from '@angular/router';
import { SpecialtyService } from './../../services/specialty.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  specialite;
  data = new FormGroup(
    {
      nom: new FormControl('',[Validators.required]),
    }
  )
  constructor(private specialtyService: SpecialtyService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    console.log(id);

    this.specialtyService.getSpecialty(id).toPromise().then((res:any)=>{
      console.log(res);
      this.specialite = res.specialite;
      console.log(this.specialite);
    })
  }

  update(){
    const id = this.route.snapshot.params.id;
    this.specialtyService.update(this.data.value,id).toPromise().then((res:any)=>{
      console.log(res);
      if (res.spec_id) {
        alert("Updated Succesfuly !");
        this.router.navigate(['specialties']);
      }else{
        alert("Something went wrong");
      }
    }).catch((err)=>{
      alert('Something went wrong, plase try again');
    })
  }
}
