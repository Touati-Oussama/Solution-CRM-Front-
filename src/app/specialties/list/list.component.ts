import { SpecialtyService } from './../../services/specialty.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data = [];
  constructor(private specialityService: SpecialtyService) { }

  ngOnInit(): void {
    this.specialityService.listeSpecialties().toPromise().then((res:any[])=>{
      console.log(res);
      this.data = res;
    })
  }

  delete(id:number){
    console.log(id);
    if (confirm('Do you really want to delete this specialty ?')){
      this.specialityService.delete(id).toPromise().then((res:any)=>{
        if (res) {
          alert('Deleted  successfully !');
        }else{
          alert('Something went wrong');
        }
      }).catch((err)=>{
          alert('Something went wrong, plase try again');
      })
    }
  }
}
