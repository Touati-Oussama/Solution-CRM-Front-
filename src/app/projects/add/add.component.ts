import { ProjetService } from './../../services/projet.service';
import { CustomersService } from 'src/app/services/users.service';
import { SpecialtyService } from 'src/app/services/specialty.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  customers = [];
  specialities = [];
  data = new FormGroup({
    designation: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    client: new FormControl('',Validators.required),
    specialite: new FormControl('',Validators.required)
  })
  constructor(private customerService:CustomersService, private specialiteService: SpecialtyService,
    private projetService:ProjetService) { }

  ngOnInit(): void {
    this.customerService.listCustomers().toPromise().then((res:any[])=>{
      this.customers = res;
      console.log(res);
    })
    this.specialiteService.listeSpecialties().toPromise().then((res:any) =>{
      this.specialities = res;
    })
  }

  add(){
    console.log(this.data.value);
    this.projetService.add(this.data.value).toPromise().then((res:any)=>{
      if (res.id) {
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
